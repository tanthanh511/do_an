import axios, { AxiosError } from "axios";

const instance = axios.create({
  //baseURL: "https://reqres.in/",
  baseURL: "https://localhost:5002/",
  
});

instance.interceptors.response.use(
  function (response) {
    return response.data ?? { statusCode: response.status };
  },
  function (error: AxiosError) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser
      // and an instance of http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    return error;
    //return Promise.reject(error);
  }
);

export default instance;
