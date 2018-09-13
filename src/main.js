const VueFormFor = {
  install(Vue) {
    const requireComponent = require.context(
      './components',
      false,
      /[a-z]\w+\.(vue|js)$/
    )
    
    requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName)
      const componentName = upperFirst(
        camelCase(
          fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
        )
      )

      Vue.component(
        componentName,
        componentConfig.default || componentConfig
      )
    })
    
    function upperFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function camelCase(str) {
       return str.toLowerCase().replace(/(?:(^.)|(\s+.))/g, function(match) {
          return match.charAt(match.length-1).toUpperCase();
      }); 
    }
  
  }
}

export default VueFormFor
