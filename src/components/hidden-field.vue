<template>
  <input :name="getName"
         :id="getID"
         type="hidden">
</template>

<script>
  export default {
    props: {
      attr: {
        type: String
      },
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
