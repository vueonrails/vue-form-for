# Vue-Form-For

`<form-for>` is a form component. It is created with [Vue on Rails](https://vueonrails.com) products in mind.

## Install

Installing using Vue on Rails

```ruby
rails generate vue <name-of-component> --form
```

```javascript
yarn add vue-form-for

//or
npm install vue-form-for
```

## Usage

```javascript
import form from "vue-form-for";
Vue.use(form);
```

At `<template>` of `.vue` or any HTML with Vue instance presence.

```javascript
<template>
  <form-for model="something">
    <text-field for="something" />
    <submit-tag />
  </form-for>
</template>
```

`form-for` will be in edit mode in two situations: when Rails route is in edit route `/something/(:id)/edit` or when the edit attribute is true.

```javascript
<template>
  <form-for model="something" edit="true">
    <text-field for="something" />
    <submit-tag />
  </form-for>
</template>
```

## Nested Form

`form-for` supports nested form via `fields-for`

```
<form-for model="controller">
  <text-field for="first"/>

  <fields-for model="second_controller">
    <text-field for="something"/>
  </fields-for>

  <submit-tag value="submit" />
</form-for>
```

## Development

Please run the following `yarn add` command to add your development package into your Rails product.

```
yarn add file:/Desktop/vue-form-for
```
`file:/Desktop/vue-form-for` should be the path to this repo directory

## LICENSE

MIT 

## Contact

ytbryan@gmail.com or [@ytbryan](http://twitter.com/ytbryan)


## Special Thanks

Special thanks to Andy for writing https://medium.com/@mindovermiles262/triple-nested-forms-in-rails-dedbcccb5799
