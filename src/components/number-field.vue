<!-- The $emit function allows this input to be compatible with v-model -->
<template>
  <input type="number" 
        :name="getName"
        :id="getID"
        :value="getValue"
        @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  name: 'number-field',
  inject: {
    attr: { default: "" },
    nested: { default: ""}, //setting it as "" as default because it may not be present in non-nested environment
    patchMode: { default: "" },
    editMode: { default: "" }, 
    form: { default: "" }
  },
  props: {
    for: {
      type: String
    },
   content: {
      type: Number,
      default: 0
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
    this.index = 0
  },
  data: function(){
    return {
      index: ""
    }
  },
  computed: {
    getValue: function(){
      if (this.patchMode.isPatch == true || this.editMode.isEdit == true) {        
        if(this.nested != ""){
          return this.form.withData[this.nested]
        } else {
          return this.form.withData[this.for]
        }
      }else {
        return this.content
      }
    },
    // If this component is nested in fields-for, it will display a different ID e.g. show[seasons_attributes][0][name] 
    // If it is not nested, the ID will be attribute[name] e.g. show[name]
    getName: function() {
      if (this.nested != "") {
        return this.attr + "[" + this.nested + "_attributes]" + "["  + this.index + "][" + this.for + "]"
      } else {
        return this.attr + "[" + this.for + "]"
      }
    },
    // If this component is nested in fields-for, it will display a different ID e.g. show_seasons_attributes_0_name 
    // If it is not nested, the ID will be attribute_name e.g. show_name
    getID: function() {
      if (this.nested != "") {
        return this.attr + "_" + this.nested + "_attributes" + "_"  + this.index + "_" + this.for
      } else {
        return this.attr + "_" + this.for;
      }
    }
  }
};
</script>
