import axios from "axios";

class apiCalls {

  async apiWithAuth() {
    
  }

  async apiWithOutAuth( type, url, requestBody ) {
    if( type==="post" ) {
      try {
        const response = await axios.post(import.meta.env.VITE_API_URL+url,requestBody)
        return response;
      }
      catch(e) {
        return{error:e}
      }
    }
    else {
      try{
        const response = await axios.get(import.meta.env.VITE_API_URL+url)
        return response;
      }
      catch(e) {
        return {error:e}
      }
    }
  }
}

export default apiCalls;