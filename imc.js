const nome = prompt("Qual é o seu nome ? ")
const altura = prompt("Qual é o seu altura em metros ? utilize ponto(.) ")
const peso = prompt ("Qual é o seu peso em kilos ? ")
const imc = peso/(altura**2)

alert(` ${nome} seu imc é : ${imc.toFixed(1)}`)
if (imc < 18.5) {
    alert("Abaixo do peso")
    
} else if (imc >= 18.5 && imc <=24.9 ) {
    alert(" Peso Normal")
} else if (imc >= 25 && imc <= 29.9) {
    alert("Sobrepeso")
} else if (imc >= 30 && imc <=34.9 ) {
    alert("Obesidade grau 1")
} else if (imc >= 35 && imc <= 39.9) {
    alert("Obesidade grau 2")
} else { 
    alert("Obesidade grau 3")
    
} 