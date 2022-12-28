let btn = document.querySelector('.btn-primary')
let result = document.querySelector('.res')
let textCalculate = document.querySelector('.calculando')

let firstNumber = 0
let secondNumber = 0

btn.addEventListener('click', () => {
    firstNumber = Number(prompt('Insira o primeiro valor: '))
    secondNumber = Number(prompt('Insira o segundo valor: '))

    let choice = Number (prompt(
    `
    Valores informados: ${firstNumber} e ${secondNumber}. 
    O que vamos fazer? 
    [1] Somar
    [2] Subtrair
    [3] Multiplicar 
    [4] Dividir`))

    textCalculate.innerHTML = 'Calculando...'

    if (choice == Number (1)) {
        result.innerHTML = `${firstNumber} + ${secondNumber} = <strong>${firstNumber + secondNumber}</strong>`
    } 
    else if (choice == Number (2)) {
        result.innerHTML = `${firstNumber} - ${secondNumber} = <strong>${firstNumber - secondNumber}</strong>`
    } 
    else if (choice == Number (3)) {
        result.innerHTML = `${firstNumber} X ${secondNumber} = <strong>${firstNumber * secondNumber}</strong>`
    }
    else if (choice == Number (4)) {
        result.innerHTML = `${firstNumber} / ${secondNumber} = <strong>${firstNumber / secondNumber}</strong>`
    }
    else {
        result.innerHTML = `<strong>OPÇÃO INVÁLIDA!</strong> Você digitou <strong>${firstNumber}</strong> e <strong>${secondNumber}</strong>, mas não sei o que fazer com eles 😒`
    }
})