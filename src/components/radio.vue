<template>
  <input type="radio"
         :name="getName"
         :id="getID">
</template>

<script>
  export default {
    name: 'radio',
    inject: {
        attr: { default: "" },
        patchMode: { default: "" },
        editMode: { default: "" }
      },
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
