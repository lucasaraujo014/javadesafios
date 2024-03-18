const temperatura = prompt("Qual é a Temperatura ? utilize ponto(.) se nescessario ")
const origem = prompt("Qual é a escala atual ? ")
const destino = prompt ("Para qual escala será a conversão ? ")
// De | Para | Fórmula
// --- | --- | ----
// Celsius | Fahrenheit | tF = (tC * 9/5) + 32
// Celsius | Kelvin | tK = tC + 273.15
// Fahrenheit | Celsius | tC = (tF - 32) * 5/9
// Fahrenheit | Kelvin | tK = (tF + 459.67) * 5/9
// Kelvin | Celsius | tC = tK - 273.15
// Kelvin | Fahrenheit | tF = tK * 9/5 - 459.67
const tf = origem = "Fahrenheit" || destino = "Fahrenheit"
