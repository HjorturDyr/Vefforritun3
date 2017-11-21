<template>
	<div id="closebox">
    	<h1 id="boxtext">
    		<slot></slot>
    		<oButton>{{closetext}}</oButton>
    	</h1>
  	</div>
</template>

<script>
import oButton from './oButton.vue'

	export default {
		props: ['closetext'],
		components: { oButton }
	}
</script>

<style>
	#closebox {background: white; padding: 8px 16px; border: 1px grey solid; border-radius: 5px; float: left; margin: 2px;}
	#boxtext {font-weight: bold;}
</style>