<template>
  <div id="app">

    <div>
      <input type="text" id="taskDetails" placeholder="task details" v-on:keyup.enter="addTasks">
      <button @click = "addTasks">submit</button>
    </div>

    <div>
      <div v-for="task in tasks" v-if="task.completed===false" id="incomplete">
        <h1 v-text="task.title"></h1>
      </div>

      <div v-for="task in tasks" v-if="task.completed===true" id="complete">
        <h1 v-text="task.title"></h1>
      </div>
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
    };
  },
  mounted() {
    var self = this;
    axios.get('http://fjolbraut.org/api/tasks', {
            params: {
                api_token: 'llN7Oxz9WL1wSlDIfRYOpvttP2lt6Gf8Wng4sh5QdhJ3HfWzw5stRS6Y5gwC'
            }
         })
         .then(function(response) {
            console.log(response);
            self.tasks = response.data;
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
         document.getElementById("taskDetails").value = "";
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

#complete {
  float: left;
  padding-left:60px;
}
</style>
