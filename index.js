const display = document.getElementById("display");


function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
function calculate(){
    display.value = eval(display.value);
}
function calculateLog() {
    // Get the current value from the display
    let value = parseFloat(display.value);

    // Calculate the logarithm base 10 of the current value
    let result = Math.log10(value);

    // Update the display with the result
    display.value = result;
}
