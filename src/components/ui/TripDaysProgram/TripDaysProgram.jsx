import { React , useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CategoryIcon from '@mui/icons-material/Category';
import DateRangeIcon from '@mui/icons-material/DateRange';
import "./TripDaysProgram.scss"

const TripDaysProgram = ({ data }) => {

  const[ar,setAr] = useState(new Array(data.length).fill(false));

  function sdd(index) {
    setAr((prev)=>{
      let at =[...prev];
      
      at[index]=!at[index];

      return at
    })
  }


  return (
    <div  className='TripDaysProgram'>
      <h4><DateRangeIcon />Trip agenda :</h4>
      <div>
      {data.map((item,key)=>(
        <div className={ar[key] ? "openedItem" :''} onClick={()=>sdd(key)}>
          <div>
            <p style={{display:"flex",alignItems:"center",gap:"12px",fontSize:"17px"}}><CategoryIcon/>
            <span style={{fontWeight:"bold"}}>Day {item.day_number} </span>  {item.title}</p>
            <ExpandMoreIcon />

          </div>
        {ar[key]&&<p style={{margin:"20px"}}>{item.details}</p>}

      </div>
      ))}
      </div>
    </div>
  )
}

export default TripDaysProgram
