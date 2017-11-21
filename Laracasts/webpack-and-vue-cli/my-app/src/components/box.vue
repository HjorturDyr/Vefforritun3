<template>
	<div id="box">
    	<h1 id="text">
    		<slot></slot>
    	</h1>
  	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	#box {background: white; padding: 12px; border: 1px grey solid; border-radius: 5px; float: left; margin: 2px;}
	#text {font-weight: bold;}
</style>