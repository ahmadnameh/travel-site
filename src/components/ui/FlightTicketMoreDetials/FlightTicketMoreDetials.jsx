import { React, useEffect, useRef } from 'react'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import "./FlightTicketMoreDetials.scss";



const FlightTicketMoreDetials = ({ setFlightTicketSelectedData, data }) => {
  
  const modalRef = useRef(null)

  useEffect(() => {
    
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setFlightTicketSelectedData();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  console.log(data)

  return (
    <div className='flightTicetMoreDetails'>
      <div ref={modalRef}>
        <CancelPresentationIcon onClick={()=>setFlightTicketSelectedData()}/>
        <p>
          {data.depart.from} to {data.depart.to}
        </p>
        <p>View your flights details</p>

        <div>
          <p>
            <span>Depart </span>
            {new Date(data.depart.date).toLocaleDateString()}
          </p>
          <hr/>
          <p>{data.depart.flightCompany}</p>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}}>
            <img src={data.depart.img.path} alt="pic" />
            <p>
              {data.depart.hour}
            </p>
            <p>Duration: {data.depart.duration}</p>
          </div>
        </div>
        {data.return &&
        <div>
          <p>
            <span>Return </span>
            {new Date(data.return.date).toLocaleDateString()}
          </p>
          <hr/>
          <p>{data.return.flightCompany}</p>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px"}}>
            <img src={data.return.img.path} />
            <p>
              {data.return.hour}
            </p>
            <p>Duration: {data.return.duration}</p>
          </div>
        </div>}
        <button>Book Ticket</button>
      </div>
    </div>
  )
}


export default FlightTicketMoreDetials
