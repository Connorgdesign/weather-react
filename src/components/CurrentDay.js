import React, { Component } from 'react';
import './App.css';

class CurrentDay extends Component{

  render() {
          const city = this.props.city;
          const day = this.props.day;
          const d = day.weather[0];
          const date = new Date(day.dt * 1000);
          return (

            <div className="current-day">
            <h1>{d.description}</h1>
            <p>Morning Temperature: {day.temp.morn}&#8457;</p>
            <p>Day Temperature: {day.temp.day}&#8457;</p>
            <p>Evening Temperature: {day.temp.eve}&#8457;</p>
            <p>Night Temperature: {day.temp.night}&#8457;</p>
            <p>Atmospheric Pressure: {day.pressure}</p>
            <p>Humidity: {day.humidity}%</p>
            <p>Wind Speed: {day.speed} mph</p>
          </div>
      )}

}


export default CurrentDay;
