import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import Plot from './Plot';

import {
  fetchDataForLocation,
  changeLocation,
  setSelectedTemp,
  setSelectedDate
} from './actions';

class App extends Component {
  onPlotClick = (data) => {
    if (data.points) {
      let num = data.points[0].pointNumber;

      this.props.dispatch(setSelectedDate(this.props.redux.getIn(['dates', num])));
      this.props.dispatch(setSelectedTemp(this.props.redux.getIn(['temps', num])));
    }
  }

  fetchData = (evt) => {
    evt.preventDefault();
    let location = encodeURIComponent(this.props.redux.get('location'));
    this.props.dispatch(fetchDataForLocation(location));
  }

  changeLocation = (evt) => {
    this.props.dispatch(changeLocation(evt.target.value));
  }

  renderForecast() {
    let list = this.props.redux.getIn(['data', 'list']);
    if (!list) {
      return;
    }

    let currentTemp = list.getIn(['0', 'main', 'temp']);
    let selectedTemp = this.props.redux.getIn(['selected', 'temp']);
    let selectedDate = this.props.redux.getIn(['selected', 'date']);

    return (
      <div className="wrapper">
        <p className="temp-wrapper">
          <span className="temp">
            {selectedTemp ? selectedTemp : currentTemp}
          </span>
          <span className="temp-symbol">°C</span>
          <span className="temp-date">
            {selectedTemp ? selectedDate : ''}
          </span>
        </p>
        <h2>Forecast</h2>
        <Plot xData={this.props.redux.get('dates')}
              yData={this.props.redux.get('temps')}
              onPlotClick={this.onPlotClick}
              type="scatter" />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Weather</h1>
        <form onSubmit={this.fetchData}>
          <label>
            I want to know the weather for
            <input type="text"
                   placeholder="City, Country"
                   value={this.props.redux.get('location')}
                   onChange={this.changeLocation}/>
          </label>
        </form>
        {this.renderForecast()}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    redux: state
  };
}

export default connect(mapStateToProps)(App);
