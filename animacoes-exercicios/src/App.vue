<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<!--<b-button variant="primary" class="mb-4"
		@click="exibir = !exibir">Mostrar Mensagem</b-button>
		
		<transition name ="fade" appear>  appear usado pra carregar uma aplicação com animação desde o inicio -->
		<!-- <b-alert variant="info" show v-if="exibir"> {{ msg }} </b-alert>
		</transition> -->

		<!-- <transition name ="slide" type="animation" appear>  type="animation" define quem manda na animacao, caso um seja muito maior que o outro-->
		<!-- <b-alert variant="info" show v-show="exibir"> {{ msg }} </b-alert>
		</transition> -->

		<!-- <transition enter-active-class="animated bounce" leave-active-class="animated shake">  type="animation" define quem manda na animacao, caso um seja muito maior que o outro-->
		<!-- <b-alert variant="info" show v-show="exibir"> {{ msg }} </b-alert>
		</transition> -->

		<!-- <hr> 
		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>

		<transition :name ="tipoAnimacao" mode="out-in">  type="animation" define quem manda na animacao, caso um seja muito maior que o outro-->
		<!-- <b-alert variant="info" show v-if="exibir" key="info"> {{ msg }} </b-alert>
		<b-alert variant="warning" show v-else key="warn"> {{ msg }} </b-alert>
		</transition>

		<hr>
		<button @click="exibir2 = !exibir2">Alternar</button>
		<transition
			:css="false" 
			@before-enter="beforeEnter" 
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"

			@before-leave="beforeLeave" 
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled">

			<div v-if="exibir2" class="caixa"></div>
		</transition>

		<hr>
		<div class="mb-4">
			<b-button variant="primary" class="mr-2" @click="componeteSelecionado = 'AlertaInfo'"> Info </b-button>
			<b-button variant="secondary" class="mr-2" @click="componeteSelecionado = 'AlertaAdv'"> Advertência </b-button>
		</div>
		
		<transition name="fade" mode="out-in">
			<component :is="componeteSelecionado"></component>
		</transition> -->
		<hr>
		<b-button @click="adicionarAluno" class="mb-4">Adicionar Aluno</b-button>
			<transition-group name="slide">
				<b-list-group v-for="(aluno, i) in alunos" :key="aluno">
				<b-list-group-item @click="removerAlunos(i)"> {{ aluno }} </b-list-group-item>
			</b-list-group>
		</transition-group>
		
	</div>
</template>

<script>

	import AlertaAdv from './AlertaAdv.vue'
	import AlertaInfo from './AlertaInfo.vue'
export default {
	components: {AlertaAdv, AlertaInfo},
	data() {
		return{
			alunos:['Ana', 'Paulo', 'José', 'Maria'],
			msg:'Uma mensagem informativa',
			exibir: false,
			exibir2: true,
			tipoAnimacao: 'fade',
			larguraBase: 0,
			componeteSelecionado: 'AlertaInfo',
		}
	},
	methods:{
		adicionarAluno(){
			const s = Math.random().toString(30).substring(2)
			this.alunos.push(s)
		},

		removerAlunos(indice){
			this.alunos.splice(indice, 1)
		},
		animar(el, done, negativo){
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase + (negativo? -rodada *10 : rodada *10)
				el.style.width = `${novaLargura}px`
				rodada ++
				if(rodada > 30){
					clearInterval(temporizador)
					done()
				}
			}, 20);

		},
		beforeEnter(el){
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done){
			// let rodada = 1
			// const temporizador = setInterval(() => {
			// 	const novaLargura = this.larguraBase + rodada *10
			// 	el.style.width = `${novaLargura}px`
			// 	rodada ++
			// 	if(rodada > 30){
			// 		clearInterval(temporizador)
			// 		done()
			// 	}
			// }, 20);

			this.animar(el, done, false)
		},
		// afterEnter(el){
		// 	console.log('afterEnter')
		// },
		// enterCancelled(el){
		// 	console.log('enterCancelled')
		// },
//------------------------------------------------------------------------------------------------//
		beforeLeave(el){
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done){
			// let rodada = 1
			// const temporizador = setInterval(() => {
			// 	const novaLargura = this.larguraBase - rodada *10
			// 	el.style.width = `${novaLargura}px`
			// 	rodada ++
			// 	if(rodada > 30){
			// 		clearInterval(temporizador)
			// 		done()
			// 	}
			// }, 20);

			this.animar(el, done, true)
		},
		// afterLeave(el){
		// 	console.log('afterLeave')
		// },
		// leaveCancelled(el){
		// 	console.log('leaveCancelled')
		// }
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
	font-size: 1.5rem;
}

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: rgb(144, 223, 164);
}


.fade-enter, .fade-leave-to  {
	opacity: 0;

}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

@keyframes slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0); }
}

@keyframes slide-out {
	from { transform: translateY(0px); }
	to { transform: translateY(40px); }
}
.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to  {
	opacity: 0;
}

.slide-move{
	transition: transform 1s;
}

</style>
