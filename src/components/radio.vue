<template>
  <input :name="getName"
         :id="getID"
         type="radio">
</template>

<script>
  export default {
    inject: ['attr'],
    props: {
      for: {
        type: String
      }, 
      text: {
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
