export default {
    data() {
        return{
         frutas:'',
         frutas: ['banana', 'maçã', 'laranja']
         }
     },
     methods: {
         add() {
             this.frutas.push(this.fruta)
             this.fruta = ''
         }
     }
}