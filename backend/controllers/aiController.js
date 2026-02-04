import Groq from "groq-sdk";
import Listing from "../models/listing.model.js";

export const aiSearch = async (req, res) => {
  try {
    // 1️⃣ Validate API key at runtime
    if (!process.env.GROQ_API_KEY) {
      return res.status(500).json({
        success: false,
        message: "Groq API key missing",
      });
    }

    // 2️⃣ Initialize Groq INSIDE function (important)
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const { query } = req.body;

    if (!query) {
      return res.status(400).json({
        success: false,
        message: "Query is required",
      });
    }

    // 3️⃣ Choose model safely (env override supported)
    const MODEL = process.env.GROQ_MODEL || "llama-3.1-8b-instant";

    // 4️⃣ Call Groq AI
    const completion = await groq.chat.completions.create({
      model: MODEL,
      temperature: 0,
      messages: [
        {
          role: "system",
          content:
            "You are an API. Return ONLY valid JSON. No explanation. No text.",
        },
     {
  role: "user",
  content: `
User query:
"${query}"

Convert this query into JSON filters.

Rules:
- If user says "between X and Y", set minRent=X and maxRent=Y
- If user says "under X", set maxRent=X
- If user says "above X" or "more than X", set minRent=X
- If user says "best", sortBy="ratings"
- If user mentions places like railway station, airport, metro, set nearLandmark
- Return ONLY JSON

JSON format:
{
  "city": "",
  "minRent": null,
  "maxRent": null,
  "nearLandmark": "",
  "sortBy": "ratings",
  "limit": 5
}
`
},

      ],
    });

    let text = completion.choices[0].message.content;
    console.log("RAW AI:", text);

    // 5️⃣ Clean markdown if AI adds it
    text = text.replace(/```json|```/g, "").trim();

    let filters;
    try {
      filters = JSON.parse(text);
    } catch (err) {
      console.error("JSON PARSE ERROR:", text);
      return res.status(400).json({
        success: false,
        message: "AI returned invalid JSON",
      });
    }

    // 6️⃣ Build MongoDB query
   const mongoQuery = {
  isBooked: false,
};

// City
if (filters.city) {
  mongoQuery.city = new RegExp(filters.city, "i");
}

// Price range
if (filters.minRent || filters.maxRent) {
  mongoQuery.rent = {};
  if (filters.minRent) mongoQuery.rent.$gte = filters.minRent;
  if (filters.maxRent) mongoQuery.rent.$lte = filters.maxRent;
}

// Landmark proximity (simple text match)
if (filters.nearLandmark) {
  mongoQuery.landmark = new RegExp(filters.nearLandmark, "i");
}


    const sortOption =
      filters.sortBy === "rent"
        ? { rent: 1 }
        : { ratings: -1 };

    // 7️⃣ Query database
    const listings = await Listing.find(mongoQuery)
      .sort(sortOption)
      .limit(filters.limit || 5);

    // 8️⃣ Response
    res.status(200).json({
      success: true,
      data: listings,
    });

  } catch (error) {
    console.error("AI SEARCH ERROR:", error);
    res.status(500).json({
      success: false,
      message: "AI search failed",
    });
  }
};
