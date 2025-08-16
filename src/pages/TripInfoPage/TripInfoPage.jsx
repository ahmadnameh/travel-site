import React, { useState , useEffect , useContext } from 'react'
import { useLocation } from 'react-router-dom';
import SwiperPic from '../../components/ui/SwiperPic/SwiperPic'
import TripAbout from '../../components/ui/TripAbout/TripAbout'
import TripDaysProgram from '../../components/ui/TripDaysProgram/TripDaysProgram';
import Comments_review from '../../components/ui/Comments&review/Comments_review';
import AlertWindowContext from '../../contexts/AlertWindowContext';
import { getTrip } from '../../queries/trip';
import RequiredLoginAlert from '../../components/ui/requiredLoginAlter/RequiredLoginAlert';
import "./TripInfoPage.scss"

const TripInfoPage = () => {

  const location = useLocation();

  const {alertWindowProperty,setAlertWindowProperty} = useContext(AlertWindowContext)

  const[data , setData ] = useState({})
  const[loading , setLoading] = useState(true);
  const[loginRequiredWindowON,setLoginRequiredWindowON] = useState(false)

  useEffect(()=>{
    async function fetchHomePageData() {

      setAlertWindowProperty(prev=>({...prev,on: true,type:'loading'}))
      setTimeout(() => setAlertWindowProperty(prev=>({...prev,on: false,type:'loading'})), 1500);
      
      setLoading(true)
      const response = await getTrip(location.state.id)
      if(response.error) {
        console.log(response)
        setAlertWindowProperty(prev=>({...prev,on: true,message:response.error.message,type:'error'}))
      }
      else {
        setLoading(false)
        setData(response.data)
      }
    }
    fetchHomePageData()
  },[])

  function handleBook(id) {
    setLoginRequiredWindowON(true)
  }


  return (
    
    <div className='tripDetailsPage container'>
      {data.trip&&
      <>
        <div className='TripaboutSection'>
          <div className='tripPicSlide'>
            <SwiperPic data={data.trip.photos}/>
          </div>
          <TripAbout data={data.trip}/>
        </div>

        <TripDaysProgram data={data.trip.days}/>

        <div>
          <h2>Available Dates: </h2>
          <table className='availableTripDates'>
            <tr>
              <th>Date</th>
              <th>price</th>
              <th>Book</th>
            </tr>
            {data.trip.dates.map((item,index)=>(
              <tr key={index}>
                <td>{new Date(item.departure_date).toLocaleDateString()}</td>
                <td className='price'>{item.price}$</td>
                <td><button onClick={()=>handleBook(item.id)}>Book</button></td>
              </tr>
            ))}
          </table>
        </div>
        
        <Comments_review data={data.reviews}/>
      </>}
      {loginRequiredWindowON && <RequiredLoginAlert onClose={()=>setLoginRequiredWindowON(false)} />}
    </div>
  )
}

export default TripInfoPage
