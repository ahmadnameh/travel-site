import apiCalls from '../apiCalls/apiCalls';

const apiRequest = new apiCalls();

const demoVersion = import.meta.env.VITE_VERSION=="demo" ;

export async function fetchTripPageData() {
  try {
    if(demoVersion) {
      const res = await fetch("/Json-demo-data/trip.json");
      const data = await res.json();
      return data; 
    }
    const response = await apiRequest.apiWithOutAuth("get",'/trip/index')
    return response;
  } catch (error) {
    return { error };
  }
}

export async function searchTrip(searchBody) {
  try {
    if(demoVersion) {
      const res = await fetch("/Json-demo-data/tripSearch.json");
      const data = await res.json();
      return data; 
    }
    const response = await apiRequest.apiWithOutAuth("post",'/trip/search',searchBody);
    return response;
  }
  catch (error) {
    return {error}
  }
}
export async function getTrip(id) {
  try {
    if(demoVersion) {
      const res = await fetch("/Json-demo-data/tripsInfo.json");
      const data = await res.json();
      return data; 
    }
    const response = await apiRequest.apiWithOutAuth("get",`/trip/viewTripDetails?id=${id}`)
    return response;
  }
  catch (error) {
    return {error}
  }
}