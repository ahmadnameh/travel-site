import apiCalls from '../apiCalls/apiCalls';

const apiRequest = new apiCalls();

const demoVersion = import.meta.env.VITE_VERSION=="demo" ;

export async function fetchHotelPageData() {
  try {
    if(demoVersion) {
      const res = await fetch("/Json-demo-data/hotel.json");
      const data = await res.json();
      return data; 


    }
    const response = await apiRequest.apiWithOutAuth("get",'/TopRatedAndTypes')
    return response;
  } catch (error) {
    return { error };
  }
}

export async function searchHotel(searchBody) {
  try {
    if(demoVersion) {
      const res = await fetch("/Json-demo-data/hotelSearch.json");
      const data = await res.json();
      return data; 
    }
    const response = await apiRequest.apiWithOutAuth("post",'/hotel/Hotelsearch',searchBody);
    return response;
  }
  catch (error) {
    return {error}
  }
}

export async function getHotel(id) {
  try {
    if(demoVersion) {
      const res = await fetch("/Json-demo-data/hotelsInfo.json");
      const data = await res.json();
      return data; 
    }
    const response = await apiRequest.apiWithOutAuth("post",'/AllHotelInfo',{id: id});
    return response;
  }
  catch (error) {
    return {error}
  }
}

export async function getRoom(searchBody) {
  try {
    if(demoVersion) {
      const res = await fetch("/Json-demo-data/roomInfo.json");
      const data = await res.json();
      return data; 
    }
    const response = apiRequest.apiWithOutAuth("post","/ShowOneRoom",searchBody);
    return response
  }
  catch(error) {
    return {error}
  }
}
