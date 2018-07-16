# Vue-Form-For 

`<form-for>` is a Vue on Rails form component. It is created with [Vue on Rails](vueonrails.com) in mind. 

## Install

```javascript
yarn add vue-form-for

npm install vue-form-for
```

## Usage

```javascript
import form from 'vue-form-for'
Vue.use(form)
```

At `<template>` of `.vue` or any HTML with Vue instance presence. 
```javascript
<template>
  <form-for model="something">
    <text-field for="something"/>
    <submit-tag/>
  </form-for>
</template>
```

`<form-for>` ships with the following custom components with the corresponding HTML element on the right.

| `<form-for>` component        | HTML element                    |
| ----------------------------- |:-------------------------------:|
| `<text-field/>`               | `<input type='text'>`           |
| `<hidden-field/>`             | `<input type='hidden'>`         |
| `<password-field/>`           | `<input type='password'>`       |  
| `<radio/>`                    | `<input type='radio'>`          |  
| `<check-box/>`                | `<input type='checkbox'>`       |
| `<form-for></form-for>`       | `<form></form>`                 |
| `<label-tag/>`                | `<label></label>`               |
| `<button-to/>`                | `<input type='button'>`         |
| `<text-area/>`                | `<textarea></textarea>`         |    | `<link-to/>`                  | `<a></a>`                       |
| `<submit-tag/>`               | `<input type='submit'>`         |

I have put them into TODOs: 
- `<image-tag/>`          | `input`                  
- `<drop-down/>`          | `input`    
- `<list/>`               | `input`                   

## The key benefit of using form-for over Rails' form-with 

If you decide to invest in Vue, `<form-for>` integrates better with Vue and its ecosystem like Vuex, Vue components & plugins.

If not, Rails' `form-with` is equally good. 


## How `<form-for>` handles CSRF

`<form-for>` grabs the authenticity token from meta tag, similar to how `rails-ujs` did it [here](https://github.com/rails/rails/commit/ad3a47759e67a411f3534309cdd704f12f6930a7#diff-676d31a6694a1453708a207c89112197).

To know about CSRF, please read https://www.gnucitizen.org/blog/csrf-demystified/

## `<form-for>` uses provide/inject mechanism to pass down the props

Thanks to Benjamin for his pointers.  https://github.com/e-e-e/vue-pass-props/issues/1#issuecomment-405078684

`<form-for>` uses provide/inject mechanism stated in here https://codepen.io/fimion/post/vuejs-dependency-injection-2-way-provide-inject-data-binding
## LICENSE

MIT

## Contact

ytbryan@gmail.com or twitter.com/ytbryan