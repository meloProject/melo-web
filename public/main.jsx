import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router, Route, Link } from 'react-router'
import routes from '../public/browser.jsx'
import socketIo from '../public/src/bower_components/socket.io-client/socket.io.js'
import sailsIo from '../public/src/bower_components/sails.io.js/sails.io.js'

const io = sailsIo(socketIo)
io.sails.autoConnect = false;
io.sails.url = 'localhost:1337';
io.sails.connect('localhost:1337')