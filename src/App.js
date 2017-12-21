import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import AppIndex from './view/index/index'
import AppDetail from './view/detail/detail'
import City from './view/city/City'
import User from './view/user/User'
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h3><NavLink to='/detail/2323'>to detail page</NavLink></h3> */}
        <Switch>
          <Route exact path={'/'} component={AppIndex}></Route>
          <Route  path={'/detail/:id'} component={AppDetail}></Route>
          <Route path={'/city'} component={City}></Route>
          <Route path={'/user'} component={User}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
