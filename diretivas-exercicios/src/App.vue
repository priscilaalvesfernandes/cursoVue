<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretivas v-text'"></p>
		<p v-html="'Usando diretivas <strong>v-html</strong>'"></p> <!-- usando tags html dentro de js -->
		<hr>
		<p v-destaque:fundo.atrasar="'lightblue'">Diretiva personalizada</p>
		<p v-destaque="cor">Diretiva personalizada</p>
		<hr>		
		<p v-destaque-local:fundo.atrasar="'lightblue'">Diretiva personalizada</p>
		<p v-destaque-local.atrasar.altenar="{cor1:'green', cor2: 'purple', atraso: 2000, intervalo: 200}">Diretiva personalizada</p>
	</div>
</template>

<script>
export default {

	directives: { /*  usando diretivas locais */ 
		'destaque-local': {			
			bind(el, binding) {
				const aplicarCor=cor =>{ 
					if(binding.arg === 'fundo'){ 
						el.style.backgroundColor = cor
					}else{
						el.style.color = cor
					} 
				}

				let atraso = 0
				if(binding.modifiers ['atrasar']) atraso = binding.value.atraso

				const cor1 = binding.value.cor1
				const cor2 = binding.value.cor2
				let corAtual = cor1

				setTimeout(() => {
					if(binding.modifiers['altenar']) {
						setInterval(() => {						
						corAtual = corAtual === cor1 ? cor2 : cor1
						aplicarCor(corAtual)
						}, binding.value.intervalo)
					}else {
						aplicarCor(binding.value)
					}			
				}, atraso)
			}
		}
	},

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
