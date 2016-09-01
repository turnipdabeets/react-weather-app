import React from 'react'
import styles from '../styles'
import GetWeatherContainer from '../containers/GetWeatherContainer'


function Home(){
  return (
    <div style={styles.bodyContainer}>     
      <h1 style={styles.bodyHeader}>Enter a City and State</h1>
       <GetWeatherContainer/>
    </div>
  )
}

export default Home