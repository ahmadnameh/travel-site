import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import "./TripAbout.scss"


const TripAbout = ({ data }) => {
  return (
    <div className='tripAbout'>
      <h3>{data.description}</h3>
      <p>{data.days_number} days</p>
      <p>{data.details}</p>
      <div  className='TripFeatures'>
      {data.activities.map((item,index)=>(
        <span key={index}>{item.activity}</span>
      ))}
      {data.services.map((item,index)=>(
        <span key={index}>{item.service}</span>
      ))}
      </div>
      <p><GroupsIcon />  Max Person in a group : {data.max_persons}</p>
      <p>Ages from : {data.start_age}</p>
    </div>
  )
}

export default TripAbout
