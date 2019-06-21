<!-- The $emit function allows this input to be compatible with v-model -->
<template>
  <div>
    <input type="hidden" :name="getName" value="0">
    <input type="checkbox" 
          :name="getName"
          :id="getID"
          :value="getName" 
          :checked="getValue"
          @change="$emit('change', $event.target.checked)"/>
  </div>
</template>

<script>
  export default {
    name: 'check-box',
    inject: {
      attr: { default: "" },
      patchMode: { default: "" },
      editMode: { default: "" },
      form: { default: "" }
    },
    props: {
      for: {
        type: String
      }, 
      attr: {
        type: String
      },
      checked: {
        type: Boolean
      }
    },
    model: {
      prop: 'checked',
      event: 'change'
    },
    computed: {
      getValue: function(){
        if (this.patchMode.isPatch == true || this.editMode.isEdit == true) {
          return this.form.withData[this.for]
        } else {
          return false 
        }
      },
      getName: function() {
        return this.attr + "[" + this.for + "]"
      }, 
      getID: function() {
        return this.attr + "_" + this.for
      }
    }
  }
</script>
