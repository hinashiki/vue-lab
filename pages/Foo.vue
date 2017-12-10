<template lang="html">
  <div class="home">
    <h2>Yeah!</h2>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: 'This is Foo page.'
    }
  }
}
</script>

<style scoped>
p {
  color: green;
}
</style>
