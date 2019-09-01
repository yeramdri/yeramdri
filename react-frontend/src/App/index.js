import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route, withRouter, Link, NavLink } from 'react-router-dom'
import Sidebar from 'react-sidebar'

import Header from 'src/components/Header/Header'
import SideNavbar from 'src/components/SideNavbar'

import routes from './routes'
import classnames from 'classnames/bind';
import css from './index.scss';

const cx = classnames.bind(css);

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
                      <NavLink to="/new-main/yeramdri" activeClassName={cx('active')}>예람드리</NavLink>
                    </li>
                    <li>
                      <NavLink to="/new-main/contents" activeClassName={cx('active')}>컨텐츠</NavLink>
                    </li>
                    <li>
                      <NavLink to="/new-main/open-contents" activeClassName={cx('active')}>오픈 컨텐츠</NavLink>
                    </li>
                  </ul>
                </header>
                <Switch>
                  {routes.map(({ ...routeProps }) => (
                    <Route {...routeProps} key={routeProps.path || ''} />
                  ))}
                </Switch>
                <footer>
                  <Link to="/new-main">
                    <img src={require("../assets/logo.png")}></img>
                  </Link>
                </footer>
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
