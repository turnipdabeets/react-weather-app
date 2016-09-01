import React, {Component} from 'react'
import styles from '../styles'
import {getCurrentWeather, get5DayForecast, getDay} from '../utils/helpers'
import DayItem from './DayItem'

function ForecastUI({weatherData, city, handleClick}){ 
   
  return(
    <div>
      <h1 style={styles.forecastHeader}>{city}</h1>
      <p style={styles.forecastSubHeader}> Select a day</p>
      <div style={styles.displayWeather}>
        {weatherData.list.map((days, i)=>(
          <DayItem handleClick={handleClick.bind(this,days)} key={days.dt} icon={days.weather[0].icon} day={days.dt} />  
        ))}
      </div>
    </div>
  )
}

function Forecast (props){

  return (
    <div style={styles.forecastContainer}>
      {
        props.isLoading === true
        ? <h1>Loading</h1>
        : <div>
            <ForecastUI handleClick={props.handleClick} city={props.city} weatherData={props.currentWeatherData}/>
          </div>
            
      }
     </div>
  )
} 

export default Forecast