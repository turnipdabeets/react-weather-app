import React from 'react'
import styles from '../styles'
import {getDay} from '../utils/helpers'

function DayItem({icon, day, handleClick}){
  const date = getDay(day)

  return(
    <div style={styles.weatherBox} onClick={handleClick}>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt='Weather'/>
      <h2>{date}</h2>
    </div>
  )
}

export default DayItem