<template>
	<div class="modal is-active">
	  	<div class="modal-background"></div>
	  	<div class="modal-content">
	   		<div class="box">
	   			<slot></slot>	
	   		</div>
	 	</div>
	  	<button @click="$emit('close')" class="modal-close is-large" aria-label="close"></button>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	
</style>