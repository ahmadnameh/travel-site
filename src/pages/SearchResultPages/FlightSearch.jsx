import { React, useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { SearchResultFlightCard } from '../../components/ui/SearchResultCard/SearchResultCard'
import { FlightSearchBar } from '../../components/ui/SearchForm/SearchBar'
import FlightTicketMoreDetials from '../../components/ui/FlightTicketMoreDetials/FlightTicketMoreDetials'
import AlertWindowContext from '../../contexts/AlertWindowContext'
import { SearchFlight } from '../../queries/flight'

const FlightSearch = () => {

  const location = useLocation()

  const {alertWindowProperty,setAlertWindowProperty} = useContext(AlertWindowContext)

  const[loading , setLoading] = useState(true);
  const[ FormData , setFormData ] = useState(location.state)

  const[fltghtTicketSelectedData,setFlightTicketSelectedData] = useState();

  const[ SearchResultData , setSearchResultData ] = useState({})

  useEffect(()=>{
    function firstSearch() {
      handleSearch()
    }
    firstSearch()
  },[])
  

  async function handleSearch() {
    setLoading(true)
    setAlertWindowProperty(prev=>({...prev,on: true,type:'loading'}))
    const response = await SearchFlight(FormData);
    
      if(response.error) {
        setAlertWindowProperty(prev=>({...prev,on: true,message:response.error.message,type:'error'}))
      }
      else {
        setLoading(false)
        setSearchResultData(response.data)
        setAlertWindowProperty(prev=>({...prev,on: false}))
      }
    }
  
  return (
    <div className='container flightSearchPage'>
      <div className='flightSearchForm'>
        <FlightSearchBar handleSearch={handleSearch} FormData={FormData} setFormData={setFormData}/>
      </div>
      {SearchResultData[0]&&SearchResultData.map((item,index)=>(
        <SearchResultFlightCard setFlightTicketSelectedData={setFlightTicketSelectedData} data={item} key={index}/>
      ))}
      {fltghtTicketSelectedData&&<FlightTicketMoreDetials data={fltghtTicketSelectedData} setFlightTicketSelectedData={setFlightTicketSelectedData} />}
    </div>
  )
}

export default FlightSearch
