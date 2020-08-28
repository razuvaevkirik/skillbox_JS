let firstYear = prompt("Введите начальный год", "");
let secondYear = prompt("Введите конечный год", "");

function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function isLeapYear(year) {
    if (year % 4 != 0 || year % 100 === 0 && year % 400 != 0) {
        return "обычный";
    } else {
        return "високосный";
    }
}

if (isNumber(firstYear) && isNumber(secondYear) && firstYear != "" && secondYear != "") {
    if (firstYear > secondYear || firstYear === secondYear) {
        for (let i = secondYear; i <= firstYear; i++) {
            console.log(i + " год - " + isLeapYear(i));
        }
    } else {
        for (let i = firstYear; i <= secondYear; i++) {
            console.log(i + " год - " + isLeapYear(i));
        }
    }
} else {
    alert("Некорректные данные");
}