import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, withRouter} from 'react-router-dom';
import classnames from 'classnames/bind';

import Header from 'src/components/Header/Header'

import routes from './routes';
import css from './index.scss';

const cx = classnames.bind(css);
const moduleName = 'Home';



class App extends Component {
  render(){
    return(
      <div className={cx(`${moduleName}`)}>
          <Header />
          <Switch>
            {routes.map(({ ...routeProps }) => (
              <Route {...routeProps} key={routeProps.path || ''} />
            ))}
          </Switch>
    </div>
    );
  }
}

export default hot(module)(withRouter(App));
