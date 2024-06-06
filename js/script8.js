// 8. Напиши функцію конструктор Storage який створює об'єкти  Для управління складом товарів.  При виклику отримуватиме один агрумент - початковий масив товарів,  і записувати їх у властивість items. 
// Додай методи класу:   getItems() - повертайте масив товарів   addItems(item) - отримує новий товар та додає його до поточних   removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних 

const arr = ["apple", "banana", "mango"];

class Storage {
    constructor(storageItems) {
        this.items = storageItems;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}


const storage = new Storage(arr);
console.log(storage.getItems()); 
document.getElementById('StorageItems1').innerHTML = storage.getItems();

storage.addItem("orange");
console.log(storage.getItems()); 
document.getElementById('StorageItems2').innerHTML = storage.getItems();

storage.removeItem("banana");
document.getElementById('StorageItems3').innerHTML = storage.getItems();