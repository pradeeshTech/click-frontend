import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useApiStore = defineStore('api', () => {

  const getMethod = async (url) => {
    try {
      const response = await axios.get(url);
      console.log(response.data, "API response data");
      return response.data; // Return the actual data
    } catch (error) {
      console.error("Error in getMethod:", error);
      throw error; // Ensure errors propagate to the caller
    }
  };

       const postMethod = async (url, data, headers = {
        'Content-Type': 'application/json' 
      }) => {
        try {
          console.log(data, headers, 'response :: ');
          const response = await axios.post(url, data, { headers });
          return response.data; // Make sure to return the response data
        } catch (error) {
          console.error('API request error:', error);
          throw error; // Optionally, throw the error to handle it in the calling function
        }
      };


       const sendRequestWithQueryParams = (method, url, payload, data = {}) => {
              const queryParams = new URLSearchParams(payload).toString();
              const fullUrl = `${url}?${queryParams}`;
            
              console.log(method.toUpperCase(), fullUrl, 'Url');
            
              if (method.toLowerCase() === 'get') {
                return axios.get(fullUrl)
                  .then((res) => {
                    console.log(res.data); // Log the data for debugging purposes
                    return res.data;
                  })
                  .catch((err) => {
                    console.error(err);
                  });
              } else if (method.toLowerCase() === 'post') {
                return axios.post(fullUrl, data)
                  .then((res) => {
                    console.log(res.data); // Log the data for debugging purposes
                    return res.data;
                  })
                  .catch((err) => {
                    console.error(err);
                  });
              } else {
                throw new Error('Unsupported method. Use "get" or "post".');
              }
            };





       return {
              getMethod,
              postMethod,
              sendRequestWithQueryParams
       }

})