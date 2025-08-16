import { React, useState, useEffect } from 'react'
import MultipleSelect from '../MultipleSelect/MultipleSelect'
import { getCountryes } from "../../../queries/flight";

const CountrySelect = ({ textLabel, name, value, onChange }) => {

  const[ data , setData ] = useState({})
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState('');

  useEffect(()=>{
    async function fetchData() {
      setLoading(true)
      const response = await getCountryes();
      if(response.error) {
        console.log(response)
        setAlertWindowProperty(prev=>({...prev,on: true,message:response.error.message,type:'error'}))
      }
      else {
        setLoading(false)
        setData(response.data.countries)
      }
    }
    fetchData()
  },[])
  return (
    <MultipleSelect textLabel={textLabel} name={name} 
      initValue={value} onChange={onChange} data={data}/>
  )
}

export default CountrySelect
