import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router, Route, Link } from 'react-router'
import routes from '../public/browser.jsx'
import sockets from 'socket.io-client'
import sails from 'sails.io.js'
//import test from '../public/test'

 var io = sails(sockets);
io.sails.autoConnect = true;
io.sails.transports = ['websocket'];
io.sails.url = 'http://localhost:1337';
window.sails = io;