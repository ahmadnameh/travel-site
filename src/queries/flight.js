import apiCalls from '../apiCalls/apiCalls';

const apiRequest = new apiCalls();

const demoVersion = import.meta.env.VITE_VERSION=="demo" ;

export async function fetchFlightPageData() {
  try {
    if(demoVersion) {
      const res = await fetch("/Json-demo-data/flight.json");
      const data = await res.json();
      return data; 

    }
    const response = await apiRequest.apiWithOutAuth("get",'/popularCountries');
    return response;
  } catch (error) {
    return { error };
  }
}

export async function SearchFlight({ searchBody }) {
  try {
    if(demoVersion) {
      const res = await fetch("/Json-demo-data/flightTicket.json");
      const data = await res.json();
      return data; 

    }
    const response = await apiRequest.apiWithOutAuth("post","/searchFlights",searchBody);
    return response;
  }
  catch (error) {
    return {error}
  }
}

export async function getCountryes () {
  try {
    if(demoVersion) {
      const res = await fetch("/Json-demo-data/countries.json");
      const data = await res.json();
      return data; 

    }
    const response = await apiRequest.apiWithOutAuth("get","/getCountries",);
    return response;
  }
  catch (error) {
    return {error}
  }
}