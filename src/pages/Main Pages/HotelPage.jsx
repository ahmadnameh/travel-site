import { React, useState, useEffect, useContext } from 'react'
import HeroSection from '../../components/layouts/HeroSection/HeroSection'
import SwiperMainCard from '../../components/ui/SwiperMainCard/SwiperMainCard'
import Adverts from '../../components/ui/Advertisement/Adverts'
import AlertWindowContext from '../../contexts/AlertWindowContext'
import { fetchHotelPageData } from '../../queries/hotel'


const HotelPage = () => {

  const[data,setData] = useState({
    All_suites: [], 
    Chain: [], 
    Inns: [], 
    Motel: [], 
    Resorts: [],
    topRated: [],
  })

  const [loading , setLoading] = useState(true);
  const [error , setError] = useState('');
  
  const {alertWindowProperty,setAlertWindowProperty} = useContext(AlertWindowContext)

  useEffect(()=>{
    async function fetchData() {
      setLoading(true)
      const response = await fetchHotelPageData();
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
      <HeroSection name="hotel" />
      {data.topRated&&<div className='container'>
        <h3 className='sectionTitles'>Top Rated</h3>
        <SwiperMainCard data={data.topRated}  type="hotelsSlide"/>
      </div>}
      {data.All_suites&&<div className='container'>
        <h3 className='sectionTitles'>Suites</h3>
        <SwiperMainCard data={data.All_suites}  type="hotelsSlide"/>
      </div>}
      {data.Chain&&<div className='container'>
        <h3 className='sectionTitles'>Chain</h3>
        <SwiperMainCard data={data.Chain}  type="hotelsSlide"/>
      </div>}
      <Adverts name="hotel" />
      {data.Inns&&<div className='container'>
        <h3 className='sectionTitles'>inns</h3>
        <SwiperMainCard data={data.Inns}  type="hotelsSlide"/>
      </div>}
      {data.Motel&&<div className='container'>
        <h3 className='sectionTitles'>Motel</h3>
        <SwiperMainCard data={data.Motel}  type="hotelsSlide"/>
      </div>}
      {data.Resorts&&<div className='container'>
        <h3 className='sectionTitles'>Resorts</h3>
        <SwiperMainCard data={data.Resorts}  type="hotelsSlide"/>
      </div>}

    </>
  )
}

export default HotelPage
