const display = document.getElementById("display");
let answer = false;

function appendtoDisplay(input) {
    if (answer != true) {
        display.value += input;
        console.log(answer)
    } else {
        clearDisplay();
        display.value += input;
        answer = false;
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
        answer = true;
    } catch (error) {
        display.value = "Error";
        answer = true;
    }
}

function clearDisplay() {
    display.value = "";
}