<template>
  <input :name="getName"
         :id="getID"
         type="checkbox" 
         value="0" checked/>
</template>

<script>
  export default {
    props: {
      for: {
        type: String
      }, 
      attr: {
        type: String
      }
    },
    computed: {
      getName: function() {
        return this.attr + "[" + this.for + "]"
      }, 
      getID: function() {
        return this.attr + "_" + this.for
      }
    }
  }
</script>
