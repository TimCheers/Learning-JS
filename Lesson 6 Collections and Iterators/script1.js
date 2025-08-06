console.log("🟩 Task 1.1: Итераторы: получение итератора");
// Вход: массив [10, 20, 30]
// Получи итератор этого массива через метод Symbol.iterator
const nums = [10, 20, 30];
console.log(nums[Symbol.iterator]());


console.log("🟩 Task 1.2: Метод next()");
// Вызови итератор.next() несколько раз и выведи значения
const iter = nums[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


console.log("🟩 Task 1.3: Свой итератор");
// Создай объект range с полями from = 1, to = 4
// Реализуй в нём Symbol.iterator вручную
const range = {
  from: 1,
  to: 4,
  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (const num of range) {
  console.log(num);
}


console.log("🟩 Task 1.4: Итерируемый объект");
// Создай объект, итерируемый по буквам своего свойства text = "JS"
const param = {
    index: 0,
    text: "JS",
    [Symbol.iterator]() {
        return {
            next() {
                var i = this.index;
                if (i != this.text.length) {
                    i++;
                    return { value: this.text[i - 1], done: false }
                };
                return { done: true };
            }
        };
    }
};


console.log("🟩 Task 2.1: Генератор");
// Напиши генератор, возвращающий 3 значения: "one", "two", "three"
// Получи значения через .next()
function* gena() {
    yield "one";
    yield "two";
    yield "three";
    return "end";
}
const numGen = gena();
console.log(numGen.next());
console.log(numGen.next());
console.log(numGen.next());


console.log("🟩 Task 2.2: return в генераторе");
// Добавь return "end" в генератор
// Проверь, что произойдёт при завершении
console.log(numGen.next());


console.log("🟩 Task 2.3: Генератор в цикле");
// Пройди по значениям генератора в for..of
const numGen2 = gena();
for (const num of numGen2) {
    console.log(num);
}


console.log("🟩 Task 2.4: Передача данных в генератор");
// Создай генератор с yield и передай значения через next()
function* gen() {
  const first = yield "Введите имя";
  console.log("Имя:", first);
}
const g = gen();
console.log(g.next());
console.log(g.next("Tim"));


console.log("🟩 Task 2.5: Обработка ошибок генератора");
// В генераторе используй try..catch
// Извне вызови .throw() с ошибкой
function* generateData() {
    try {
        yield "Tom";
        yield "Bob";
        yield "Hello Work";
    }
    catch (error) {
        console.log("Error:", error);
    }
}
const personGenerator = generateData();
console.log(personGenerator.next());
personGenerator.throw("Something wrong");
console.log(personGenerator.next());



console.log("🟩 Task 3.1: Set: создание и размер");
// Создай Set из массива [1, 2, 3, 1, 2, 4]
// Выведи размер множества
const arr = new Set([1, 2, 3, 1, 2, 4]);
console.log(arr);


console.log("🟩 Task 3.2: Set: добавление и удаление");
// Добавь число 5, потом удали 2
arr.add(5);
arr.delete(2);
console.log(arr);


console.log("🟩 Task 3.3: Set: проверка наличия");
// Проверь наличие элементов 3 и 10
console.log(arr.has(3));
console.log(arr.has(10));


console.log("🟩 Task 3.4: Set: перебор множества");
// Перебери множество с помощью for..of
for (n of arr) {
    console.log(n);
}


console.log("🟩 Task 3.5: Set: итератор");
// Получи итератор Set и используй его вручную
const setIter = arr.values();
console.log(setIter.next());
console.log(setIter.next());
console.log(setIter.next());
console.log(setIter.next());


console.log("🟩 Task 3.6: Удаление дубликатов из массива");
// Вход: массив ["a", "b", "a", "c", "b"]
// Удали повторы с помощью Set
const rArr = ["a", "b", "a", "c", "b"];
const newSet = new Set(rArr);
const newArr = Array.from(newSet);
console.log(newArr);


console.log("🟩 Task 4.1: Map: создание и размер");
// Создай Map и добавь пары: "name" → "Tim", "age" → 30
// Выведи размер Map
const userMap = new Map([["name", "Tim"], ["age", 30]]);
console.log(userMap);


console.log("🟩 Task 4.2: Map: добавление и изменение");
// Измени значение ключа "age" на 31
userMap.set("age", 31);
console.log(userMap);


console.log("🟩 Task 4.3: Map: получение и удаление");
// Получи значение по ключу "name", затем удали ключ "age"
console.log(userMap.get("name"));
userMap.delete("age");
console.log(userMap);


console.log("🟩 Task 4.4: Map: перебор");
// Перебери Map с помощью for..of, выведи пары ключ-значение
for (item of userMap) {
    console.log(`${item[0]} - ${item[1]}`);
}


console.log("🟩 Task 5.1: WeakSet");
// Создай WeakSet и добавь в него объект user = { name: "Alice" }
var user = {
    name: "Alice"
}
const weakSet1 = new WeakSet();
weakSet1.add(user);
console.log(weakSet1);


console.log("🟩 Task 5.2: WeakSet и GC");
// Удали ссылку на user, проверь вручную, останется ли в WeakSet
user = undefined;
console.log(weakSet1);


console.log("🟩 Task 6.1: WeakMap");
// Создай WeakMap и добавь в него ключом объект user = { id: 1 }
var user1 = {
    name: "Tim"
}
var userId1 = {
    id: 1
}
const weakMap1 = new WeakMap();
weakMap1.set(userId1, user1);
console.log(weakMap1);


console.log("🟩 Task 6.2: WeakMap и GC");
// Удали ссылку на объект user, проверь вручную, останется ли в WeakMap
user1 = undefined;
userId1 = undefined;
console.log(weakMap1);