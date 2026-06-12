const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let num1 = parseFloat(form_num.get('num1'))
    let num2 = parseFloat(form_num.get('num2'))
    let num3 = parseFloat(form_num.get('num3'))

    let distancia = parseFloat(num1 / num2) 
    let consumo = parseFloat(distancia * num3)



    divResultado.innerHTML = `O combustivel necessario será ${distancia.toFixed(2).replace('.', ',')} o preço total para essa locomoção  ${consumo.toFixed(2).replace('.', ',')}`

})