System.config({
  transpiler: 'traceur',
  app: {
      format: 'register',
      defaultExtension: 'js'
  },
  map: {
      traceur: 'src/traceur.js',
      react: 'src/react-0.14.6/build/react.js',
      dom: 'src/react-0.14.6/build/react-dom.js'
  }
});
