const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let Nome = (form_num.get('Nome'))
    let num1 = parseFloat(form_num.get('num1'))
    let num2 = parseFloat(form_num.get('num2'))

    console.log(Nome, num2, num3, num4)

    let imc = parseFloat(num1) / parseFloat(num2 * num2)
 
    if (imc < 20){
        divResultado.innertHTML = ˋ${nome}, o IMC é ${imc.toFixed(2) o individuo abaixo do peso.ˋ
   }else if((imc >= 20) && (imc < 25)) {
        divResultado.innertHTML = ˋ${nome}, o IMC é ${imc.toFixed(2) o individuo está com o peso normal.ˋ
   }else if((imc >= 25) && (imc < 30)) {
        divResultado.innertHTML = ˋ${nome}, o IMC é ${imc.toFixed(2) o individuo está acima do peso.ˋ
    else if((imc >= 30) && (imc < 35)) {
        divResultado.innertHTML = ˋ${nome}, o IMC é ${imc.toFixed(2) o individuo está com obesidade grau 1.ˋ
    else ((imc >= 35) && (imc < 40)) {
        divResultado.innertHTML = ˋ${nome}, o IMC é ${imc.toFixed(2) o individuo está com obesidade grau 2.ˋ

})  


 

