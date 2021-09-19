const axios = require("axios").default;
const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
export const fetchRestuarants= async({ne,sw},type)=>{
    try{
        const res =  await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
            method: 'GET',
            url: `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': process.env.REACT_APP_RAPID_API
            }
        });
        return res.data.data;
    }
    catch(err)
    {
        console.log(err)
    }
}
export const fetchWeatherData = async({lat,lng})=>{
  try{
    if(lat && lng ){
      const {data} =  await axios.get(`https://community-open-weather-map.p.rapidapi.com/find`,{
          method: 'GET',
          url: `https://community-open-weather-map.p.rapidapi.com/find`,
          params: {
            lon: lng,
            lat: lat,
          },
          headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API
          }
      });
      return data;
    }
  }
  catch(err)
  {
      console.log(err)
  }
}