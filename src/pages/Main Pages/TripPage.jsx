import { React, useState, useEffect, useContext } from 'react'
import HeroSection from '../../components/layouts/HeroSection/HeroSection'
import Adverts from '../../components/ui/Advertisement/Adverts'
import SwiperMAinCard from '../../components/ui/SwiperMainCard/SwiperMainCard'
import AlertWindowContext from '../../contexts/AlertWindowContext'
import { fetchTripPageData } from '../../queries/trip'

const TripPage = () => {
  
  const[data , setData] = useState({
    topRated: [], 
    VIP: [], 
    cheapest: [], 
    longTrips: [],
    shortTrips: [],
    offers: [],
  })
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState('');

  const {alertWindowProperty,setAlertWindowProperty} = useContext(AlertWindowContext)

  useEffect(()=>{
    async function fetchData() {
      setLoading(true)
      const response = await fetchTripPageData();
      if(response.error) {
        console.log(response)
        setAlertWindowProperty(prev=>({...prev,on: true,message:response.error.message,type:'error'}))
      }
      else {
        setLoading(false)
        setData(response.data)
      }
    }
    fetchData()
  },[])


  return (
    <>
      <HeroSection name="trip" />
      {data.topRated&&<div className='container'>
        <h3 className='sectionTitles'>Top Rated</h3>
        <SwiperMAinCard data={data.topRated}  type="tripsSlide"/>
      </div>}
      {data.VIP&&<div className='container'>
        <h3 className='sectionTitles'>VIP</h3>
        <SwiperMAinCard data={data.VIP}  type="tripsSlide"/>
      </div>}
      {data.cheapest&&<div className='container'>
        <h3 className='sectionTitles'>Cheapest</h3>
        <SwiperMAinCard data={data.cheapest}  type="tripsSlide"/>
      </div>}
      <Adverts name ="trip"/>
      {data.shortTrips&&<div className='container'>
        <h3 className='sectionTitles'>Short Trip</h3>
        <SwiperMAinCard data={data.shortTrips}  type="tripsSlide"/>
      </div>}
      {data.longTrips&&<div className='container'>
        <h3 className='sectionTitles'>Long trip</h3>
        <SwiperMAinCard data={data.longTrips}  type="tripsSlide"/>
      </div>}
      {/* <div className='container'>
        <h3 className='sectionTitles'>offers</h3>
        <SwiperMAinCard data={data.offers}  type="tripsSlide"/>
      </div> */}
      </>
  )
}

export default TripPage
