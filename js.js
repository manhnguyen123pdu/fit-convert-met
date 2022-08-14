function footToMeter(value) {
    result = 0.305 * value;
    return result;
}

function meterToFoot(value) {
    result = 3.279 * value;
    return result;
}

function display() {
    let select = document.querySelector('#select').value;
    let value = document.querySelector('#value').value;
    let out = document.querySelector('.out');

    if (select == "1") {
        out.innerHTML="Feet to meters: "+footToMeter(value)
    }
    else {
        out.innerHTML='Meters to Feet: '+meterToFoot(value)
    }
}
