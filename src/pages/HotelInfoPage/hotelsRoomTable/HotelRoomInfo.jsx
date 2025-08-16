import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HotelIcon from '@mui/icons-material/Hotel';
import PersonIcon from '@mui/icons-material/Person';
import axios from "axios";
import SwiperPic from "../../../components/ui/SwiperPic/SwiperPic";
import "./HotelRoomInfo.scss";
import AlertWindow from "../../../components/ui/AlertWindow/AlertWindow";
import { getRoom } from "../../../queries/hotel";
import RequiredLoginAlert from "../../../components/ui/requiredLoginAlter/RequiredLoginAlert";

const RoomInfo = ({ selectedRoomId, setSelectedRoomId }) => {

  const [data,setdata] = useState([]);

  const[loginRequiredWindowON,setLoginRequiredWindowON] = useState(false)

  useEffect(()=>{
    async function fetch() {
      try {
        const response = await getRoom(selectedRoomId);
        setdata(response.data.Room_info);
      }
      catch(error) {
        console.log(error.message);
      }
    }
    fetch();
  },[])
  

  const handlebook = (e,id) => {
    e.preventDefault();
    setLoginRequiredWindowON(true)


  }
    
  return(
    <AlertWindow closable={true} setClose={()=>setSelectedRoomId()}>
      <div className="roomInfoWindow" >
      {data && data.hotel &&
        <div> 
            <div>
              {data.photo&&<SwiperPic data={data.photo} />}
            </div>
            <div>
              <h3>{data.hotel.name} hotel</h3>
              <p className="roomtype">{data.room_type}</p>
              <p>{data.details}</p>
              <p>{data.Beds} Beds <HotelIcon/></p>
              <p>{data.Sleeps} sleeps <PersonIcon/></p>
              <div>
                {data.features.map((item,index)=> (
                  <p className="roomFeature" key={index}>
                    <TaskAltIcon size="1.3em"/>
                    {item.name}
                  </p>
                ))}
              </div>
              <div>
                <p style={{fontWeight:"600",fontSize:"18px"}}>Price for night<span className="price">  {data.Price_for_night}$</span></p>
                <button onClick={(e)=>handlebook(e,data.id)}>Book now</button>
              </div>
            </div>
        </div>
      }
      </div>
      {loginRequiredWindowON && <RequiredLoginAlert onClose={()=>setLoginRequiredWindowON(false)} />}
      </AlertWindow>
    );
}
export default RoomInfo;