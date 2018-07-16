<template>
  <form :action="computePath" accept-charset="UTF-8" method="post"> 
    <input name="utf8" type="hidden" value="✓">
    <input v-if="isPatch" type="hidden" name="_method" value="patch">
    <input type="hidden" name="authenticity_token" :value="authenticity_token">
    <slot/>
  </form>
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

export default {
  provide: function(){
    return {
      attr: this.model
    }
  },
  name: 'form-for',
  props: {
    for: {
      type: String
    },
    model: {
      type: String
    },
    isPatch: {
      type: Boolean, 
      default: false
    }
  },
  components: {
    TextField, 
    LabelTag,
    SubmitTag,
    CheckBox,
    HiddenField,
    PasswordField,
    Radio,
    TextArea
  },
  computed: {
    isPath: function(){
      return ""
    }, 
    computePath: function(){
      //if this is a creation form
      return "/" + this.model + "s"

      // if this is a patch
      // return "/" + this.model + "/1"
    }
  },
  data: function() {
    return {
      authenticity_token: ""
    }
  },
  mounted(){
    var token =  document.querySelector('meta[name=csrf-token]')
    if(token != null) this.authenticity_token = token.content
    //check if this is a patch
    this.patch()
  }, 
  methods: {
    patch: function(){
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              console.log(this.response);
              //for each value, set it to the form
          }
      };
      request.open('GET', "/" + this.model + 's' + '/1.json');
      request.send();
    }
  }
}

</script>
