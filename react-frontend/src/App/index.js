import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route, withRouter, Link } from 'react-router-dom'
import Sidebar from 'react-sidebar'

import Header from 'src/components/Header/Header'
import SideNavbar from 'src/components/SideNavbar'

import routes from './routes'
import css from './index.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarOpen: false
    }
  }

  componentDidMount() {
    console.log(window.location.pathname)
  }

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open })
  }

  render() {
    return (
      <Fragment>
        {/* 좋은 방법 아니다. 빠르게 하기 위한 임시 방편 */}
        {
          window.location.pathname.includes('/new-main') 
            ? (
              <div className={css.New}>
                <header>
                  <ul>
                    <li>
                      <Link to="/new-main/yeramdri">예람드리</Link>
                    </li>
                    <li>
                      <Link to="/new-main/contents">컨텐츠</Link>
                    </li>
                    <li>
                      <Link to="/new-main/open-contents">오픈 컨텐츠</Link>
                    </li>
                  </ul>
                </header>
                <Switch>
                  {routes.map(({ ...routeProps }) => (
                    <Route {...routeProps} key={routeProps.path || ''} />
                  ))}
                </Switch>
              </div>
            )
            : <Sidebar
              sidebar={<SideNavbar />}
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              styles={{ overlay: { background: "#ffffff62" } }}>
              <Header toggleSidebar={() => this.onSetSidebarOpen(true)} />
              <Switch>
                {routes.map(({ ...routeProps }) => (
                  <Route {...routeProps} key={routeProps.path || ''} />
                ))}
              </Switch>
            </Sidebar>}
      </Fragment>
    )
  }
}

export default hot(module)(withRouter(App))
