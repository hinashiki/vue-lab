<template lang="html">
  <div class="home">
    <h1>hogehoge</h1>
    <h3>fugafuga</h3>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: 'Hello vue!'
    }
  }
}
</script>

<style scoped>
p {
  color: red;
}
</style>
