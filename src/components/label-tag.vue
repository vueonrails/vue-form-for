<template>
  <label :for="getFor"
         :value="getValue">
    {{getValue}} 
  </label>
</template>

<script>
export default {
  name: 'label-tag',
  inject: {
    attr: {},
    nested: { default: ""} //setting it as "" as default because it may not be present in non-nested environment
  },
  props: {
    for: {
      type: String
    },
    value: {
      type: String
    }
  },
  created: function(){
    var array = []
    this.$parent.$children.filter(function(x){
      if(x._uid != undefined){
        array.push(x._uid)
      }
    })
    this.index = array.indexOf(this._uid)
  },
  computed: {
    // If this component is nested in fields-for, it will display a different ID e.g. show[seasons_attributes][0][name] 
    // If it is not nested, the ID will be attribute[name] e.g. show[name]
    getName: function() {
      if (this.nested != "") {
        return this.attr + "[" + this.nested + "_attributes]" + "["  + this.index + "][" + this.for + "]"
      } else {
        return this.attr + "[" + this.for + "]"
      }
    }, 
    // Similar to getID
    // If this component is nested in fields-for, it will display a different ID e.g. show_seasons_attributes_0_name 
    // If it is not nested, the ID will be attribute_name e.g. show_name
    getFor: function() {
      if (this.nested != "") {
        return this.attr + "_" + this.nested + "_attributes" + "_"  + this.index + "_" + this.for
      } else {
        return this.attr + "_" + this.for;
      }
    },
    getValue: function(){        
      if (this.value != null) return this.capitalize(this.value)

      return this.capitalize(this.for) 
    }
  },
  methods: {
    // Names should be capitalized
    // If user gives "john", it will become John
    // If user gives "jOHN" or "JOHN" it will become John
    capitalize: function(str){
      return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1)
    }
  }
}
</script>
