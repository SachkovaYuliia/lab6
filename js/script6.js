// 6.Напишіть функцію, яка приймає массив об'єктів і повертає новий массив об'єктів, у якому є знижка на  30 % на всі медикаменти ціна, яких перевищує 300 грн у масиві Надайте ід для кожного медикамента    

const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 }
]

function getnewMedicine(arr) {
    const newMedicine = [];
    let id = 1;

    arr.forEach(item => {
        if (item.price > 300) {
            const discount = 0.3 * item.price;
            newPrice = item.price - discount;}
        else {
            newPrice = item.price;
            }
            const newMedicineItem = {
                id: id++,
                name: item.name,
                price: item.price,
                discountPrice: newPrice
            };

            newMedicine.push(newMedicineItem);
        });
    return newMedicine;
}

const newMedicine = getnewMedicine(medicines);
console.log(newMedicine);

const newMedicineContainer = document.getElementById('newMedicine');
newMedicine.forEach(item => {
    const medicineElement = document.createElement('div');
    medicineElement.textContent = `ID: ${item.id}, Назва: ${item.name}, Ціна: ${item.price}, Ціна зі знижкою: ${item.discountPrice}`;
    newMedicineContainer.appendChild(medicineElement);
});


