// Задача 1

let firstNumber = prompt("Введите первое число:", "");
let secondNumber = prompt("Введите второе число:", "");

function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

if (isNumber(firstNumber) && isNumber(secondNumber) && firstNumber != "" && secondNumber != "") {
    if (firstNumber === secondNumber) {
        alert("Числа равны");
    } else if (firstNumber < secondNumber) {
        alert("Первое число больше второго");
    } else {
        alert("Второе число больше первого");
    }
} else {
    alert("Введите корретные данные");
}