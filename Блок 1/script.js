let name = prompt("Имя?");
let surname = prompt("Фамилия?");
let yearOfBirth = prompt("Год рождения?");
let currentYear = 2020;
let age = currentYear - yearOfBirth;

if (age < 20) {
    alert("Привет, " + age + "-летний " + name + " " + surname + "!");
} else if (age > 20 && age < 40) {
    alert("Добрый день, " + age + "-летний " + name + " " + surname + "!");
} else {
    alert("Здравствуйте, " + age + "-летний " + name + " " + surname + "!");
}