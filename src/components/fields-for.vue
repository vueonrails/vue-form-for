<template>
  <div :class="field">
    <slot/>
  </div>
</template>

<script>
import LabelTag from './label-tag.vue'
import SubmitTag from './submit-tag.vue'
import CheckBox from './check-box.vue'
import TextField from './text-field.vue'
import HiddenField from './hidden-field.vue'
import PasswordField from './password-field.vue'
import TextArea from './text-area.vue'
import Radio from './radio.vue'

//New
import NumberField from './number-field.vue'

export default {
  name: 'fields-for',
  components: {
    TextField, 
    LabelTag,
    SubmitTag,
    CheckBox,
    HiddenField,
    PasswordField,
    Radio,
    TextArea,  
    NumberField
  },
  inject: {
    attr: {},
    patchMode: { default: "" },
    editMode: { default: "" },
    form: { default: "" }
  },
  provide: function() {
    return {
      nested: this.model,
      editMode: this.edit
    };
  },
  props: {
    for: {
      type: String
    },
    attr: {
      type: String
    },
    edit: {
      type: Boolean
    },
    model: {
      type: String
    }, 
    field: {
      type: String, 
      default: "field"
    }
  }
};
</script>
