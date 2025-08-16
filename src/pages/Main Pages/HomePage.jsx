import { React, useEffect, useState, useContext } from 'react'
import HeroSection from '../../components/layouts/HeroSection/HeroSection'
import SwiperMainCard from '../../components/ui/SwiperMainCard/SwiperMainCard'
import TopCountries from '../../components/ui/topCountries/TopCountries'
import Adverts from '../../components/ui/Advertisement/Adverts'
import Features from '../../components/ui/Features/Features'
import AlertWindowContext from '../../contexts/AlertWindowContext'
import { fetchHomePageData } from '../../queries/home'

const HomePage = () => {

  const[ data , setData ] = useState({
    popularCountries:{},
    top_hotels:{},
    top_trips:{},
    top_attractions:{},
    trip_offers:{}

  })

  const {alertWindowProperty,setAlertWindowProperty} = useContext(AlertWindowContext)

  const[loading , setLoading] = useState(true);

  useEffect(()=>{
    async function fetchData() {
      setLoading(true)
      const response = await fetchHomePageData();
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
      <HeroSection name="home" />
      <Features />
      <TopCountries data={data.popularCountries}/>
      <div className='container'>
        <h3 className='sectionTitles'>Top Hotels</h3>
        <SwiperMainCard data={data.top_hotels}  type="hotelsSlide"/>
      </div>
      <div className='container'>
        <h3 className='sectionTitles'>Top Trips</h3>
        <SwiperMainCard data={data.top_trips} type="tripsSlide"/>
      </div>
      <Adverts name="home" />
      <div className='container'>
        <h3 className='sectionTitles'>Top Attractions</h3>
        <SwiperMainCard data={data.top_attractions} type="attractionsSlide"/>
      </div>
        <div className='container'>
          {!loading&& data.trip_offers[0] &&<h3 className='sectionTitles'>Offers</h3>}
          {loading&&<SwiperMainCard data={data.trip_offers} type="tripsSlide"/>}
        </div>
    </>
  )
}

export default HomePage
