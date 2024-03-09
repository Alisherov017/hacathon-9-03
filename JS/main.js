// Задание №1
// Создайте объект в переменной programmer. Дайте объекту имя,
// фамилию, возраст, язык программирования и зарплату. Выведите каждое свойство объекта по очереди в консоль.
let programmer = {
  name: "ali",
  surname: "Sherov",
  age: 18,
  lang: "Java",
  salary: 1500,
};
console.log(programmer.name);
console.log(programmer.surname);
console.log(programmer.age);
console.log(programmer.lang);
console.log(programmer.salary);

// Задание №2  
// Запросите у пользователя ввести два числа и верните ему сумму этих двух чисел.
// Если сумма больше 10 и в то же время меньше 20 то, умножьте на 5. Если же сумма больше 20 и меньше 50, то разделите на 3.
// Иначе прибавьте 10.
// Для решения используйте функции: prompt и parseInt или опертаор +.
// Ответ может быть и десятичным числом, и выведите это конечное число.
// Например:
let firstNum = +prompt("Введите первое число");
let secondNum = +prompt("Введите второе число");
let finall = firstNum + secondNum;
if ( finall > 10 &&  finall < 20) {
   finall =  finall * 5;
} else if ( finall > 20 &&  finall < 50) {
   finall =  finall / 3;
} else {
   finall =  finall + 20;
}
console.log( finall)

// Задание №3
// Вам дан сложный вложенный список. Используя цикл выведите все элементы в виде ключ: значение
// Ввод:
// let aboutUs = [
//   ["name", "Makers"],
//   ["type", "Bootcamp"],
//   ["place", "Bishkek"],
//   ["languages", "JavaScript, Python"],
//   ["simply", "the best!"],
// ];
// Вывод:
// name: Makers
// type: Bootcamp
// place: Bishkek
// languages: JavaScript, Python
// simply: the best!
let aboutUs = [
  ["name", "Makers"],
  ["type", "Bootcamp"],
  ["place", "Bishkek"],
  ["languages", "JavaScript, Python"],
  ["simply", "the best!"],
];

for (let i of aboutUs) {
  console.log(`${i[0]} : ${i[1]}`);
}

// Задание №4
// Есть объект users в котором перечислен
// возраст участников. Напишите код,
// который выведет суммарный возраст
// всех участников. Решите задачу через
// цикл for...in.
let users = {
  John: 28,
  Mark: 30,
  David: 25,
  Richard: 42,
};
let sum = 0;
for (let key in users) {
  sum += +users[key];
}
console.log(sum);

// Задание №5
// Напишите функцию removeElem(arr, element), которая принимает 2 аргумента.
// Первый аргумент- это массив.
// Второй аргумент- это элемент который нужно удалить из массива.
// Пример: let arr = [2, ‘hello’, true,  ‘world’,  5, ‘js’]
//     removeElem(arr,’world’)
// Ответ: [2, ‘hello’, true,  5, ‘js’]
let removeElem = (arr, element) => {
  let res = arr.filter((item) => item !== element);
  console.log(res);
};
let arr = [2, "hello", true, "world", 5, "js"];
removeElem(arr, "world");

// Задание №6
// Создайте функцию-замыкание, которая возвращает анонимную функцию и высчитывает сумму аргументов возвращаемой функции с аргументом главной функции, то есть нужно посчитать сумму аргументов родительской функции и дочерней функции.
function foo(a) {
  return function (b) {
    return a + b;
  };
}
const res = foo(3)(4);
console.log(res);

// Задание №7
// Дан лимит = 1000, напишите функцию, которая будет выводить в консоль удвоенное значение аргумента до тех пор, пока оно не достигнет лимита, и после этого вывести в консоль аргументы в обратном порядке

// Например:

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50
function functionLimit(value) {
  const limit = 1000;
  let curValue = value;
  while (curValue <= limit) {
    console.log(curValue);
    curValue *= 2;
  }

  curValue /= 2;
  while (curValue >= value) {
    console.log(curValue);
    curValue /= 2;
  }
}
functionLimit(50);

// Задание №8
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// Используйте метод filter()
let diff = ["ali", "surname", "sh", "alisherov"];
let res2 = diff.filter((item) => item.length > 5);
console.log(res2);

// Задание №9
// Дан массив
// let task2 = [10, 25, 25, 15, 5, 10];
// Выведите в alert сумму элементов
// этого массива.
// Используйте метод .forEach()
let task2 = [10, 25, 25, 15, 5, 10];
let sum2 = 0;
task2.forEach((item) => (res32 = sum2 += item));
alert(res32);

// Задание №10
// 	Напишите функцию, определяющую
// максимальное количество повторяющихся
//  элементов в массиве.
// Массив для примера:
function checkMax(arr) {
  let iter = {};
  arr.forEach((num) => {
    iter[num] = (iter[num] || 0) + 1;
  });

  let maxFrequency = 0;

  for (let num in iter) {
    if (iter[num] > maxFrequency) {
      maxFrequency = iter[num];
    }
  }
  console.log(maxFrequency);
}
let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];
checkMax(task5);

// Задание №11
// Дан массив nums = [8,1,2,2,3]
// Напишите функцию, которая будет возвращать массив, в котором указано сколько есть чисел в массиве меньше, чем каждый элемент массива.
// Используйте метод map()
// Пример №1:
// Ввод: nums = [8,1,2,2,3]
// Вывод: [4,0,1,1,3]
// 4 элемента меньше чем 8
// 0 элементов меньше чем 1
// 1 элемент меньше чем 2
// 1 элемент меньше чем 2
// 3 элемента меньше чем 3

function countNum(nums) {
  return nums.map((item, index, array) => {
    return array.filter((nums) => nums < item).length;
  });
}
let num = [8, 1, 2, 2, 3];
console.log(countNum(num));

// Задание №12
// Вам нужно поменять местами значения
// переменных при помощи деструктуризации.
// let a = 0;
// let b = 1;
// Пример результата:
// console.log(a, b); // 1, 0
let a = 0;
let b = 1;
[a, b] = [b, a];
console.log(a, b);

// Задание №13
// Дан объект { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true}.
// Деструктуризуйте все свойства и элементы данного объекта, включая вложенные объекты и массивы и выведите в консоли.
let home = {
  size: { width: 100, height: 200 },
  items: ["Cake", "Donut"],
  extra: true,
};
let {
  size: { width, height },
  items: [Cake, Donut],
  extra,
} = home;

console.log("width:", width);
console.log("height:", height);
console.log("Cake:", Cake);
console.log("Donut:", Donut);
console.log("extra:", extra);

// Задание №14
// Необходимо создать объект, который будет
// представлять из себя лифт. У него
// должны быть методы:
// ● printFloor - печатает текущий этаж, на котором
// находится лифт
// ● upOneFloor - перемещает на один этаж вверх
// ● downOneFloor - перемещает на один этаж вниз
// ● toFloor - принимает целое числовое
// значение от 1 до 16 - переместиться на
// определенный этаж.
// Изначально лифт находится на первом этаже.
// Когда мы вызываем метод toFloor(),
// программа должна в консоли отобразить
// постепенное перемещение лифта на нужный этаж
// (только в этом методе).
// ● Лифт должен хранить текущий этаж, на котором он находится.
// ● Для наглядности, вызовите метод toFloor несколько раз в программе.
// ● Метод toFloor должен использовать методы oneFloorUp и oneFloorDown для
// перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.
// ● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа.

let checkTask = {
  curFloor: 1,
  printFloor: function () {
    console.log(this.curFloor);
  },
  upOneFloor: function () {
    if (this.curFloor < 16) {
      this.curFloor++;
    } else {
      console.log("error");
    }
  },
  downOneFloor: function () {
    if (this.curFloor > 1) {
      this.curFloor--;
    } else {
      console.log("error");
    }
  },
  toFloor: function (floor) {
    if (floor >= 1 && floor <= 16) {
      while (this.curFloor < floor) {
        this.upOneFloor();
        this.printFloor();
      }
      while (this.curFloor > floor) {
        this.downOneFloor();
        this.printFloor();
      }
    } else {
      console.log("error");
    }
  },
};
checkTask.upOneFloor();
checkTask.printFloor();
checkTask.downOneFloor();
checkTask.printFloor();
