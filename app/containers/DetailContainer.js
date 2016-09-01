import React, {Component} from 'react'
import styles from '../styles'
import DayItem from '../components/DayItem'

function Detail({weather, city}){

  return(
    <div style={styles.descriptionContainer}>
      <DayItem icon={weather.weather[0].icon} day={weather.dt} />
        <p>{city}</p>
        <p>{weather.weather[0].description}</p>
        <p>min temp: {weather.temp.min} degrees</p>
        <p>max temp: {weather.temp.max} degrees</p>
        <p>humidity: {weather.humidity}</p>
    </div>
  )
}

class DetailContainer extends Component{

  render(){
    var weatherData = this.props.location.state.weather 
    var city = this.props.routeParams.city 

    return(
      <Detail
        weather={this.props.location.state.weather} //when you pass from a route
        date
        city={this.props.routeParams.city} /> //when you grab a param
    )
  }
}

export default DetailContainer