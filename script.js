
//CALCULATOR PROGRAM

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Evaluates the expression in the display
    } catch (error) {
        display.value = 'Error'; // If there's an error in the calculation
    }
}
