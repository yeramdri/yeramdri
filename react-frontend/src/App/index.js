import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import {Switch, Route, withRouter} from 'react-router-dom'
import Sidebar from 'react-sidebar'

import Header from 'src/components/Header/Header'
import SideNavbar from 'src/components/SideNavbar'

import routes from './routes'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarOpen: false
    }
  }

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open })
  }

  render() {
    return (
      <Fragment>
        <Sidebar
          sidebar={<SideNavbar/>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: 'rgba(0, 0, 0, 0.8)' } }}
        >
          <Header toggleSidebar={() => this.onSetSidebarOpen(true)} />
          <Switch>
            {routes.map(({ ...routeProps }) => (
              <Route {...routeProps} key={routeProps.path || ''} />
            ))}
          </Switch>
        </Sidebar>
      </Fragment>
    )
  }
}

export default hot(module)(withRouter(App))
