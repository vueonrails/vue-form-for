<template>
  <input type="submit" 
         name="commit" 
         :value="getValue" 
         :data-disable-with="getValue" />    
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
      getValue: function(){
        if(this.text != null) return this.text
        return "Create " + this.attr
        //return "Update" + this.attr
      }
    }
  }
</script>
