<template>
  <div id="app" class="center">
    <input class="center input is-primary" @keyup.enter=>
    <div v-for="petrol in sortedPetrols" id="p_div" class="hero is-info is-large">
      <h1 v-text="petrol.company" class="title is-4"></h1>
      <h3 v-text="petrol.name" class="subtitle is-5"></h3>
      <h3>bensín / {{petrol.bensin95}} kr.</h3>
      <h3>dísel / {{petrol.diesel}}</h3>
      <br>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      petrols: [],
      money: 0
    }
  },
  mounted() {
    var self = this;
    axios.get('http://apis.is/petrol')
      .then(function(response) {
        self.petrols = response.data.results;
      })
      .catch(function(errors) {
        console.log(errors);
      })
  },
  computed: {
    sortedPetrols() {
      var sorted = this.petrols.sort(function(a, b) {
        return a.bensin95 - b.bensin95;
      });
      
      sorted = sorted.filter(function(petrol) {
        return petrol.bensin95 > this.money;
      }.bind(this));

      return sorted
    }
  }
}
</script>

<style lang="scss">
  @import "~bulma/bulma";

  body {
    padding: 20px;
    background-color: #a3a3a3;
  }

  #p_div {
    border: solid 1px #d3d3d3;
    border-radius: 5px;
    margin: 10px;
    text-align: center;
  }

  .center {
    margin: auto;
    width: 600px;
  }
</style>
