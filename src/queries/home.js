import apiCalls from '../apiCalls/apiCalls';

const apiRequest = new apiCalls();

const demoVersion = import.meta.env.VITE_VERSION=="demo" ;

export async function fetchHomePageData() {
  try {
    if(demoVersion) {
      const res = await fetch("/Json-demo-data/home.json");
      const data = await res.json();
      return data; 

    }
    const response = await apiRequest.apiWithOutAuth("get", '/user/index');
    return response;
  } catch (error) {
    return { error };
  }
}