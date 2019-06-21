<!-- The $emit function allows this input to be compatible with v-model -->
<template>
  <input type="hidden"
         :name="getName"
         :id="getID"
         :value="getValue"
         @input="$emit('input', $event.target.value)">
</template>

<script>
  export default {
    inject: {
      attr: { default: "" },
      patchMode: { default: "" },
      editMode: { default: "" },
      form: { default: "" }
    },
    props: {
      attr: {
        type: String
      },
      for: {
        type: String
      },
      content: {
        type: String
      }
    },
    computed: {
      getValue: function(){
        if (this.patchMode.isPatch == true || this.editMode.isEdit == true) {
          return this.form.withData[this.for]
        }else {
          return this.content
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
