<!-- This form mimics Rails' form-for and form-with. The authenticityToken is required for 
all the Rails' form. To read about authenticityToken, 
Read http://stackoverflow.com/questions/941594/ddg#1571900 -->
<template>
  <form :action="getPath" accept-charset="UTF-8" method="post"> 
    <input name="utf8" type="hidden" value="✓">
    <input v-if="isPatch" type="hidden" name="_method" value="patch">
    <input type="hidden" name="authenticity_token" :value="authenticityToken">
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

//New 
import FieldsFor from "./fields-for.vue";
import NumberField from './number-field.vue'

export default {
  // Provide & Inject is required to inject objects into nested components
  // Read more ~> https://vuejs.org/v2/api/#provide-inject
  // Object.defineProperty is a way to attach a hash to an object and make it available to your children
  provide: function(){
    // isPatch checks the url for update routes. 
    // Usage: 
    const isPatch = {};
    Object.defineProperty(isPatch, "isPatch", {
      enumerable: true,
      get: () => this.isPatch
    });
    // isEdit is based on the edit option. 
    // Set edit="true" to enable this mode
    const isEdit = {};
    Object.defineProperty(isEdit, "isEdit", {
      enumerable: true,
      get: () => this.isEdit
    });
    // formData is the form data for Edit mode. 
    // You can set the action to determine the formdata source
    const withData = {};
    Object.defineProperty(withData, "withData", {
      get: () => this.withData
    });

    return {
      attr: this.model,
      patchMode: isPatch,
      editMode: isEdit, 
      form: withData
    };
  },
  name: 'form-for',
  props: {
    action: {
      type: String
    },
    edit: {
      type: String
    },
    for: {
      type: String
    },
    model: {
      type: String
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
    TextArea, 
    FieldsFor,
    NumberField
  },
  computed: {
    isPath: function(){
      return ""
    }, 
    getPath: function(){
      if (this.isPatch == false) {
        return "/" + this.model + "s";
      } else {
        return "/" + this.model + "s/" + window.location.pathname.split("/")[2];
      }
    }
  },
  data: function() {
    return {
      authenticityToken: "",
      isPatch: "",
      isEdit: "",
      withData: ""
    }
  },
  // Life cycle of a Vue component 
  // beforeCreate -> created -> beforeMount -> mounted ((-> beforeUpdate -> updated ->)) -> beforeDestroy -> destroyed
  // Read more -> https://alligator.io/vuejs/component-lifecycle/
  created() {
    // checkEditMode will determine if the pathname is a edit RESTFUL route or check for the presence of editmode
    this.checkEditMode();
    this.getEditData();
  },
  mounted(){
    var token = document.querySelector("meta[name=csrf-token]");
    if (token != null) this.authenticityToken = token.content;
  }, 
  methods: {
    checkEditMode: function() {
      // Should this form component be in edit mode? 
      if (window.location.href.match(/([a-z]+[/][0-9]+[/]edit)/) != null || this.edit == "true") {
        // this.action = 'actions/1'
        this.isPatch = true;
        this.isEdit = true;
        console.log("At form-for, edit mode is on");
        //call the patch and fetch the data from this model
      } else {
        // this.action = actions/1
        this.isPatch = false;
        this.isEdit = false;
        console.log("At form-for, edit mode is off");
      }
    },
    getEditData: function() {
      // If you find your data does not make sense, 
      // Look no further, just comment out the console.log(this.response)
      var vm = this
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // console.log("ALL the response")
          // console.log(this.response)
          vm.withData = JSON.parse(this.response)
        }
      };
      // To set action, <form-for action="trump">
      // Assume Rails route convention but can be overridden by setting action
      if(this.action){
        request.open('GET', "/" + this.action + '.json');
      } else {
        request.open('GET', "/" + this.model + 's/' + window.location.pathname.split("/")[2] + '.json');
      }
      request.send();
    }
  }
}

</script>
