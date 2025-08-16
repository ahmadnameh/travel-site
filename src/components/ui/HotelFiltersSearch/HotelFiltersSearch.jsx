import { React, useState } from 'react'
import Checkboxes from './Checkboxes'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RadioButtons from './RadioBuutons';
import HalfRating from '../Rating/Rating';
import "./HotelFiltersSearch.scss"

const HotelFiltersSearch = ({ filtersValue , setFiltersValue }) => {

  const [mobileFiltersStye,setMobileFilterStyle] = useState(false)
  const [selectedHotelFacility,setSelectedHotelFacility] = useState([]);
  
  const hotelStarsLabel = [
    {label:<HalfRating value={5}/>,value:5},
    {label:<HalfRating value={4}/>,value:4},
    {label:<HalfRating value={3}/>,value:3},
    {label:<HalfRating value={2}/>,value:2},
    {label:<HalfRating value={1}/>,value:1},
  ]

  const hotelFacilityLabel = [
    {label:'Wifi'},
    {label:'Resturant'},
    {label:'Parking'},
    {label:'Rent cars'},
    {label:'Swimming pool'},
    {label:'Gym'},
  ]

  const hotelTypesLabel = [
    {label: 'All-Suites' ,value: 'All-suites'},
    {label: 'Motel' ,value: 'Motel'},
    {label: 'Inns' ,value: 'Inns'},
    {label: 'Resorts' ,value: 'Resorts'},
    {label: 'Chain' ,value: 'Chain'},
    
  ]

  const hotelRateLabel = [
    {label:'Excelent'  ,value: 5},
    {label:'Good' ,value: 3},
    {label:'Not Bad' ,value: 1},
  ]

  function handleFacilitySelect () {
    setFiltersValue((prev)=>({...prev,...selectedHotelFacility}))
  }
  

  function handleChange (e) {
    setFiltersValue((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  return (
    <div className="hotelSearchFilters">
      <div className={mobileFiltersStye ? 'Arr Open' :"Arr"}>
        <ArrowForwardIcon onClick={()=>setMobileFilterStyle(!mobileFiltersStye)} />
      </div>
      <div className={mobileFiltersStye ? 'mob hotelFilterSearch' : 'hotelFilterSearch'}>
        
        <h3>Filter by</h3>
        <hr/>

        <RadioButtons title="Hotel Star" arrayOfLabels={hotelStarsLabel} label="stars" onChange={(e)=>handleChange(e)}/>
        <hr/>

        <Checkboxes title="Facilities" arrayOfLabels={hotelFacilityLabel} onChange={handleFacilitySelect} setSelectedHotelFacility={setSelectedHotelFacility}/>
        <hr/>

        <RadioButtons title="Hotel type" arrayOfLabels={hotelTypesLabel} label="hotel_type" onChange={(e)=>handleChange(e)}/>
        <hr/>

        <RadioButtons title="Hotel Rate" arrayOfLabels={hotelRateLabel} label="rate" onChange={(e)=>handleChange(e)}/>
        <hr/>
      
      </div>
    </div>
  )
}

export default HotelFiltersSearch
