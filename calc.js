let currentNum = 0;
const display = document.getElementById('display');
display.textContent = currentNum;
let lastNum, currentOperator;
let gotDecimal = false;

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.className == 'number') updateNum(btn.textContent);
        else if (btn.id == 'decimal' && !gotDecimal) {
            updateNum('.');
            gotDecimal = true;
        } else if (!lastNum) {
            lastNum=currentNum;
            display.textContent += btn.textContent;
        };
    });
});

function updateNum(n) {
    if (!currentNum) {
        currentNum = n;
        display.textContent = currentNum;
    } else {
        currentNum += n;
        display.textContent += n;
    }};