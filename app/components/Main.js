import React from 'react'
import styles from '../styles'
import Home from '../components/Home'
import GetWeatherContainer from '../containers/GetWeatherContainer'


function Main(props){
  return (
      <div style={styles.header}>
        <div style={styles.headerStyle}>
          <h2 style={{margin: 0}}>React Weather App</h2>
          <GetWeatherContainer/>
        </div>

        {props.children}
      </div>
  )
}

export default Main