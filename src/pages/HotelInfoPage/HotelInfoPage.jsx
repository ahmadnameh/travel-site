import { React, useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import SwiperHotelPic from '../../components/ui/SwiperHotelPic/SwiperHotelPic'
import HalfRating from '../../components/ui/Rating/Rating'
import PlaceIcon from '@mui/icons-material/Place';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import Comments_review from '../../components/ui/Comments&review/Comments_review';
import HotelsRoomTable from './hotelsRoomTable/HotelsRoomTable';
import AlertWindowContext from '../../contexts/AlertWindowContext'
import RoomInfo from './hotelsRoomTable/HotelRoomInfo';
import LanguageIcon from '@mui/icons-material/Language';
import "./HotelInfoPage.scss"
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import { getHotel } from '../../queries/hotel';

const HotelInfoPage = () => {

  const{alertWindowProperty,setAlertWindowProperty} = useContext(AlertWindowContext);
  const[data,setData] = useState()
  const[loading , setLoading] = useState(true);
  const[selectedRoomId,setSelectedRoomId] = useState();
  const location = useLocation()

  useEffect(()=>{
    async function fetchHomePageData() {

      setAlertWindowProperty(prev=>({...prev,on: true,type:'loading'}))
      setTimeout(() => setAlertWindowProperty(prev=>({...prev,on: false,type:'loading'})), 1500);
      
      setLoading(true)
      const response = await getHotel(location.state.id)
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

  // function organizePhonenumber(phNum) {
  //   let NewPhNum;
  //   for(i=1;i<=phNum.length;i++) {
  //     if(i%3==0) {
  //       NewPhNum[i]
  //     }
  //   }
  // }

  return (
    <div className='hotelDetailsPage container'>
      {data&&data.Hotel_info[0]&&<>
      <div className='hotelMainInfo'>
        <div>
        <div>
          <PlaceIcon/>#
          {data.Hotel_info[0].city.country.name} /
          {data.Hotel_info[0].city.name} /
          {data.Hotel_info[0].location}
        </div>
        <h3>{data.Hotel_info[0].name}</h3>
        <p>{data.Hotel_info[0].type.name}</p>
        <div>
          <HalfRating value={data.Hotel_info[0].rate} />
          <p>reviews : {data.Hotel_info[0].num_of_ratings}</p>
        </div>
        <p>prices starts from : <span className="price">350$</span></p>

        </div>
        

        
          
        <div>
          <p>Contact Info :</p>
          <p>
            <PhoneIcon/>{data.Hotel_info[0].phone_number}
            
          </p>
          <hr/>
          
          <p>
            <MailIcon/><a href={`mailto:${data.Hotel_info[0].email}`}>{data.Hotel_info[0].email}</a>
            
          </p>
          <hr/>
          <p>
            <LanguageIcon/><a href={data.Hotel_info[0].website_url}>visit website</a>
          </p>
          <hr/>

        </div>
        
        
      </div>
      <div>
        <div>
          <InfoOutlineIcon />
          <br/>
          {data.Hotel_info[0].details}
          {/* <hr/> */}
        </div>
        <div>
          <SwiperHotelPic imagesPath={data.Hotel_info[0].photo}/>
        </div>
      </div>
      <div>
      <HotelsRoomTable RoomsData={data.Rooms} setSelectedRoomId={setSelectedRoomId}/>
      <Comments_review data={data.Reviews}/>
      {selectedRoomId &&
        <RoomInfo selectedRoomId={{...selectedRoomId,id: data.Hotel_info[0].id}}  setSelectedRoomId={setSelectedRoomId}/>
      }

      </div>
      </>}
    </div>
  )
}

export default HotelInfoPage
