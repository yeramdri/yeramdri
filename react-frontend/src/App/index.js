import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route, withRouter, Link } from 'react-router-dom'
import Sidebar from 'react-sidebar'

import Header from 'src/components/Header/Header'

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

  renderSidebarContents = () => {
    const div = { padding: '3rem' }
    const h3 = { color: '#f6f6f6', fontWeight: '100', padding: '0.5rem' }

    return (
      <div style={div}>
        <h3 style={h3}>
          <Link to="/bible">말씀</Link>
        </h3>
        <h3 style={h3}>
          <Link to="/life">삶</Link>
        </h3>
        <h3
          style={h3}
          onClick={() => {
            alert('준비중 입니다 :)')
          }}
        >
          사역
        </h3>
      </div>
    )
  }

  render() {
    return (
      <Fragment>
        <Sidebar
          sidebar={<Fragment>{this.renderSidebarContents()}</Fragment>}
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
