import React, {Component} from 'react';

export default class Controller extends Component {
  render() {
    function deps() {
        return (
             <script async src='/builds/melocn.js' type="text/javascript"></script>
        ) 
    } 
    return (
          <div id="controllerContainer" className="main-controller"> 
            <div className="con__st_top"></div>
            <div className="con__st_mid"></div>
            <div className="con__st_bot"></div>
          {deps()}
          </div>
    )
  }
};


