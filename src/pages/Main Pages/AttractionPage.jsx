import { React, useState, useEffect, useContext } from 'react'
import HeroSection from '../../components/layouts/HeroSection/HeroSection'
import SwiperMainCard from '../../components/ui/SwiperMainCard/SwiperMainCard'
import AlertWindowContext from '../../contexts/AlertWindowContext'
import { fetchAttractionPageData } from '../../queries/attraction'

const AttractionPage = () => {
  const[data,setData] = useState({
    free: [],
    paid: [],
    topRated: []
  })
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState('');

  const {alertWindowProperty,setAlertWindowProperty} = useContext(AlertWindowContext)

  useEffect(()=>{
    async function fetchData() {
      setLoading(true)
      const response = await fetchAttractionPageData();
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
      <HeroSection name="attraction" />
      {data.topRated&&<div className='container'>
        <h3 className='sectionTitles'>Top Rated</h3>
        <SwiperMainCard data={data.topRated} type="attractionsSlide"/>
      </div>}
      {data.paid&&<div className='container'>
        <h3 className='sectionTitles'>Paid</h3>
        <SwiperMainCard data={data.paid} type="attractionsSlide"/>
      </div>}
      {data.free&&<div className='container'>
        <h3 className='sectionTitles'>Free</h3>
        <SwiperMainCard data={data.free} type="attractionsSlide"/>
      </div>}
      
    </>
  )
}

export default AttractionPage
