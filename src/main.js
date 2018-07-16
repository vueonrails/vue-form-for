import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

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
  }
}

export default VueFormFor
