<template>
  <div id="app">

    <div>
      <input type="text" id="taskDetails" placeholder="task details" v-on:keyup.enter="addTasks">
      <button @click = "addTasks">submit</button>
    </div>

    <div>
      <table class="table is-striped is-fullwidth">

        <h1>incomplete</h1>
        <ul v-for="task in tasks" v-if="task.completed==false" id="incomplete" :key="task.id">
          <input type="checkbox" id="myCheck" @click="checkTask(task)"><li v-text="task.title"></li>
        </ul>

        <h1>Complete</h1>
        <ul v-for="task in tasks" v-if="task.completed==true" id="complete" :key="task.id">
          <input type="checkbox" id="myCheck" @click="checkTask(task)" checked><li v-text="task.title"></li>
        </ul>
        
      </table>
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
         setTimeout(function () { window.location.reload(); }, 100)
    },
    checkTask(task) {
      var id = task.id;

      axios.post('http://fjolbraut.org/api/tasks/' + id + '/status?api_token=llN7Oxz9WL1wSlDIfRYOpvttP2lt6Gf8Wng4sh5QdhJ3HfWzw5stRS6Y5gwC')
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
         });

        setTimeout(function () { window.location.reload(); }, 100)
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

table {
  border: 1px solid black;
  margin-left:auto;
  margin-right:auto;
  margin-top: 20px;
}

#myCheck {
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid black;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
}

#myCheck:checked {
    background-color: black;
}
</style>
