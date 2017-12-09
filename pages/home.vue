<template lang="html">
  <p>{{ msg }}</p>
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
  color: 'red';
}
</style>
