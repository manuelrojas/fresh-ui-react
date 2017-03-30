import {
  GET_HOLIDAYS,
  GET_HOLIDAYS_SUCCESS,
  GET_HOLIDAYS_FAIL,
  SET_PARAMS,
} from '../actions/HolidayActions';


const initialState = {
  country: 'US',
  number: 90,
  holidays: [],
  loading: false,
};

const holidayReducer = (state = initialState, action)=> {
  switch (action.type) {
    case SET_PARAMS:
        return {
            ...state,
            number: action.number,
            country: action.country,
        }

    case GET_HOLIDAYS:
      return {
        ...state,
        loading: true,
      }

    case GET_HOLIDAYS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        holidays: action.holidays
      }

    case GET_HOLIDAYS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        holidays: []
      }
    default:
      return state;
  }
}

export default holidayReducer;