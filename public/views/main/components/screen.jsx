import React, {Component} from 'react';

export default class Screen extends Component {
  render() {
    return (
        <div id="main">
            <ul className="panel">
                <li id="panel"></li> 
            </ul>
            <script src='/builds/melosc.js' type="text/javascript"></script> 
        </div>
    )
  }
};
