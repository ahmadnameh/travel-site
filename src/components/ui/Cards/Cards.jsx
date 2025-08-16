import React from 'react'
import { useNavigate } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';
import HalfRating from '../Rating/Rating';
import StarIcon from '@mui/icons-material/Star';
import Skeleton from '@mui/material/Skeleton';
import "./Cards.scss";



const HotelCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className='hotelCard'>
      <div>
        <img src={data.photo[0].path} />
        <p>{data.name}</p>
        <span>{data.stars}<StarIcon/></span>
      </div>
      
      <p><PlaceIcon />{data.city.country.name}/{data.city.name}</p>

      <div>
        <p>Rooms number : {data.num_of_rooms}</p>
        <div><HalfRating value={data.rate}/>reviews : {data.num_of_ratings}</div>
        <div>
          <p>Price from <span className='price'>{data.price_start_from}$</span> per night</p>
          <button onClick={()=>navigate('/HotelInfo' , {state: {id: data.id}})}>See Details</button>
        </div>
      </div>
      
    </div>
  )
}


const AttractionCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className='attractionCard'>
      <img src={props.data.photo.path} />

      <div>
        
        <div>
          <p>{props.data.name}</p>
          <p><PlaceIcon />{props.data.city.name}</p>
        </div>

        <div>
          <div>
            <span className='price'>{props.data.adult_price}$</span> for adult <br/>
            <span className='price'>{props.data.child_price}$</span> for child 
          </div>
          <button  onClick={()=>navigate("/AttractionInfo" , { state: {id : props.data.id }})}>see more</button>
        </div>
      
        <div>
          <HalfRating value={props.data.rate}/>{props.data.num_of_ratings}
        </div>

      </div>
    </div>
  )
}


const TripCard = (props) => {
  
  const navigate = useNavigate();

  return (
    <div className="tripCard" onClick={()=>navigate("/TripInfo" , { state: {id : props.data.id }})}>
      <img src={props.data.photo.path} alt="Location" />
      <div>
        <span><PlaceIcon />{props.data.destination.name}</span>
      </div>
      <div>
        <div>{props.data.description}</div>
        <div>{props.data.days_number} Days Available</div>
        <div>Ages start from : {props.data.start_age}</div>
        <div>⭐ {props.data.rate}</div>
      </div>
  </div>
  )
}

const LoadingCard = () => {
  return(
    <div className='loadinCard'>
    <Skeleton variant="rectangular" width="100%" height={200} />
    <Skeleton />
    <Skeleton width="60%" />
    </div>
  )
}

export { HotelCard , AttractionCard , TripCard , LoadingCard}
