let currentNum = 0;
const display = document.getElementById('display');
display.textContent = currentNum;
let lastNum, currentOperator;
let gotDecimal = false;

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.className == 'number') updateDisplay(btn.textContent);
        else if (btn.id == 'decimal' && !gotDecimal) {
            updateDisplay('.');
            gotDecimal = true;
        } else if (!lastNum) {
            lastNum=currentNum;
            display.textContent += btn.textContent;
            currentOperator = btn.id;
            currentNum = 0;
            gotDecimal = false;
        } else {
            const result = calculate(lastNum,currentNum,currentOperator);
            display.textContent = result;
            lastNum = 0;
            currentNum = result;
            gotDecimal = false;
        };
    });
});

function updateDisplay(n) {
    if (currentNum==0 && !lastNum) {
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
            return n1 + n2
    };
};