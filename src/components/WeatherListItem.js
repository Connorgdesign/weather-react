import React, { Component } from 'react';


class WeatherListItem extends Component{
constructor(props){
  super(props);
  this.currentDay = this.currentDay.bind(this);
}
currentDay(){
  const index = this.props.index;
  const onDayClick = this.props.onDayClick;
  onDayClick(index);
}

render(){
  const {day} = this.props;
  const date = new Date(day.dt * 1000);
  return(
    <div className="weather-list-item" onClick={this.currentDay}>
    <h2>{date.getMonth() + 1} / {date.getDate()}</h2>
    <h3>{day.temp.min.toFixed(1)}&#8457; {day.temp.max.toFixed(1)}&#8457;</h3>
    </div>
  );
}
}


export default WeatherListItem;
