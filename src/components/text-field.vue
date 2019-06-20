<template>
  <input type="text" 
        :name="getName"
        :id="getID">
</template>

<script>
  export default {
    inject: {
      attr: {},
      nested: { default: ""}, //setting it as "" as default because it may not be present in non-nested environment
      cccc: { default: ""}
    },
    props: {
      for: {
        type: String
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
        if(x._uid != undefined){
          array.push(x._uid)
        }
      })
      this.index = array.indexOf(this._uid)
    },
    computed: {
      // getting this.nested from fields-for
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
  }
</script>
