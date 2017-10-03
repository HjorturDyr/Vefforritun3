Vue.component('task-list', {
	template: `
		<ul>
			<task v-for="task in tasks">
				{{ task.title }}
			</task>
		</ul>
	`,

	data: function() {
		return {
			tasks: [
				{title: 'fara í búð', complete: true},
				{title: 'fara í húð', complete: false},
				{title: 'fara í rúv', complete: true},
				{title: 'fara í súð', complete: false},
			]
		};
	}
});

Vue.component('task', {
	template: '<li><slot></slot></li>',

});

var app = new Vue({
	el: '#app',

	data: {

	}
});
