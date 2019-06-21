<template>
  <input type="submit" 
         name="commit" 
         :value="getValue" 
         :data-disable-with="getValue" />    
</template>

<script>
  export default {
    name: 'submit-tag',
    inject: {
      attr: { default: "" },
      patchMode: { default: "" },
      editMode: { default: "" }
    },
    props: {
      value: {
        type: String
      }
    },
    computed: {
      getValue: function(){
        if (this.value != null) return this.value;

        if (this.patchMode.isPatch == true || this.editMode.isEdit == true) {
          return "Update " + this.attr;
        } else {
          return "Create " + this.attr;
        }
      }
    }
  }
</script>
