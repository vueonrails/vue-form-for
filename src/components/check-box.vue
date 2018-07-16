<template>
  <input :name="computedName"
         :id="computedID"
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
      computedName: function() {
        return this.attr + "[" + this.for + "]"
      }, 
      computedID: function() {
        return this.attr + "_" + this.for
      }
    }
  }
</script>
