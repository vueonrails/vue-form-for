<template>
  <input :name="getName"
         :id="getID"
         type="password" />   
</template>

<script>
  export default {
    inject: ['attr'],
    props: {
      for: {
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
