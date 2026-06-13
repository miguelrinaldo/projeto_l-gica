const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let Nome = (form_num.get('Nome'))
    let num2 = parseFloat(form_num.get('num2'))
    let num3 = parseFloat(form_num.get('num3'))
    let num4 =parseFloat(form_num.get('num4'))

    console.log(Nome, num2, num3, num4)

    let media = parseFloat(num2 + num3 + num4) / parseFloat(3)
 
    if (media >= 6){
        alert(`${Nome} foi Aprovado(a)`)
    }else{
        alert(`${Nome} foi Reprovado(a)`)
    }


 divResultado.innerHTML = media = `A soma de ${Nome} foi ${media.toFixed(2).replace('.', '.')}. ${Nome} foi ${media >= 6 ? (`Aprovado(a)`) : (`Reprovado(a)`)}` 
})  


 

