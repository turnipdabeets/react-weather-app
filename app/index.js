import React from 'react'
import ReactDOM from 'react-dom'

import ReactRouter, {Router, Route, hashHistory, IndexRoute} from 'react-router'
import Main from './components/Main'
import Home from './components/Home'
import ForecastContainer from './containers/ForecastContainer'
import DetailContainer from './containers/DetailContainer'

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='forecast/:city' component={ForecastContainer} />
      <Route path='detail/:city' component={DetailContainer} />

    </Route>
    
  </Router>

)

ReactDOM.render(routes, document.getElementById('app'))