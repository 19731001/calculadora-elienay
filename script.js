// Adiciona o valor ao display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Limpa o display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Calcula o resultado das expressões
function calculateResult() {
    let display = document.getElementById('display');
    let expression = display.value;

    try {
        // Avalia a expressão e exibe o resultado
        let result = eval(expression);
        if (result === undefined || result === Infinity || result === -Infinity || isNaN(result)) {
            display.value = "Erro";
        } else {
            display.value = result;
            addToHistory(expression + " = " + result);
        }
    } catch (e) {
        display.value = "Erro";
    }
}

// Calcula a raiz quadrada do valor
function calculateSqrt() {
    let display = document.getElementById('display');
    let value = parseFloat(display.value);

    if (isNaN(value)) {
        display.value = "Erro";
    } else {
        let result = Math.sqrt(value);
        display.value = result;
        addToHistory("√" + value + " = " + result);
    }
}

// Adiciona o cálculo ao histórico
function addToHistory(operation) {
    let historyList = document.getElementById('history-list');
    let historyItem = document.createElement('li');
    historyItem.textContent = operation;
    historyList.appendChild(historyItem);
}
