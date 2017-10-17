Vue.component("button-counter", {
	data: function() {
		return{
			counter: 0
		};
	},

	methods: {
		incramentCounter: function() {
			this.counter++;

			this.$emit('incr');
		}
	},

	template: `
		<button @click="incramentCounter" class="button is-primary">
			{{counter}}
		</button>
	`,


});


var app = new Vue({
	el: "#app",
	data: {
		total: 0
	}
});