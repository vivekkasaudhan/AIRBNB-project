import React, { useContext } from 'react'
import Nav from '../component/Nav'
import Card from '../component/card'
import { listingDataContext } from '../context/ListingContext'
const Home = () => {
  let {listingdata,setListingdata,newlistingdata}=useContext(listingDataContext)
  return (
    <div>
      <Nav/>
      <div className=' w-screen h=[77vh] flex items-center flex-wrap gap-x-4 gap-y-6 justify-center mt-[250px] md:mt-[180px] overflow-auto'>
     {  newlistingdata.map((list)=>(
        <Card
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
     
    </div>
  )
}

export default Home
