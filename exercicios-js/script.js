// CUBO -----------------------------------

const numero = document.querySelector('.entrada')
const botao = document.querySelector('.botao')
const resultado = document.querySelector('.resultado')

botao.addEventListener('click', () => {
    const entrada = numero.value;

        resultado.innerHTML = Math.pow(entrada, 3)
        numero.value = ""  
        numero.focus()  

        if(entrada == 0){
            resultado.innerHTML = "Digite um número válido"
        }
})


// TEMPERATURA ----------------------------

const numeroF = document.querySelector('.entradaF')
const botaoCelcius = document.querySelector('.botaoCelcius')
const resultadoCelcius = document.querySelector('.resultadoCelcius')

botaoCelcius.addEventListener('click', () => {
    const entrada = numeroF.value;

        resultadoCelcius.innerHTML = `${((entrada - 32) * 0.5556).toFixed(1)}ºC`
        numeroF.value = ""  
        numeroF.focus()  

        if(entrada == 0){
            resultadoCelcius.innerHTML = "Digite uma temperatura válida"
        }
})


//  ÁREA TRIÂNGULO -----------------------------------------

function areaTriangulo() {
    const base = document.getElementById('base').value
    const altura = document.getElementById('altura').value
    const resultadoArea = document.querySelector('.area')

    var area = (base * altura) / 2
    resultadoArea.innerHTML = area;

    base.value = ""
    altura.value = ""

}


// CÍRCULO --------------------------------------

function calculaCirculo() {
    const raio = document.querySelector('.raio').value
    const areaCirculo = document.querySelector('.areaCirculo')
    const perimetroCirculo = document.querySelector('.perimetroCirculo')

    const area = (Math.PI * raio * raio).toFixed(1)
    const perimetro = (2 * Math.PI * raio).toFixed(1)

    areaCirculo.innerHTML = `Área: ${area}`
    perimetroCirculo.innerHTML = `Perímetro: ${perimetro}`
}


// NÚMERO INVERTIDO -------------------------------

function inverteNumero() {
    const numeroInv = document.querySelector('.numero').value
    const resInvertido = document.querySelector('.resInvertido')
    
    const invertido = numeroInv.split('').reverse().join('')

    resInvertido.innerHTML = `Número invertido: ${invertido}`
}

