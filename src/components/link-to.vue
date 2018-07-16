<template>
  <a :href="url">
    {{ text }}
  </a>
</template>

<script>
export default {
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