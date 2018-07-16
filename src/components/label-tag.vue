<template>
  <label :for="computeFor">
    {{computeText}} 
  </label>
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
    computeFor: function() {
      return this.attr + "_" + this.for 
    },
    computeText: function(){
      return this.for || this.text
    }
  }
}
</script>
