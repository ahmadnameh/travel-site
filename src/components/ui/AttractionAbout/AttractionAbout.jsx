import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import "./arractionAbout.scss"

const AttractionAbout = ({ data }) => {
  return (
    <div className='attractionAbout'>
      <div>
        <h2>{data.name}</h2>
        <p><PlaceIcon/>#{data.city.name} / {data.location}</p>
        <hr/>
        <p>{data.details}</p>
        <hr/>
        <p>{data.type.type} :</p>
        <p>{data.type.details}</p>
      </div>
    </div>
  )
}

export default AttractionAbout
