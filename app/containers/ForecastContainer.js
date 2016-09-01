import React, {Component} from 'react'
import styles from '../styles'
import {getCurrentWeather, get5DayForecast} from '../utils/helpers'
import Forecast from '../components/Forecast'

class ForecastContainer extends Component{

  constructor(){
    super()
    this.state = {
      isLoading: true,
      currentWeatherData: {}
    }
  }
 
  componentDidMount(){
    //const city = this.props.location.state.city //was passsed from GetWeather state during route change
    //or
    const city = this.props.routeParams.city //better if refresh page or don't come from getWeather state
  
    get5DayForecast(city)
      .then((currentWeatherData)=> {
        this.setState({
          isLoading: false,
          currentWeatherData: currentWeatherData
        })

      })

  }
  componentWillReceiveProps (nextProps) {
    const city = nextProps.routeParams.city //incase there is an update and component received new props, like a new city
    get5DayForecast(city)
      .then((currentWeatherData)=> {
        this.setState({
          isLoading: false,
          currentWeatherData: currentWeatherData
        })

      })
  }

  handleClick (weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather
      }
    })
  }

  render(){
   
    var weather = this.state.currentWeatherData

     if(!weather){
      return (
        <div style={styles.bodyHeader}>LOADING</div>
      )
     }
    return (
        <Forecast
          city={this.props.routeParams.city} //use instead of currentWeatherData.city.name because button wont work if change city otheriwse
          isLoading={this.state.isLoading}
          currentWeatherData={this.state.currentWeatherData}
          handleClick = {(weather)=> this.handleClick(weather)}
        />
    )
  }
}

ForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ForecastContainer