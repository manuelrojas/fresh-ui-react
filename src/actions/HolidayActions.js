import hapi from '../api'
import moment from 'moment'

export const GET_HOLIDAYS = 'holidays/get';
export const GET_HOLIDAYS_SUCCESS = 'holidays/success';
export const GET_HOLIDAYS_FAIL = 'holidays/fail';
export const SET_PARAMS = 'params/set';

export const setParams = (params) => {
    return {
    type: SET_PARAMS,
    country: params.country,
    number: params.number,
  }
}

const getHolidays = () => {
  return {
    type: GET_HOLIDAYS,
  }
}

const getHolidaysSuccess = (holidays) => {
  return {
    type: GET_HOLIDAYS_SUCCESS,
    holidays
  }
}

const getHolidaysFail = (error) => {
  return {
    type: GET_HOLIDAYS_FAIL,
    error
  }
}

export const callHapi = (country) => {
  return (dispatch, getState) => {
    
    dispatch(getHolidays())

    hapi.getHolidays(country).then(response => {
          let holidays = [];
          Object.keys(response.data.holidays).map((_date, i)=> {
              holidays.push(moment(_date).toDate());
          });
          dispatch(getHolidaysSuccess(holidays));
          
      });
  }

}


