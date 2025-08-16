import { React, useState } from 'react'
import { useNavigate, useLocation, Form } from 'react-router-dom';
import DiscreteSlider from '../DiscreteSlider/DiscreteSlider';
import DatePickerValue from '../Date&Time Pickers/DatePickers';
import SearchIcon from '@mui/icons-material/Search';
import NumOfPeopleBooking from './NumOfPeopleBooking/NumOfPeopleBooking';
import CountrySelect from '../countrySelect/CountrySelect';
import "./SearchBar.scss"

import SimpleSnackbar from '../snackBar/Snackbar';


const demoVersion = import.meta.env.VITE_VERSION=="demo" ;

function handleChange(e, FormData, setFormData) {
  setFormData({ ...FormData, [e.target.name]: e.target.value })
}

const HotelSearchBar = ({ handleSearch, FormData, setFormData }) => {
  
  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const[openSnakBar , setOpenSnackBar] = useState(false);

  function handleChangeMiddleWare( e, FormData, setFormData ) {
    handleChange(e, FormData, setFormData)
    if(demoVersion) {
      setOpenSnackBar(true)
    }
  }

  return (
    <>
    <form className='hotelSearchBar' onSubmit={onSubmit}>
      <div>
        <input
          type='text'
          placeholder='hotel name or destination'
          name='word'
          required
          value={FormData?.word}
          onChange={(e) => { handleChangeMiddleWare(e, FormData, setFormData) }}
        />
      </div>
      <DatePickerValue textLabel='Day start' name='check_in' value={FormData?.check_in}
        onChange={(e) => { handleChangeMiddleWare(e, FormData, setFormData) }} />
      <DatePickerValue textLabel='Day End' name='check_out' value={FormData?.check_out}
        onChange={(e) => { handleChangeMiddleWare(e, FormData, setFormData) }} />
      <NumOfPeopleBooking type='hotel' onChange={(e)=>setFormData({...FormData,...e})} />
      <button type="submit">Find Hotel</button>
    </form>

    {openSnakBar&&<SimpleSnackbar open={openSnakBar} setOpen={setOpenSnackBar}/>}
    </>
  )
}

const FlightSearchBar = ({ handleSearch, FormData, setFormData }) => {
  const [typeOfFlightTicket, setTypeOfFlightTicket] = useState('RoundTrip')

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const[openSnakBar , setOpenSnackBar] = useState(false);

  function handleChangeMiddleWare( e, FormData, setFormData ) {
    handleChange(e, FormData, setFormData)
    if(demoVersion) {
      setOpenSnackBar(true)
    }
  }

  return (
    <>
    <form className='flightSearchBar' onSubmit={onSubmit}>
      <div>
        <button
          type="button"
          className={typeOfFlightTicket === 'OneWay' ? "typeTicketSelected" : ''}
          onClick={() => { setTypeOfFlightTicket('OneWay') }}
        >One-Way</button>
        <button
          type="button"
          className={typeOfFlightTicket === 'RoundTrip' ? "typeTicketSelected" : ''}
          onClick={() => { setTypeOfFlightTicket('RoundTrip') }}
        >Round-Trip</button>
      </div>
      <div>
        <CountrySelect textLabel='From' name='from' value={FormData?.from}
          onChange={(e) => { handleChangeMiddleWare(e, FormData, setFormData) }} />
        <CountrySelect textLabel='TO' name='destination' value={FormData?.destination}
          onChange={(e) => { handleChangeMiddleWare(e, FormData, setFormData) }} />
        <DatePickerValue textLabel='return day' name='departe_day' value={FormData?.departe_day}
          onChange={(e) => { handleChangeMiddleWare(e, FormData, setFormData) }} />
        {typeOfFlightTicket === "RoundTrip" &&
          <DatePickerValue textLabel='Day Return' name='return_day' value={FormData?.return_day}
            onChange={(e) => { handleChangeMiddleWare(e, FormData, setFormData) }} />
        }
        <NumOfPeopleBooking type='flight' onChange={(e) => setFormData({ ...FormData, ...e })} />
        <button type="submit"><SearchIcon /></button>
      </div>
    </form>

    {openSnakBar&&<SimpleSnackbar open={openSnakBar} setOpen={setOpenSnackBar}/>}
    </>
  )
}

const AttractionSearchBar = ({ handleSearch, FormData, setFormData }) => {

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };
  const[openSnakBar , setOpenSnackBar] = useState(false);

  function handleChangeMiddleWare( e, FormData, setFormData ) {
    handleChange(e, FormData, setFormData)
    if(demoVersion) {
      setOpenSnackBar(true)
    }
  }

  return (
    <>
    <form className='attractionSearchBar' onSubmit={onSubmit}>
      <div>
        <label>Key words</label><br />
        <input
          type='text'
          placeholder='Search destination , attraction or activity'
          name='word'
          required
          onChange={(e) => { handleChangeMiddleWare(e, FormData, setFormData) }}
          value={FormData?.word}
        />
      </div>
      <DiscreteSlider textLabel="max price" name="price" value={FormData?.price}
        onChange={(e) => { handleChangeMiddleWare(e, FormData, setFormData) }} />
      <button type="submit">Search Now</button>
    </form>

    {openSnakBar&&<SimpleSnackbar open={openSnakBar} setOpen={setOpenSnackBar}/>}
    </>
  )
}

const TripSearchBar = ({ handleSearch, FormData, setFormData }) => {

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const[openSnakBar , setOpenSnackBar] = useState(false);

  function handleChangeMiddleWare( e, FormData, setFormData ) {
    handleChange(e, FormData, setFormData)
    if(demoVersion) {
      setOpenSnackBar(true)
    }
  }

  return (
    <>
    <form className='tripSearchBar' onSubmit={onSubmit}>
      <div>
        <input
          type='text'
          placeholder='Search destination , attraction or activity'
          name='to'
          required
          onChange={(e) => { handleChangeMiddleWare(e, FormData, setFormData) }}
          value={FormData?.to}
        />
      </div>
      <DiscreteSlider textLabel="min price" name="min_price" value={FormData?.min_price}
        onChange={(e) => { handleChangeMiddleWare(e, FormData, setFormData) }} />
      <DiscreteSlider textLabel="max price" name="max_price" value={FormData?.max_price}
        onChange={(e) => { handleChangeMiddleWare(e, FormData, setFormData) }} />
      <button type="submit">Search</button>
    </form>
    {openSnakBar&&<SimpleSnackbar open={openSnakBar} setOpen={setOpenSnackBar}/>}
    </>
  )
}

export { HotelSearchBar, FlightSearchBar, AttractionSearchBar, TripSearchBar }
