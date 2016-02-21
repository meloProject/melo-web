import React, { Component } from 'react'
import { Link, Router } from 'react-router'
import Deps from './deps.jsx'

module.exports = class AppTres extends Component {
  render() {
    return (
      <html>
      <head>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel='stylesheet' href='/stylesheets/melo/stylecore/css/main.css'/>
        <title>{ this.props.title || 'Melo!' }</title>
      </head>

      <body>
         {this.props.children} 
      <Deps />
      </body>
      
      </html>
    )
  }
};