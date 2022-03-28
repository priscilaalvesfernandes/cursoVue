<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretivas v-text'"></p>
		<p v-html="'Usando diretivas <strong>v-html</strong>'"></p> <!-- usando tags html dentro de js -->
		<hr>
		<p v-destaque:fundo.atrasar="'lightblue'">Diretiva personalizada</p>
		<p v-destaque="cor">Diretiva personalizada</p>
	</div>
</template>

<script>
export default {
	data(){
		return{
			cor: 'green'
		}
	}
	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
