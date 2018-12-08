import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route, withRouter } from 'react-router-dom'

import Header from 'src/components/Header/Header'

import routes from './routes'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          {routes.map(({ ...routeProps }) => (
            <Route {...routeProps} key={routeProps.path || ''} />
          ))}
        </Switch>
      </Fragment>
    )
  }
}

export default hot(module)(withRouter(App))
