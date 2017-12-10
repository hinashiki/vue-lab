<template lang="html">
  <div class="home">
    <h1>hogehoge</h1>
    <h3>fugafuga</h3>
    <p>{{ msg }}</p>
    <div class="row">
      <div v-for="card in resData.foreignNames" class="col-md-1">
        <img v-bind:src="card.imageUrl">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter: function(to, from, next){
    var targetUrl = 'https://api.magicthegathering.io/v1/cards/386616';
    axios.get(targetUrl)
    .then(function(response){
      console.log(response.data.card);
      next(function(vm){
        vm.resData = response.data.card;
      });
    })
    .catch(function(error){
      console.log(error);
      next();
    });
  },
  data: function() {
    return {
      msg: 'Hello vue!',
      resData: []
    }
  }
}
</script>

<style scoped>
p {
  color: red;
}
</style>
