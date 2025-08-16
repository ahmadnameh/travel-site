import apiCalls from '../apiCalls/apiCalls';

const apiRequest = new apiCalls();

const demoVersion = import.meta.env.VITE_VERSION=="demo" ;

export async function fetchAttractionPageData() {
  try {
    if(demoVersion) {
      const res = await fetch("/Json-demo-data/attraction.json");
      const data = await res.json();
      return data; 

    }
    const response = await apiRequest.apiWithOutAuth("get",'/attraction/index')
    return response;
  } catch (error) {
    return { error };
  }
}

export async function searchAttraction(searchBody) {
  try {
    if(demoVersion) {
      const res = await fetch("/Json-demo-data/attractionSearch.json");
      const data = await res.json();
      return data; 

    }
    const response = await apiRequest.apiWithOutAuth("post",'/attraction/search',searchBody)
    return response;
  }
  catch (error) {
    return {error}
  }
}
export async function getAttraction(id) {
  try {
    if(demoVersion) {
      const res = await fetch("/Json-demo-data/attractionInfo.json");
      const data = await res.json();
      return data; 

    }
    const response = await apiRequest.apiWithOutAuth("post",'/attraction/viewAttractionDetails',{attraction_id: id})
    return response;
  }
  catch (error) {
    return {error}
  }
}