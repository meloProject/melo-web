import React, {Component} from 'react'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

import App from '../public/views/main/components/index.jsx'
import StartPage from '../public/views/main/components/startpage.jsx'
 
module.exports = (
   <Router history={browserHistory}>
        <Route path='/' component={App} >
            <Route path="startpage" component={StartPage} />
        </Route>
  </Router >
);








