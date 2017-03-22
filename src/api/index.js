import axios from 'axios'

const BASE_URL =  'https://holidayapi.com'
const KEY =  '4d3e471a-7456-4c99-8670-eb9460fb3d3d'


const instance = axios.create({
    baseURL: BASE_URL,
    params: {
        key: KEY,
        country: 'US',
        year: '2008'
    }
})

const getHolidays = () => {
  return instance.get('v1/holidays');
}

export default {
  getHolidays,
}