import React, {Component} from 'react'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

import App from '../public/views/main/components/index.jsx'
import Main from '../public/views/main/components/main.jsx'
import Controller from '../public/views/main/components/controller.jsx'
import Screen from '../public/views/main/components/screen.jsx'
 
module.exports = (
   <Router history={browserHistory}>
        <Route path='/' component={App} >
            <Route path="melo" component={Main} />
             <Route path="controller" component={Controller}/>
             <Route path="screen" component={Screen} />
        </Route>
  </Router >
);

// onEnter={(location, replaceWith) => {
//                         
// }}


