import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  location: '',
  data: {},
  dates: [],
  temps: [],
  selected: {
    date: '',
    temp: null
  }
});

export default function rootReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_LOCATION':
      return state.set('location', action.location);

    case 'SET_DATA':
      return state.set('data', fromJS(action.data));

    case 'SET_DATES':
      return state.set('dates', fromJS(action.dates));

    case 'SET_TEMPS':
      return state.set('temps', fromJS(action.temps));

    case 'SET_SELECTED_TEMP':
      return state.setIn(['selected', 'temp'], action.temp);

    case 'SET_SELECTED_DATE':
      return state.setIn(['selected', 'date'], action.date);

    default:
      return state;
  }
}
