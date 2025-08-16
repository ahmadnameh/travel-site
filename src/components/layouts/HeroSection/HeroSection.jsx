import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HotelSearchBar , FlightSearchBar , AttractionSearchBar , TripSearchBar } from '../../ui/SearchForm/SearchBar';
import "./heroSection.scss"

const HeroSection = (props) => {

  const navigate = useNavigate();

  const demoVersion = import.meta.env.VITE_VERSION=="demo" ;

  const[hotelFormData,setHotelFormData] = useState(
    demoVersion ? {
      word: 'paris',
      check_in: "12/07/2021",
      check_out: "12/12/2021"
    }:{}
  )

    const[flightFormData,setFlightFormData] = useState(
      demoVersion ? {
        from:"Germany",
        destination:"France",
        departe_day: "08/20/2021",
        return_day: "08/27/2021"
      } :{}
    )

    const[tripFormData,setTripFormData] = useState(
      demoVersion ? {
        to:"istanbul",
        min_price:500,
        max_price:1800
      }:{}
    )
    const[attractionFormData,setAttractionFormData] = useState(
      demoVersion ? {
        word:"france",
        price: 300
      }:{}
    )

    const [formData,setFormData] = useState({})

  return (
    <section className={props.name+"HeroSection"}>

      {props.name == "home" &&
        <div>
          <p>Get your backpack</p>
          <p>We are leaving</p>
        </div>
      }

      {props.name == "hotel" &&
        <div className='container'>
          <div>
            <h3>Book your rest place with some steps</h3>
            <div className='hotelSearchForm'>
            <HotelSearchBar FormData={hotelFormData} setFormData={setHotelFormData} handleSearch={()=>navigate('/HotelSearch',{state: hotelFormData})}/>
            </div>
          </div>
          <div>
            <img src="/assets/home-tab3-hero-1367x520-prog.jpg" />
            <img src="/assets/pexels-pierre-blaché-3554594.jpg" />
          </div>
        </div>
      }

      {props.name == "flight" &&
        <div className='container'>
          <p>From remote trails to bustling cities <br/> We brings the world closer to you</p>
          <div className='flightSearchForm'>
          <FlightSearchBar FormData={flightFormData} setFormData={setFlightFormData} handleSearch={()=>navigate('/FlightSearch' , {state: flightFormData})}/>
          </div>
        </div>
      }

      {props.name == "trip" && 
      <>
        <video autoPlay loop muted>
          <source src="/assets/motor-boat-23011-١.mp4" type='video/mp4' />
          Your browser does not support videos
        </video>
        <p>Wherever the road takes you, Name makes sure  <span>it’s a journey</span> to remember</p>
        <div className='tripSearchForm'>
          <TripSearchBar FormData={tripFormData} setFormData={setTripFormData} handleSearch={()=>navigate('/TripSearch', {state: tripFormData})}/>
        </div>
      </>
      }

      {props.name == "attraction" &&
        <div className='container'>
          <div>
            <p>
              Find Next Place <br/>
              To <span>Visit</span>
            </p>
            <p>Adventure awaits follow our’s footsteps to the most breathtaking destinations</p>
          </div>
          <img src='/assets/caption.jpg' />
          <div className='attractionSearchForm'>
            <AttractionSearchBar FormData={attractionFormData} setFormData={setAttractionFormData} handleSearch={()=>navigate('/AttractionSearch', {state: attractionFormData})}/>
          </div>
        </div>
      }

    </section>
  )
}

export default HeroSection
