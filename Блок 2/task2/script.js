let firstYear = prompt("Введите начальный год", "");
let secondYear = prompt("Введите конечный год", "");

if ( isNaN(firstYear) || isNaN(secondYear) ) {
    alert("Не число");
} else if (firstYear === "" || secondYear === "") {
    alert("Ничего не ввели");
} else {
    if (firstYear > secondYear || firstYear === secondYear) {
        alert("Указан неправильный диапазон");
    } else {
        for (let i = firstYear; i <= secondYear; i++) {
            if (i % 4 != 0 || i % 100 === 0 && i % 400 != 0) {
                console.log(i + " год - обычный");
            } else {
                console.log(i + " год - високосный");
            }
        }
    }
}