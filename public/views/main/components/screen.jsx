import React, {Component} from 'react';

export default class Screen extends Component {
  render() {
    function deps() {
        return (
             <script async src='/builds/melosc.js' type="text/javascript"></script>
        ) 
    } 
    return (
          <div className="main"> 
                {this.props.children} 
                {deps()}
          </div>
    )
  }
};
