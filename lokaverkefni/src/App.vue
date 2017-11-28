<template>
  <div id="app">
    <div>
      <input type="text" id="taskDetails" placeholder="task details">
      <button @click = "addTasks">submit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      tasks: []
    }
  },
  mounted() {
    axios.get('http://fjolbraut.org/api/tasks', {
            params: {
                api_token: 'llN7Oxz9WL1wSlDIfRYOpvttP2lt6Gf8Wng4sh5QdhJ3HfWzw5stRS6Y5gwC'
            }
         })
         .then(function(response) {
            console.log(response);
            self.tasks = response.data.results;
         }).
         catch(function(error) {
            console.log(error);
         });

  },
  methods: {
    addTasks() {
      var taskId = document.querySelector("input[id=taskDetails]").value
      axios.post('http://fjolbraut.org/api/tasks?api_token=llN7Oxz9WL1wSlDIfRYOpvttP2lt6Gf8Wng4sh5QdhJ3HfWzw5stRS6Y5gwC', {
            title: taskId
         })
         .then(function(response) {
            console.log(response);
         })
         .catch(function(error) {
            console.log(error);
         });
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
