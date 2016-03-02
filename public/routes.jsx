import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

import App from '../public/views/main/components/index.jsx'
import Main from '../public/views/main/components/main.jsx'
import Melo from '../public/views/main/components/melo.jsx'
import Linker from '../public/views/main/components/linker.jsx'
import Nexus from '../public/views/main/components/nexus.jsx'
import Controller from '../public/views/main/components/controller.jsx'
import Screen from '../public/views/main/components/screen.jsx'

module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component={App} >
	         <Route path="main" component={Main} />
		     <Route path="melo" component={Melo}>
		         <Route path="linker" component={Linker} />
	         	 <Route path="nexus" component={Nexus}/> 
		     </Route>
	         <Route path="controller" component={Controller}/>
	         <Route path="screen" component={Screen} />
        </Route>
  </Router >
);

// onEnter={(location, replaceWith) => {
//                         
// }}
