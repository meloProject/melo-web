import Routes from '../public/routes.jsx'
import ReactEngineClient from 'react-engine/lib/client'
// Include all view files. Browerify doesn't do
// this automatically as it can only operate on
// static require statements.
require('./views/*.jsx', {glob: true});

// boot options
var options = {
  routes: Routes,

  // supply a function that can be called
  // to resolve the file that was rendered.
  viewResolver: viewName => require('/views/' + viewName)
};

document.addEventListener('DOMContentLoaded', function onLoad(eve) {
  console.log('React engine working');
  // boot the app when the DOM is ready
  ReactEngineClient.boot(options);
});

