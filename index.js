
let metersToFeet = 3.2808;
let feetToMeters = 0.3048;
let litersToGallons = 0.219969;
let gallonsToliters = 4.54609;
let kilosToPunds = 2.20462;
let poundsToKilos = 0.453592;

document.getElementById("value").addEventListener("keyup", medicion);

function medicion() {
    let number = parseFloat(document.getElementById("value").value)
    let meter = document.getElementById("meter")
    let feet = document.getElementById("feet")
    let liters = document.getElementById("liters")
    let gallons = document.getElementById("gallons")
    let kilos = document.getElementById("kilos")
    let pounds = document.getElementById("pounds")
    let values = document.getElementsByClassName("value")
    
    for (let index = 0; index < values.length; index++) {
        values[index].textContent=number
    }
    meter.textContent = (number * metersToFeet).toFixed(3)
    feet.textContent = (number * feetToMeters).toFixed(3)
    liters.textContent = (number * litersToGallons).toFixed(3)
    gallons.textContent = (number * gallonsToliters).toFixed(3)
    kilos.textContent = (number * kilosToPunds).toFixed(3)
    pounds.textContent = (number * poundsToKilos).toFixed(3)

}

