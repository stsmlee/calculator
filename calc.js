let currentNum = '';
const display = document.getElementById('display');
display.textContent = currentNum;
let lastNum, currentOperator;
let gotDecimal = false;

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.className == 'number' || btn.id == 'decimal') {
            updateDisplay(btn.textContent);
            console.log('current:',currentNum)
            console.log('last', lastNum)
        } else if (btn.className == 'operator') {
            if (lastNum && currentNum) {
                if (currentOperator) document.getElementById(currentOperator).classList.toggle("selected");
                let res = calculate(lastNum, currentNum, currentOperator);
                currentNum = '';
                lastNum = res.toString();
                currentOperator = btn.id;
                document.getElementById(currentOperator).classList.toggle('selected');
                gotDecimal = false;
                display.textContent = res;
                console.log('res:',res, 'current:', currentNum, 'last:', lastNum);
            } else if (currentNum) {
                if (currentOperator) document.getElementById(currentOperator).classList.toggle("selected");
                btn.classList.toggle("selected");
                currentOperator = btn.id;
                console.log(currentOperator);
                lastNum = currentNum;
                currentNum = '';
                gotDecimal = false;
            } else if (lastNum) {
                if (currentOperator) document.getElementById(currentOperator).classList.toggle("selected");
                btn.classList.toggle("selected");
                currentOperator = btn.id;
                console.log(currentOperator);
                gotDecimal = false;
            };
        } else if (btn.className == 'clear') {
            switch (btn.id) {
                case 'clear-all':
                    clearAll();
                    break;
                case 'clear-entry':
                    currentNum = '';
                    display.textContent = '';
            };
        };
    });
});

function updateDisplay(n) {
    if (currentOperator == 'equals' && !currentNum) clearAll();
    if (n == '.') {
        if (!gotDecimal) {
            if (!currentNum) currentNum += 0;
            currentNum += '.';
            display.textContent = currentNum;
            gotDecimal = true;
        };
    } else if (!currentNum) {
        currentNum = n;
        display.textContent = currentNum;
    } else {
        currentNum += n;
        display.textContent += n;
    }};

function calculate(n1, n2, op) {
    n1 = +n1;
    n2 = +n2;
    switch(op) {
        case 'add':
            return Math.round((n1 + n2) * 100000) / 100000;
        case 'subtract':
            return Math.round((n1 - n2)* 100000) / 100000;
        case 'divide':
            if (n2 == 0) {
                clearAll();
                display.textContent = 'WTF U DOING?';
                break;
            };
            return Math.round(n1 / n2 * 100000) / 100000;
        case 'multiply':
            return Math.round(n1 * n2 * 100000) / 100000;
    };
};

function clearAll() {
    currentNum = '';
    display.textContent = currentNum;
    lastNum = 0;
    if (currentOperator) document.getElementById(currentOperator).classList.toggle("selected");
    currentOperator = 0;
    gotDecimal = false;
};




