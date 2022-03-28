export default{
    computed: {
		fraseComVirgula(){
			return this.frase.replace(/ /g, ',')
		},
		fraseComTamanho(){
			return this.frase.split(' ').map(p => `${p} (${p.length})`).join(' ')
		}
	}
}