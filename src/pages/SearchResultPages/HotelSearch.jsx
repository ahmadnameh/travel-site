import {React,useState,useEffect,useContext} from 'react'
import { useLocation } from 'react-router-dom'
import { HotelSearchBar } from '../../components/ui/SearchForm/SearchBar'
import { SearchResultHotelCard } from '../../components/ui/SearchResultCard/SearchResultCard'
import HotelFiltersSearch from '../../components/ui/HotelFiltersSearch/HotelFiltersSearch'
import AlertWindowContext from '../../contexts/AlertWindowContext'
import { searchHotel } from '../../queries/hotel'

import "./searchResultPage.scss"

const HotelSearch = () => {

  const location = useLocation();

  const {alertWindowProperty,setAlertWindowProperty} = useContext(AlertWindowContext)

  const[loading , setLoading] = useState(true);
  const[ FormData , setFormData ] = useState(location.state)
  const [ filtersValue, setFiltersValue ] = useState({});
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
    const response = await searchHotel({...FormData,...filtersValue})
      if(response.error) {
        setAlertWindowProperty(prev=>({...prev,on: false}))
      }
      else {
        setLoading(false)
        setSearchResultData(response.data.All_hotels.data)
        setAlertWindowProperty(prev=>({...prev,on: false}))
      }
    }
  return (
    <div className='container HotelSearchPage'>
      <div className='HotelSearchForm'>
        <HotelSearchBar handleSearch={handleSearch} FormData={FormData} setFormData={setFormData}/>
      </div>
      <div>
      <div>
          <HotelFiltersSearch filtersValue={filtersValue} setFiltersValue={setFiltersValue}/>
        </div>
        <div>
        {SearchResultData&&SearchResultData[0]&&SearchResultData.map((item,index)=>(
          <SearchResultHotelCard key={index} data={item}/>
        ))
        }
        </div>
        
      </div>
    </div>
  )
}

export default HotelSearch
