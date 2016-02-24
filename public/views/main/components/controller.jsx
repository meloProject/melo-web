import React, {Component} from 'react';

export default class Controller extends Component {
  render() {
    function deps() {
        return (
                <script async src='/builds/melocn.js' type="text/javascript"></script>
        ) 
    } 
    return (
        <div id="main">
            <ul className="panel">
                <li id="panel"></li> 
            </ul>
            {deps()}
        </div>
    )
  }
};
