import {React,useState,useEffect,useContext} from 'react'
import { useLocation } from 'react-router-dom';
import AttractionAbout from '../../components/ui/AttractionAbout/AttractionAbout'
import SwiperPic from '../../components/ui/SwiperPic/SwiperPic'
import "./AttractionInfoPage.scss"
import Comments_review from '../../components/ui/Comments&review/Comments_review'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AlertWindowContext from '../../contexts/AlertWindowContext'
import apiCalls from '../../apiCalls/apiCalls';
import img1 from "/assets/ticket.png"
import { getAttraction } from '../../queries/attraction';
import RequiredLoginAlert from '../../components/ui/requiredLoginAlter/RequiredLoginAlert';



const AttrcationInfoPage = () => {


  const location = useLocation();

  const apiRequest = new apiCalls();

  const {alertWindowProperty,setAlertWindowProperty} = useContext(AlertWindowContext)

  const[loginRequiredWindowON,setLoginRequiredWindowON] = useState(false)

  const[data , setData ] = useState({})
  const[loading , setLoading] = useState(true);

  useEffect(()=>{
    async function fetchHomePageData() {

      setAlertWindowProperty(prev=>({...prev,on: true,type:'loading'}))
      setTimeout(() => setAlertWindowProperty(prev=>({...prev,on: false,type:'loading'})), 1500);

      setLoading(true)
      const response = await getAttraction(location.state.id)
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

  function getdays(available_days) {
    let true_days = [];
    for (let day in available_days) {
        if (available_days[day]) {
          true_days.push(day);
        }
    }

    return(true_days);
}

  function handleBook(id) {
    setLoginRequiredWindowON(true)
  }

  return (
    <div className='attractionDetailsPage container'>
      {data.attraction&&
      <>
        <div className='aboutSection'>
          <AttractionAbout data={data.attraction} />
          
          <div className='attractionPicSlide'>
            <SwiperPic data={data.attraction.photos}/>
          </div>
        
        </div>

      
        <p className="attractionWorkinHours">
          <AccessTimeIcon size="30px"/>
          open at: {data.attraction.open_at.split(" ")[1]} / close at: {data.attraction.close_at.split(" ")[1]}
        </p>
        
        <div className="AttractionWorkingDays">
          <CalendarTodayIcon/>
          <div>
            {getdays(data.attraction.available_days).map((item,index)=>(
              <p key={index}>
                {item}
                <span style={{fontWeight:"bold"}}>
                  {getdays(data.attraction.available_days).length - 1 != index ? '/ ' : ""}
                </span>
              </p>
            ))}
          </div>
        </div>

        <div className="attractionBookTicket">
          <div>
            <div>
              <p>Admission tickets : </p>
              <p>Price for adult : <span className="price">{data.attraction.adult_price}$</span></p>
              <p>Price for child : <span className="price">{data.attraction.child_price}$</span></p>
            </div>
            <img src={img1} alt="ticketIcon"/>
          </div>
          <button className='book' onClick={()=>handleBook(data.attraction.id)}>Book now</button>
        </div>

        <Comments_review data={data.reviews}/>
      </>}
      {loginRequiredWindowON && <RequiredLoginAlert onClose={()=>setLoginRequiredWindowON(false)} />}
    </div>
  )
}

export default AttrcationInfoPage
