<template>
  <a :href="url">
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'link-to',
  props: {
    url: {
      type: String
    }, 
    text: {
      type: String
    }
  }
}
</script>
