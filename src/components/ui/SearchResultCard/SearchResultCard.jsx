import React from "react";
import { useNavigate } from "react-router-dom";
import HalfRating from "../Rating/Rating";
import PlaceIcon from '@mui/icons-material/Place';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import "./SearchResultCard.scss";

export const SearchResultHotelCard = ({ data }) => {

  const navigate = useNavigate()

  return(
    <div className="SearchResultHotelCard">
      <div>
        <img src={data.photo[0].path} />
        <span>5<StarIcon/></span>
      </div>

      <div>
        <h2>{data.name}</h2>
        
        <HalfRating value={data.rate}/>
        <p>{data.details}</p>        
        
      </div>
      <hr/>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center" ,justifyContent:"space-around"}}>
      <p style={{display:"flex",alignItems:"center",color:"gray" ,justifyContent:"space-around",textAlign:"center",flexDirection:"column"}}>
        <PlaceIcon />
        {data.location}
        <br/> 
        { data.city.name + "/" + data.city.country.name}</p>

      <p style={{textAlign:"center"}}>price Start from <span className="price"> {data.price_start_from}$</span></p>
      <button onClick={()=>navigate("/HotelInfo" , { state: {id : data.id }})}>View deal</button>

      </div>
    </div>
  )
}
export const SearchResultFlightCard = ({ setFlightTicketSelectedData, data }) => {

  const roundTrip = data.return;

  return(
    <div className="SearchResultFlightCard">
      <div>
        <img src={data.depart.img.path}/>
        {roundTrip&&<img src={data.return.img.path}/>}
      </div>
      <div>
        <p><span>{new Date(data.depart.date).toLocaleDateString()}</span><br/>
        <ArrowForwardIcon/></p>
        {roundTrip&&<>
          <p><span>{new Date(data.return.date).toLocaleDateString()}</span><br/>
          <ArrowForwardIcon/></p>
          </>
        }
        
      </div>
      <div>
        <div>{data.depart.hour}
          <br/>
          <p>{data.depart.flightCompany}</p>
        </div>
        {roundTrip&&
          <div>{data.return.hour}
            <br/>
            <p>{data.return.flightCompany}</p>
          </div>
        }
      </div>
      <div>
        <p>{data.depart.duration}</p>
        <br/>
        {roundTrip&&
          <p>{data.return.duration}</p>
        } 
      </div>
      <div>
        <button onClick={()=>{setFlightTicketSelectedData(data)}}>View</button>
      </div>
      <p><span className="price">{data.price}</span></p>
    </div>
    
  )
}
export const SearchResultTripCard = ({ data }) => {
  const navigate = useNavigate()
  return(
    <div className="SearchResultTripCard" onClick={()=>navigate("/TripInfo" , { state: {id : data.id }})}>
      <div>
        <img src={data.photo.path} />
      </div>
      <div>
        <h3>{data.description}</h3>
        <HalfRating  value={data.rate}/>
        <p>{data.details}</p>
        <p style={{display:"flex",alignItems:"center",gap:"7px"}}><ExploreIcon color="orange"/>{data.destination.name +'/'+ data.destination.country.name}</p>
        <p style={{color:"orangered",position:"absolute",top:"15px",right:"25px",fontWeight:"bold"}}>{data.days_number} Days</p>
        <p style={{display:"flex",alignItems:"center",gap:"7px"}}><PersonAddAlt1Icon />Ages from:{data.start_age}</p>
      </div>
    </div>
  )
}
export const SearchResultAttractionCard = ({ data }) => {
  const navigate = useNavigate()
  return(
    <div className="SearchResultTripCard" onClick={()=>navigate("/AttractionInfo" , { state: {id :data.id }})}>
      <div>
        <img src={data.photo.path} />
      </div>
      <div>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:"15px",flexWrap:"wrap"}}>
          <div>
            <h3>{data.name}</h3>
            <HalfRating  value={data.rate}/>
          </div>
          <p style={{display:"flex",alignItems:"center",color:"gray"}}><PlaceIcon />{data.city.name + `/` + data.location}</p>
        </div>
        <p>{data.details}</p>
        <p style={{color:"orangered"}}>open at:{data.open_at} &nbsp; close at:{data.close_at}</p>
        <p>price for adult: <span className="price">{data.adult_price}$</span></p>
      </div>
    </div>
  )
}