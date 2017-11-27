<template>
  <div id="app" class="center">
    <div v-for="petrol in sortedPetrols" id="p_div" class="hero is-light is-large">

      <h1 class="title is-4" style="padding-top:20px; padding-bottom:30px;" id="idh1">{{petrol.company}} <span id="idh1" style="float:right;" class="is-size-6">bensín / {{petrol.bensin95}} kr.</span></h1>
      
      <h1 class="subtitle is-5" style="padding-bottom:20px;" id="idh1">{{petrol.name}}<span id="idh1" style="float:right;" class="is-size-6">dísel / {{petrol.diesel}}</span></h1>

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

      return sorted
    }
  }
}
</script>

<style lang="scss">
  @import "~bulma/bulma";

  body {
    padding: 20px;
    background-color: white;
  }

  #p_div {
    border: solid 0.5px #DCDCDC;
    border-radius: 5px;
    margin: 10px;
    text-align: left;
    background-color: white;
    padding-left:15px;
    padding-right:15;
  }

  .center {
    margin: auto;
    width: 800px;
  }

  #p_div:hover #idh1 {
    color: #000000;
  }

  #idh1 {
    colour: #E0E0E0;
  }
</style>