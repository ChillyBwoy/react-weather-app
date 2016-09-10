import { fromJS } from 'immutable';
import rootReducer from '../reducers';

describe('rootReducer()', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(fromJS({
      location: '',
      data: {},
      dates: [],
      temps: [],
      selected: {
        date: '',
        temp: null
      }
    }));
  });

  it('should react to an action with the type "CHANGE_LOCATION"', () => {
    let location = 'Vienna, Austria';
    expect(rootReducer(undefined, {
      type: 'CHANGE_LOCATION',
      location
    })).toEqual(fromJS({
      location,
      data: {},
      dates: [],
      temps: [],
      selected: {
        date: '',
        temp: null
      }
    }));
  });

  it('should react to an action with the type "SET_DATA"', () => {
    let data = {some: 'data'};
    expect(rootReducer(undefined, {
      type: 'SET_DATA',
      data
    })).toEqual(fromJS({
      location: '',
      data,
      dates: [],
      temps: [],
      selected: {
        date: '',
        temp: null
      }
    }));
  });

  it('should react to an action with the type "SET_DATES"', () => {
    let dates = ['2016-01-01', '2016-01-02'];
    expect(rootReducer(undefined, {
      type: 'SET_DATES',
      dates
    })).toEqual(fromJS({
      location: '',
      data: {},
      dates,
      temps: [],
      selected: {
        date: '',
        temp: null
      }
    }));
  });

  it('should react to an action with the type "SET_TEMPS"', () => {
    let temps = ['31', '32'];
    expect(rootReducer(undefined, {
      type: 'SET_TEMPS',
      temps
    })).toEqual(fromJS({
      location: '',
      data: {},
      dates: [],
      temps,
      selected: {
        date: '',
        temp: null
      }
    }));
  });

  it('should react to an action with the type "SET_SELECTED_DATE"', () => {
    let date = '2016-02-01'
    expect(rootReducer(undefined, {
      type: 'SET_SELECTED_DATE',
      date
    })).toEqual(fromJS({
      location: '',
      data: {},
      dates: [],
      temps: [],
      selected: {
        date,
        temp: null
      }
    }));
  });

  it('should react to an action with the type "SET_SELECTED_TEMP"', () => {
    let temp = '31';
    expect(rootReducer(undefined, {
      type: 'SET_SELECTED_TEMP',
      temp
    })).toEqual(fromJS({
      location: '',
      data: {},
      dates: [],
      temps: [],
      selected: {
        date: '',
        temp
      }
    }));
  });
});
