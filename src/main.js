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
        camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
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
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
      }).replace(/[-_]+/g, '');
    }  
  }
}

export default VueFormFor
