let num = 0;
let result = 0;

while (num != null) {
    num = prompt("Введите число");

    if (!isNaN(num) && num != "") {
        result += Number(prompt("Введите число"));
    }
}

alert("Сумма: " + result);