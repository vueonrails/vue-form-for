<template>
  <input type="password"
         :name="getName"
         :id="getID"
         :value="getValue" />   
</template>

<script>
  export default {
    name: 'password-field',
    inject: {
      attr: { default: "" },
      patchMode: { default: "" },
      editMode: { default: "" },
      form: { default: "" }
    },
    props: {
      for: {
        type: String
      }
    },
    computed: {
      getValue: function(){
        if (this.patchMode.isPatch == true || this.editMode.isEdit == true) {
          return this.form.withData[this.for]
        }else {
          return "" //do not fill up? 
        }
      },
      // If this component is nested in fields-for, it will display a different ID e.g. show[seasons_attributes][0][name] 
      // If it is not nested, the ID will be attribute[name] e.g. show[name]
      getName: function() {
        if (this.nested != "") {
          return this.attr + "[" + this.nested + "_attributes]" + "["  + this.index + "][" + this.for + "]"
        } else {
          return this.attr + "[" + this.for + "]"
        }
      },
      // If this component is nested in fields-for, it will display a different ID e.g. show_seasons_attributes_0_name 
      // If it is not nested, the ID will be attribute_name e.g. show_name
      getID: function() {
        if (this.nested != "") {
          return this.attr + "_" + this.nested + "_attributes" + "_"  + this.index + "_" + this.for
        } else {
          return this.attr + "_" + this.for;
        }
      }
    }
  }
</script>
