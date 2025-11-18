// ДЗ

//1 Отображение названий продуктов
// Получите все продукты и вывести их названия на консоль.

//2 ОБНОВЛЕНИЕ инвентаря
// Напишите функцию updateInventory(product, amount),
// которая обновляет количество определенного ID товара.
// СУММА может быть положительной (добавление к инвентарю)
// или отрицательной (вычитание из инвентаря).
// УБЕДИТЕСЬ, что функция не позволяет инвентарю опуститься ниже 0.

//3 Поиск товаров с низким запасом (было сказано решить задачу с массивом 'students')
// Напишите функцию findLowStock(threshold), которая возвращает массив
// названий товаров, количество которых ниже определенного порога.
// ИСПОЛЬЗУЙТЕ Object.entries() для работы с идентификатором и данными каждого товара.

//4 ВЫЧИСЛИТЬ общую стоимость запасов
// Напишите функцию totalInventoryValue(),
// которая вычисляет и возвращает общую стоимость запасов.
// УМНОЖЬТЕ цену каждого товара на его количество и сложите эти значения.

// РЕШЕНИЕ ЗАДАЧ

let inventory = [
  { id: 1, name: "Apple", price: 0.5, quantity: 200 },
  { id: 2, name: "Banana", price: 0.3, quantity: 150 },
  { id: 3, name: "Cherry", price: 0.9, quantity: 50 },
];

//1 Отображение названий продуктов
// Получите все продукты и вывести их названия на консоль.

// Решение 1 задачи

// const inventoryName = inventory.map(el => el.name)
// console.log(`Продукты на складе: ${inventoryName}`);

//2 ОБНОВЛЕНИЕ инвентаря
// Напишите функцию updateInventory(product, amount),
// которая обновляет количество определенного ID товара.
// СУММА может быть положительной (добавление к инвентарю)
// или отрицательной (вычитание из инвентаря).
// УБЕДИТЕСЬ, что функция не позволяет инвентарю опуститься ниже 0.

// Решение 2 задачи

// function updateInventory(product, amount) {
//   const item = inventory.find((el) => el.id === product);
//   if (item) {
//     item.quantity = Math.max(item.quantity + amount, 0);
//   }
// }
// updateInventory(3, -60);
// console.log(inventory);

//4 ВЫЧИСЛИТЬ общую стоимость запасов
// Напишите функцию totalInventoryValue(),
// которая вычисляет и возвращает общую стоимость запасов.
// УМНОЖЬТЕ цену каждого товара на его количество и сложите эти значения.

// Решение 4 задачи

// function totalInventoryValue(items) {
//     return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
// }

// console.log(totalInventoryValue(inventory));

// 3

// У тебя есть объект, в котором ключи — имена студентов, а значения —
//  ещё один объект с их предметами и оценками. Нужно написать функцию
//  getTopStudent(subject, studentsObj), которая вернёт имя студента с
//  самой высокой оценкой по указанному предмету (если таких несколько — любого из них).

const students = {
  Alice: { math: 92, physics: 87, literature: 81 },
  Bob: { math: 75, physics: 90, literature: 88 },
  Charlie: { math: 92, physics: 93, literature: 85 },
  Diana: { math: 89, physics: 91, literature: 90 },
};

// // Решение 3 задачи с использование Object.entries

// function getTopStudent(subject, studentsObj) {
//   let topStudent = null;
//   let topScore = -Infinity;

//   for (const [studentName, grades] of Object.entries(studentsObj)) {
//     if (grades[subject] !== undefined && grades[subject] > topScore) {
//       topScore = grades[subject];
//       topStudent = studentName;
//     }
//   }

//   return console.log(topStudent);
// }

// getTopStudent("physics", students); // → 'Charlie'
// getTopStudent("literature", students); // → 'Diana' или 'Bob' (оба по 90)
// getTopStudent("biology", students); // → null
