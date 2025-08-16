import {React,useState,useEffect,useContext} from 'react'
import { useLocation } from 'react-router-dom'
import { SearchResultTripCard } from '../../components/ui/SearchResultCard/SearchResultCard'
import { TripSearchBar } from '../../components/ui/SearchForm/SearchBar'
import AlertWindowContext from '../../contexts/AlertWindowContext'
import { searchTrip } from '../../queries/trip'
import "./searchResultPage.scss"

const TripSearch = () => {

  const {alertWindowProperty,setAlertWindowProperty} = useContext(AlertWindowContext)

  const location = useLocation()
  
    const[loading , setLoading] = useState(true);
    const[ FormData , setFormData ] = useState(location.state) 
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
    const response = await searchTrip(FormData)
      if(response.error) {
        console.log(response)
        setAlertWindowProperty(prev=>({...prev,on: false}))
      }
      else {
        setLoading(false)
        setSearchResultData(response.data.data.data)
        setAlertWindowProperty(prev=>({...prev,on: false}))
      }
    }
  return (
    <div className='container searchResultPage TripSearchPage'>
      <TripSearchBar handleSearch={handleSearch} FormData={FormData} setFormData={setFormData}/>
      <div className='sea'>
        <div>
        {SearchResultData&&SearchResultData[0]&& SearchResultData.map((item,index)=>(
          <SearchResultTripCard data={item} key={index}/>
        ))}
        </div>
        <div>
          <img src="/src/assets/tripSearch.png" alt="pic" />
        </div>
      </div>
    </div>
  )
}

export default TripSearch
