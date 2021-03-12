import React, { Component, useEffect } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './login/index'
import Admin from './admin/container/Admin'
import './App.less';
const App =()=>{
  return (
            <BrowserRouter>
              <Switch> {/*只匹配其中一个*/}
                <Route path='/login' component={Login}></Route>
                <Route path='/' component={Admin}></Route>
              </Switch>
            </BrowserRouter>
        )
}
export default App
