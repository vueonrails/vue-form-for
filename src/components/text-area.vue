<template>
  <textarea :name="getName" 
            :id="getID">
  </textarea>
</template>

<script>
  export default {
    inject: {
      attr: {},
      nested: { default: ""} //setting it as "" as default because it may not be present in non-nested environment
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
        // return this.attr + "_" + this.for
      }
    }
  }
</script>
