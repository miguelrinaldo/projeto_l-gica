const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let num1 = parseFloat(form_num.get('num1'))
    let num2 = parseFloat(form_num.get('num2'))

    let parede = parseFloat(num1 * num2) / parseFloat(2)
    let area = parseFloat(num1 * num2)

    console.log(parede)
    console.log(area)

    divResultado.innerHTML = `Para cobrir vai ser necessário ${parede.toFixed(2).replace('.', ',')}`

})