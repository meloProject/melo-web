import React, {Component} from 'react';

export default class Screen extends Component {
  render() {
    function deps() {
        return (
             <script async src='/builds/melosc.js' type="text/javascript"></script>
        ) 
    } 
    return (
          <div id="screenContainer" className="main-screen"> 
            <div className="sc__st_top"></div>
            <div className="sc__st_mid"></div>
            <div className="sc__st_bot"></div>
          {deps()}
          </div>
    )
  }
};
