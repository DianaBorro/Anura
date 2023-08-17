import axios from 'axios';
import { Exercise } from './types';
// import 'dotenv/config';
// const dotenv = require('dotenv');

// const env = dotenv.config().parsed;

export const fetchMuscleFromAPI = (muscle:string): Promise<Exercise[]> => {
    console.log('inside fetchMuscleFromAPI');
    
    const url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`;
    const apiKey = 'C35W96ul6y2DuIFbRCwYfw==PuTpHbFlILdNhoCY';
    // const muscleQueryParam = `muscle=${muscle}`;



// try{
// const response = await axios.get<Exercise[]>(url, {
// //   params: {
// //     muscle: muscleQueryParam
// //   },
//   headers: {
//     'X-Api-Key': apiKey,
//     'Content-Type': 'application/json'
//   }
// })
// return response.data;
// } catch {
//     console.error('Error in api.ts');
//     return []; // Return an empty array of Exercise interface in case of error
//   }
// }
return axios
.get<Exercise[]>(url, {
  headers: {
    'X-Api-Key': apiKey,
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    // console.log('This is response.data:', response.data);
    return response.data;
  })
  .catch(error => {
    console.error('Error: ', error.response.data);
    return [] as Exercise[];
  });
}

// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });