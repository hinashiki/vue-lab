<template lang="html">
  <div class="home">
    <h1>Bar</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: 'This is Bar page.'
    }
  }
}
</script>

<style scoped>
p {
  color: blue;
}
</style>
