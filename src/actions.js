import fetch from 'isomorphic-fetch';

const API_KEY = '1d1424d196ffa342955fc04999749763';

export function fetchDataForLocation (location) {
  return (dispatch) => {
    const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${API_KEY}&units=metric`;

    return fetch(URL)
      .then(r => r.json())
      .then(json => {
        let dates = [];
        let temps = [];
        json.list.forEach(item => {
          dates = dates.concat(item.dt_txt);
          temps = temps.concat(item.main.temp);
        });

        dispatch(setData(json));
        dispatch(setDates(dates));
        dispatch(setTemps(temps));
        dispatch(setSelectedTemp(null));
        dispatch(setSelectedDate(''));
      });
  }
}

export function setSelectedDate (date) {
  return {
    type: 'SET_SELECTED_DATE',
    date
  };
}

export function setSelectedTemp (temp) {
  return {
    type: 'SET_SELECTED_TEMP',
    temp
  };
}

export function changeLocation (location) {
  return {
    type: 'CHANGE_LOCATION',
    location
  };
}

export function setData (data) {
  return {
    type: 'SET_DATA',
    data
  };
}

export function setDates (dates) {
  return {
    type: 'SET_DATES',
    dates
  };
}

export function setTemps (temps) {
  return {
    type: 'SET_TEMPS',
    temps
  };
}
