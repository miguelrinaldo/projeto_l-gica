const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit' , (evt) =>  {

const form_num = nem FormData(formDados)

let num1 = parseFlot(form_get('num1'))
let num2 = parseFlot(form_get('num2'))
let num3 = parseFlot(form_get('num3'))

console.log(num1, num2, num3)

let media = parseFloat(num1 + num2 + num3) /  parseFloat(3)


divResultado.innertHTML = `A media do s numero ${media}`

})