let result = 0;

function sumNumber() {
    let num = prompt("Введите число");

    if (num != null) {
        if (!isNaN(num) && num != "") {
            result += parseFloat(num);
            sumNumber();
        } else {
            alert("Введены некорректные данные!");
            sumNumber();
        }
    } else {
        alert("Сумма: " + result);
    }
}

sumNumber();