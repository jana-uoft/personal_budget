import axios from "axios";


let API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://budget-api.jana19.org';

export const client = axios.create({ 
  baseURL: API_URL,
  responseType: 'json'
});

export const clientOptions = {
  interceptors: {
    request: [
      ({getState, dispatch, getSourceAction}, request) => {
        if (getState().user.token) request.headers['Authorization'] = getState().user.token;
        return request;
      }
    ],
    response: [{
      success: function ({getState, dispatch, getSourceAction}, response) {
        if (response.config.successMessage) dispatch({ type: "SHOW_NOTIFICATION", payload: {message: response.config.successMessage, type: "success"} }); 
        return Promise.resolve(response.data);
      },
      error: function ({getState, dispatch, getSourceAction}, error) {
        if (error.response && error.response.status!==422) dispatch({type: "BACKEND_SERVER_ERROR"});
        if (error.status===0) dispatch({type: "BACKEND_SERVER_ERROR"});
        if (error.config.errorMessage) dispatch({ type: "SHOW_NOTIFICATION", payload: {message: error.config.errorMessage, type: "failure"} }); 
        return Promise.reject(error);
      }
    }]
  }
}
