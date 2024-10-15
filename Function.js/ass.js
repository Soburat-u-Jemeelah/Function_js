
alert("Welcom");

function converterPound(numb){
    let exchangeRate = 4.734; 
    
    return exchangeRate * numb
}

alert(converterPound(2000))

function converterEuro(number){
    let exchangeRate = 5.646
    return exchangeRate * number
}

alert(converterEuro(2000))


function celsiustoFarenheit(){
    let convertion =33.8
    return convertion 
}


alert("converting °C to °F");

let value = prompt("what is your value in  °C ");
console.log(value);

let resultCelsius = value * (9/5) + 32
console.log(resultCelsius);

alert( " Celsius to Fahrenheit is " + " "+ resultCelsius )
