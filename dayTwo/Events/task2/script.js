let currentNumber = '';
let previousNumber = '';
let operation = '';
let shouldResetScreen = false;

function EnterNumber(num) {
    if (shouldResetScreen) {
        document.getElementById('Answer').value = '';
        shouldResetScreen = false;
    }
    document.getElementById('Answer').value += num;
    currentNumber = document.getElementById('Answer').value;
}

function EnterOperator(op) {
    if (currentNumber !== '') {
        if (previousNumber !== '') {
            calculate();
        }
        operation = op;
        previousNumber = currentNumber;
        shouldResetScreen = true;
    }
}

function EnterEqual() {
    if (currentNumber !== '' && previousNumber !== '' && operation !== '') {
        calculate();
        operation = '';
        previousNumber = '';
        shouldResetScreen = true;
    }
}

function EnterClear() {
    document.getElementById('Answer').value = '';
    currentNumber = '';
    previousNumber = '';
    operation = '';
    shouldResetScreen = false;
}

function calculate() {
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    let result;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current !== 0) {
                result = prev / current;
            } else {
                alert('Cannot divide by zero!');
                return;
            }
            break;
        default:
            return;
    }

    document.getElementById('Answer').value = result;
    currentNumber = result.toString();
} 