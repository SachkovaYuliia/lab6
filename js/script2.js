// 2. Напишіть функцію getProductDetails, яка приймає ідентифікатор товару productId та дві колбек-функції successCallback та errorCallback.Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у successCallback. У випадку якщо товар не знайдено, викликається errorCallback і передається повідомлення про помилку.   

let products = [
    {
        id: 273,
        name: "Apple iPhone 15 Pro Max 256GB Natural Titanium",
        price: 55000,
        description: "Викувано з титану й оснащено революційним чипом A17 Pro, кнопкою дії з можливістю налаштування та ще універсальнішою системою камер Pro"
    },
    {
        id: 274,
        name: "Apple iPhone 15 Pro Max 128GB Natural Titanium",
        price: 50000,
        description: "Викувано з титану й оснащено революційним чипом A17 Pro, кнопкою дії з можливістю налаштування та ще універсальнішою системою камер Pro"
    },
    {
        id: 275,
        name: "Apple iPhone 14 Pro Max 256GB Natural Titanium",
        price: 45000,
        description: "Викувано з титану й оснащено революційним чипом A17 Pro, кнопкою дії з можливістю налаштування та ще універсальнішою системою камер Pro"
    }
];

function getProductDetails(arr, productId, successCallback, errorCallback) {
    let found = false;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].id === productId) {
            found = true;
            successCallback(arr[i]);
            break; 
        }
    }
    if (!found) {
        errorCallback();
    }
}

function successCallback(product) {
    let productDetails = `
    <strong>ID:</strong> ${product.id}<br>
    <strong>Назва:</strong> ${product.name}<br>
    <strong>Ціна:</strong> ${product.price}<br>
    <strong>Опис:</strong> ${product.description}<br>
    `;
    document.getElementById('productDetails').innerHTML = productDetails;
}

function errorCallback() {
    document.getElementById('productDetails').innerHTML = "Такий товар не знайдено";
}

getProductDetails(products, 275, successCallback, errorCallback);


