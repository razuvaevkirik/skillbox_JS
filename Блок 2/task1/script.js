// Задача 1

let firstNumber = prompt("Введите первое число:", "");
let secondNumber = prompt("Введите второе число:", "");

if ( isNaN(firstNumber) || isNaN(secondNumber) ) {
    alert("Не число");
} else if (firstNumber === "" || secondNumber === "") {
    alert("Ничего не ввели");
} else {
    if (firstNumber === secondNumber) {
        alert("Числа равны");
    } else if (firstNumber < secondNumber) {
        alert("Первое число больше второго");
    } else {
        alert("Второе число больше первого");
    }
}