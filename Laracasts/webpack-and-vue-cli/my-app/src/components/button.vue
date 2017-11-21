<template>
	<div id="butt_on">
    	<button id="butt_on-text">
    		<slot></slot>
    	</button>
  	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	#butt_on {}
	#butt_on-text {background-color: #1E90FF; border: none; color: white; padding: 8px 18px; border-radius: 5px; float: left; margin: 4px; font-weight: bold; font-size: 18px;}
</style>