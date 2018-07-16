<template>
  <input :name="computedName"
         :id="computedID"
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
      computedName: function() {
        return this.attr + "[" + this.for + "]"
      }, 
      computedID: function() {
        return this.attr + "_" + this.for
      }
    }
  }
</script>