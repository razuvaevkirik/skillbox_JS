let number;

getNumberLimits();
askNumber();

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

function getNumberLimits() {
    let min, max;
    min = parseInt(prompt("Введите первое число"));
    max = parseInt(prompt("Введите второе число"));

    if (isNaN(min) || isNaN(max) || min === "" || max === "") {
        alert("Введены некорректные данные. Повторите ввод.");
        getNumberLimits();
    } else {
        if (min > max) {
            let num = min;
            min = max;
            max = num;
        }

        number = getRandomNumber(min, max);
    }
}

function askNumber() {
    let answer = prompt("Введите число");

    if (answer == "" || isNaN(answer)) {
        alert("Введите число!");
        askNumber();
    } else if (answer === null) {
        alert("Игра завершена!");
        return;
    } else if (answer < number) {
        alert("Больше!");
        askNumber();
    } else if (answer > number) {
        alert("Меньше!");
        askNumber();
    } else if (answer === number) {
        alert("Правильно!");
    } 
}