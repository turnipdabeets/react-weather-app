import React, {Component, PropTypes} from 'react'
import styles from '../styles'

/* INPUT */
function Input({city, onUpdateCity}){
  return <input type="text" className="form-control" value={city} placeholder="New York City, NY" onChange={onUpdateCity}/>
}

/* BUTTON */
function Button({margin, onSubmitCity}){
  return <button style={{margin: margin}} onClick={onSubmitCity} className="btn btn-success">Get Weather</button>
}

Button.defaultProps = {
  marigin: null
}

/* INPUT AND BUTTON TOGETHER */
function GetWeather(props){
  return (    
    <div style={props.customStyles}>
      <Input onUpdateCity={props.onUpdateCity} city={props.city}/>
      <Button onSubmitCity={props.onSubmitCity} margin={10}/>
    </div> 
  )  
}

GetWeather.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

export default GetWeather