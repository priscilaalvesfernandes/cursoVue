import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque',{ //criando diretivas
	bind(el, binding) { // binding, vnode caso nao precise pode ser retirado 
		// el.style.backgroundColor = 'lightgreen'

		let atraso = 0 //modificando diretiva

		if(binding.modifiers ['atrasar']) atraso = 0

		setTimeout(() => {
			if(binding.arg === 'fundo'){ //passando argumento para diretiva
				el.style.backgroundColor = binding.value
			}else{
				el.style.color = binding.value
			}  
		}, atraso)

		
		// if(binding.arg === 'fundo'){ //passando argumento para diretiva
		// 	el.style.backgroundColor = binding.value
		// }else{
		// 	el.style.color = binding.value
		}

	}
)

new Vue({
	render: h => h(App),
}).$mount('#app')
