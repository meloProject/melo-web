import React, {Component} from 'react';

export default class MainDepdencies extends Component {
  render() {
    return (
    	<scripts>
       {/* <script src ='/src/babel-core.js'  type="text/javascript"></script> */}
        <script src='/src/systemjs-master/dist/system-polyfills.js' type="text/javascript"></script>
        <script src='/src/systemjs-master/dist/system.src.js' type="text/javascript"></script>
        <script src='/systemConfig.js' type="text/javascript"></script>
        <script src='/builds/main.js' type="text/javascript"></script>
        </scripts>
    )
  }
};

 