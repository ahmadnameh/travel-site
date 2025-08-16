import { React, useState, useEffect, useContext } from 'react'
import HeroSection from '../../components/layouts/HeroSection/HeroSection'
import TopCountries from '../../components/ui/topCountries/TopCountries'
import AlertWindowContext from '../../contexts/AlertWindowContext'
import { fetchFlightPageData } from '../../queries/flight'

const FlightPage = () => {

  const[ data , setData ] = useState({
    popularCountries:{},
  })
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState('');

  const {alertWindowProperty,setAlertWindowProperty} = useContext(AlertWindowContext)

  useEffect(()=>{
    async function fetchData() {
      setLoading(true)
      const response = await fetchFlightPageData();
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
      <HeroSection name="flight" />
      <TopCountries data={data.popularCountries}/>
    </>
  )
}

export default FlightPage
