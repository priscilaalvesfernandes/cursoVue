<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<button v-quando:click="acao">Executar</button>
		<p 
			v-quando:mouseenter="mouseEnter"
			v-quando:mouseleave="mouseLeave">Teste mouse event!</p>
	</div>
</template>

<script>
export default {
	directives: {
		quando: {
			bind(el, binding) {
				// el.onclick = function(e) {
				// 	binding.value()
				// }
				const tipo = binding.arg
				const fn = binding.value
				el.addEventListener(tipo, fn)
			}
 		}
	},
	methods: {
		acao() {
			alert('Ação executada!')
		},
		mouseEnter() {
			console.log('Mouse enter!')
		},
		mouseLeave() {
			console.log('Mouse Leave!')
		},

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

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
