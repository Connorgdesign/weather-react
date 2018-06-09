import React, { Component } from 'react';
import './App.css';
import ZipForm from './ZipForm';
import CurrentDay from './CurrentDay';
import get from 'axios';
import WeatherList from './WeatherList';
import WeatherListItem from './WeatherListItem';


class App extends Component {
constructor (props){
  super(props);
  this.state = {
    zipcode: "",
    city: {},
    dates: [],
    selectedDate: null
  };
  this.url = "http://api.openweathermap.org/data/2.5/forecast/daily?zip=";
  this.apikey = "&units=imperial&appid=c59493e7a8643f49446baf0d5ed9d646";
  this.$form = document.getElementById('zipForm');
  this.$zipcode = document.getElementById('zipcode');
  this.$weatherlist = document.getElementById('weatherList');
  this.$day = document.getElementById('currentDay');
    this.onDayClick = this.onDayClick.bind(this);
  this.onFormSubmit = this.onFormSubmit.bind(this)

}

onFormSubmit(zipcode){


  get(this.url + zipcode + this.apikey)
  .then(({data}) => {
    const{city, list: dates} = data;
    this.setState({zipcode, city, dates, selectedDate:null});
  })
  .catch(error => {
      alert(error);
  });
}

onDayClick(index){
  this.setState({selectedDate: index});
}

render() {
  return (
    <div className="App">
        <ZipForm onSubmit={this.onFormSubmit} />
        <WeatherList days= {this.state.dates} onDayClick={this.onDayClick} />
        {this.state.selectedDate != null && <CurrentDay city={this.state.city} day={this.state.dates[this.state.selectedDate]}/>}
      </div>);
}
}


export default App;
