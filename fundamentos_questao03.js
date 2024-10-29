function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

console.log(tempCelsius + "°C em Fahrenheit é: " + celsiusParaFahrenheit(tempCelsius) + "°F");
console.log(tempFahrenheit + "°F em Celsius é: " + fahrenheitParaCelsius(tempFahrenheit) + "°C");

