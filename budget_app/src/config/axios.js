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
        if (getState().user.token) {
          request.headers['Authorization'] = getState().user.token
        }
        return request;
      }
    ],
    response: [{
      success: function ({getState, dispatch, getSourceAction}, response) {
        return Promise.resolve(response.data);
      },
      error: function ({getState, dispatch, getSourceAction}, error) {
        if (error.response.status!==422)
          dispatch({type: "BACKEND_SERVER_ERROR"});
        return Promise.reject(error);
      }
    }]
  }
}
