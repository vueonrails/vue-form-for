<!-- The $emit function allows this input to be compatible with v-model -->
<template>
  <textarea :name="getName" 
            :id="getID"
            v-model="value"
            @input="$emit('input', $event.target.value)">
  </textarea>
</template>

<script>
  export default {
    name: 'text-area',
    inject: {
      attr: {},
      patchMode: { default: "" },
      editMode: { default: "" },
      form: { default: "" },
      nested: { default: ""} //setting it as "" as default because it may not be present in non-nested environment
    },
    props: {
      for: {
        type: String
      },
      value: {
        type: String, 
        default: ""
      }
    },
    data: function(){
      return {
        index: ""
      }
    },
    created: function(){
      var array = []
      this.$parent.$children.filter(function(x){
        // do not accept label-tag so as to compute index correctly
        if(x._uid != undefined && (x.$vnode.componentOptions.tag != "label-tag")){
          array.push(x._uid)
        }
      })
      this.index = array.indexOf(this._uid)
    },
    computed: {
      getValue: function(){
        if (this.patchMode.isPatch == true || this.editMode.isEdit == true) {
          return this.form.withData[this.for]
        } else {
          return this.value
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
  }
</script>
