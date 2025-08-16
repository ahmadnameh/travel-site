import { React, useState, useEffect, useRef } from 'react'
import "./NumOfPeopleBooking.scss";
import PeopleIcon from '@mui/icons-material/People';

const NumOfPeopleBooking = ({ type , onChange }) => {

  const[num,setNums] = useState({
    num_of_adult : 1,
    num_of_children : 0,
    num_of_rooms : 1
  })

  const [viewedClass,setViewedClass] = useState(false);
  const modalRef = useRef(null); 
  
  function handleChange(e,action) {

    if(action=='add') {
      let y = ++num[e.target.className]
      setNums((prev)=>({...prev,[e.target.className]:y}))
    }
    else {
      if(num[e.target.className]===0) {
        return;
      }
      if(e.target.className == "num_of_adult" && num.num_of_adult == 1) {
        return
      }
      setNums((prev)=>{
        return {...prev,[e.target.className]:prev[e.target.className]-1}
      })
    }
    onChange({...num})
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setViewedClass(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  

  return (
    <div className="Num-of-people-booking" ref={modalRef} >
      <p onClick={()=>setViewedClass(!viewedClass)}>
        {num.num_of_adult} Adult - 
        {num.num_of_children} Child
        <PeopleIcon/></p>
      <div className={viewedClass ? 'viewed' : ''}>
      {type == 'hotel' &&
        <div>
          <p>Room</p>
          <div>
            <span className="num_of_rooms" v="minus" onClick={(e)=>handleChange(e,"minus")}> - </span>
            <p>{num.num_of_rooms}</p>
            <span className="num_of_rooms" v="add" onClick={(e)=>handleChange(e,"add")}> + </span>
          </div>
        </div>
        } 
        <div>
          <p>Adult</p>
          <div>
            <span className="num_of_adult" value="minus" onClick={(e)=>handleChange(e,"minus")}> - </span>
            <p>{num.num_of_adult}</p>
            <span className="num_of_adult" value="add" onClick={(e)=>handleChange(e,"add")}> + </span>
          </div>
        </div> 
        
        <div>
          <p>Child</p>
          <div>
            <span className="num_of_children" value="minus" onClick={(e)=>handleChange(e,"minus")}> - </span>
            <p>{num.num_of_children}</p>
            <span className="num_of_children" value="add" onClick={(e)=>handleChange(e,"add")}> + </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NumOfPeopleBooking
