import React, {Component} from 'react'
import styles from '../styles'
import GetWeather from '../components/GetWeather'

/* INPUT AND BUTTON TOGETHER */
class GetWeatherContainer extends Component {
  
  constructor(){
    super()
    this.state={
      city : ''
    }
  }  

  handleSubmitCity(e){
    e.preventDefault()
    this.context.router.push('/forecast/' + this.state.city) //use es6 => to bind this with GetWeather to get context and state
  }

  handleUpdateCity(e){
    this.setState({
      city: e.target.value
    })
  }

  render(){
    return (    
      <GetWeather
        city={this.state.city} 
        customStyles={styles.headerInput}
        onSubmitCity={(e) => this.handleSubmitCity(e)}
        onUpdateCity={(e) => this.handleUpdateCity(e)}/>   
    )
  }
}

GetWeatherContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default GetWeatherContainer