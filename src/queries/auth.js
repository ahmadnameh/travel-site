import apiCalls from "../apiCalls/apiCalls";

const apiRequest = new apiCalls();

export async function login ( formData ) {
  try {
    const response = await apiRequest.apiWithOutAuth("post","/user/login",formData);
    if(response.data.success) {
      return response;
    }
  } catch (error) {
    return { error };
  }
}
export async function register ( formData ) {
  try {
    const response = await apiRequest.apiWithOutAuth("post","/user/register",formData);
    if(response.data.success) {
      return response;
    }
  } catch (error) {
    return { error };
  }
}
