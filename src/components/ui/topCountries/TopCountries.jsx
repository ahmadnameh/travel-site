import React from 'react'
import "./topCountries.scss";
import Skeleton from '@mui/material/Skeleton';

const TopCountries = (props) => {

  return (
    <div className='topCountries container'>
      <h3>Popular destination :</h3>
      <p>The most popular choice for travelers in recent times</p>
      <div>
        {(props.data[0] ? props.data : Array.from(new Array(2))).map((item,index) => (
          item ?
            <div key={index}>
              <img src={item.path}/>
              <p>{item.name}</p>
            </div>
          : 
            <div key={index}>
              <Skeleton variant="rectangular" width="100%" height="100%" />
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default TopCountries
