import React, { useContext } from "react";
import Nav from "../component/Nav";
import Card from "../component/card";
import { listingDataContext } from "../context/ListingContext";
import AISearch from "../component/AISearch";


const Home = () => {
  

  const { newlistingdata, searchData } = useContext(listingDataContext);
  console.log("searchData:", searchData);
console.log("newlistingdata:", newlistingdata);

  // Search result priority
  const dataToShow =
    searchData && searchData.length > 0 ? searchData : newlistingdata;

  return (
    <div
      className="
        min-h-screen
        transition-colors duration-300
      "
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      {/* Navbar */}
      <Nav />

      {/* Content */}
      <main
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-10
          pt-[220px] md:pt-[180px]
          pb-20
        "
      >

            {/* <AISearch/> */}
            


        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">
            Explore stays
          </h1>
          <p className="text-sm opacity-70">
            Handpicked homes for your next stay
          </p>
        </div>

        {/* Cards */}
        {dataToShow?.length > 0 ? (
          <div
            className="
              grid gap-6 justify-items-center
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
            "
          >
            {dataToShow.map((list) => (
              <Card
                key={list._id}
                title={list.title}
                landmark={list.landmark}
                city={list.city}
                image1={list.image1}
                image2={list.image2}
                image3={list.image3}
                rent={list.rent}
                id={list._id}
                ratings={list.ratings}
                isBooked={list.isBooked}
                host={list.host}
              />
            ))}
          </div>
        ) : (
          <div className="h-[40vh] flex flex-col items-center justify-center">
            <p className="text-lg font-medium opacity-80">
              No results found
            </p>
            <p className="text-sm opacity-60">
              Try searching another location
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
