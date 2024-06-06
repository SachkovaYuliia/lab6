// 4. З об'єкту concerts отримати масив, який буде містити лише імена міст.З масиву потрібно прибрати міста, в яких концерт  уже пройшов і   відсортувати їх у хронологічному порядку.Результат вивести у консоль.
// Очікуваний результат ["Одеса", "Умань", "Харків"]
// Застосувати стрілочні функції
// const concerts = {
//   Київ: new Date("2020-04-01"),
//   Умань: new Date("2025-07-02"),
//   Вінниця: new Date("2020-04-21"),
//   Одеса: new Date("2025-03-15"),
//   Хмельницький: new Date("2020-04-18"),
//   Харків: new Date("2025-07-10"),
// };

const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

const currentDate = new Date();
const cities = [];
const filteredCities = Object.keys(concerts)
    .filter(city => concerts[city] >= currentDate)
    .sort((a, b) => concerts[a] - concerts[b]);

console.log(filteredCities);
document.getElementById('filteredCities').innerHTML = filteredCities;

