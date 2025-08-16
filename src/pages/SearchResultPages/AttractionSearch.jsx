import { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { SearchResultAttractionCard } from '../../components/ui/SearchResultCard/SearchResultCard'
import { AttractionSearchBar } from '../../components/ui/SearchForm/SearchBar'
import AlertWindowContext from '../../contexts/AlertWindowContext'
import { searchAttraction } from '../../queries/attraction'
import "./searchResultPage.scss"


const AttractionSearch = () => {

  const location = useLocation()

  const {alertWindowProperty,setAlertWindowProperty} = useContext(AlertWindowContext)

  const[loading , setLoading] = useState(true);
    const[ FormData , setFormData ] = useState(location?.state) 
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
    const response = await searchAttraction(FormData)
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
    <div className='container searchResultPage AttractionSearchPage'>
    <AttractionSearchBar handleSearch={handleSearch} FormData={FormData} setFormData={setFormData}/>
    <div className='sea'>
      <div>
        {SearchResultData&&SearchResultData[0]&& SearchResultData.map((item,index)=>(
          <SearchResultAttractionCard data={item} key={index}/>
        ))
        }
      </div>
      <div>
        <img src="/src//assets/10476.png" alt="pic" />
      </div>
    </div>
    </div>
  )
}

export default AttractionSearch
