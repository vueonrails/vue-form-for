<template>
  <input type="number" 
        :name="getName"
        :id="getID"
        @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
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
      type: Number
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
  data: function(){
    return {
      index: ""
    }
  },
  computed: {
    value: function(){
      if (this.patchMode.isPatch == true || this.editMode.isEdit == true) {
        return this.form.withData[this.for]
      }else {
        return this.content
      }
    },
    getName: function() {
      if (this.nested != "") {
        return this.attr + "[" + this.nested + "_attributes]" + "["  + this.index + "][" + this.for + "]"
      } else {
        return this.attr + "[" + this.for + "]"
      }
    },
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
