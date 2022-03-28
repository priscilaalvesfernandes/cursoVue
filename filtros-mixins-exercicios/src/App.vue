<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p> {{ cpfDoAluno | cpf | inverter}} </p>
		<input type="text" :value="cpfDoAluno | cpf">
	</div>
</template>

<script>
export default {
	filters: { //criar filtro local
		cpf(valor) {
			const arr = `${valor}`.split('')//quebra  string e coloca cada caractere dentro de um array
			arr.splice(3,0,'.') //add caractere "." na posicao 3
			arr.splice(7,0,'.') //add caractere "." na posicao 6+1 pois ao add . aumenta a quantodade de caractere da string
			arr.splice(11,0,'-')
			return arr.join('')
		}
	},

	data() {
		return {
			cpfDoAluno: '12345678910'
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

input {
	font-size: 2.5rem;
}
</style>
