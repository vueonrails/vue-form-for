<!-- The $emit function allows this input to be compatible with v-model -->
<template>
  <input type="text" 
        :name="getName"
        :value="getValue"
        :id="getID"
        @input="$emit('input', $event.target.value)">
</template>

<script>
  export default {
    name: 'text-field',
    inject: {
      nested: { default: "" },
      attr: { default: "" },
      patchMode: { default: "" },
      editMode: { default: "" }, 
      form: { default: "" }
    },
    props: {
      for: {
        type: String
      },   
      content: {
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
      console.log(this.$parent.$children)
      this.$parent.$children.filter(function(x){
        // Please DO NOT accept label-tag so as to compute index correctly. Goodness, 
        // Everything depends on counting correcting!
        if(x._uid != undefined && (x.$vnode.componentOptions.tag != "label-tag")){
          array.push(x._uid)
        }
      })
      this.index = array.indexOf(this._uid)
    },
    computed: {
      getValue: function(){
        // This means that the rails view is showing `action/3/edit` or `action/3`
        if (this.patchMode.isPatch == true || this.editMode.isEdit == true) {
          return this.form.withData[this.for]
        } else {
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
  }
</script>
