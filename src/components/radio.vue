<template>
  <input :name="computedName"
         :id="computedID"
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
      computedName: function() {
        return this.attr + "[" + this.for + "]"
      }, 
      computedID: function() {
        return this.attr + "_" + this.for
      }
    }
  }
</script>