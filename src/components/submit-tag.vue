<template>
  <input type="submit" 
         name="commit" 
         :value="computeValue" 
         :data-disable-with="computeValue" />    
</template>

<script>
  export default {
    inject: ['attr'],
    props: {
      text: {
        type: String
      }
    },
    computed: {
      computeValue: function(){
        if(this.text != null) return this.text
        return "Create " + this.attr
        //return "Update" + this.attr
      }
    }
  }
</script>