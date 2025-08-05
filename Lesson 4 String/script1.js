console.log("🟩 Task 1.1: Длина строки");
// Создай строку и выведи её длину
const str1 = "Hello";
console.log(str1.length);


console.log("🟩 Task 1.2: Повторение строки");
// Создай строку и повтори её 3 раза
console.log(str1.repeat(3));


console.log("🟩 Task 1.3: Поиск в строке");
// Проверь, содержится ли подстрока 'cat' в строке 'concatenation'
// Найди индекс первого вхождения 'a'
// Найди индекс последнего вхождения 'n'
const str2 = "concatenation";
console.log(str2.includes("cat"));
console.log(str2.indexOf("a"));
console.log(str2.lastIndexOf("n"));


console.log("🟩 Task 1.4: Получение подстроки");
// Получи подстроку из строки 'JavaScript' от индекса 4 до конца
// Получи первые 4 символа
// Получи последний символ
const str3 = "JavaScript";
console.log(str3.slice(4));
console.log(str3.substring(0, 4));
console.log(str3.slice(str3.length - 1));


console.log("🟩 Task 1.5: Управление регистром");
// Преобразуй строку 'LoWeR' в верхний и нижний регистр
const str4 = "LoWeR";
console.log(str4.toLocaleLowerCase());


console.log("🟩 Task 1.6: Символ по индексу");
// Выведи третий символ строки 'Access'
const str5 = "Access";
console.log(str5.charAt(3));


console.log("🟩 Task 1.7: Удаление пробелов");
// Удали пробелы в начале и конце строки '   padded string   '
const str6 = "   padded string   ";
console.log(str6.trim());


console.log("🟩 Task 1.8: Объединение строк");
// Объедини строки 'Hello' и 'World' через пробел
const str7 = "Hello";
const str8 = "World";
console.log(str7.concat(str8));


console.log("🟩 Task 1.9: Замена подстроки");
// Замени 'bad' на 'good' в строке 'That is bad'
const str9 = "This is bad";
console.log(str9.replace("bad", "good"));


console.log("🟩 Task 1.10: Разделение строки");
// Раздели строку 'one,two,three' на массив
const str10 = "one,two,three";
const str101 = str10.split(",");
console.log(str101);


console.log("🟩 Task 1.11: Проверка начала и конца строки");
// Проверь, начинается ли строка 'JavaScript' с 'Java'
// Проверить, заканчивается ли она на 'Script'
const str11 = "JavaScript";
console.log(str11.startsWith("Java"));
console.log(str11.endsWith("Script"));


console.log("🟩 Task 1.12: Заполнение строки");
// Заполни строку '5' нулями слева до длины 4 → '0005'
let str12 = "5".padStart(4, "0");
console.log(str12);


console.log("🟩 Task 2.1: HTML в шаблонной строке");
// Создай переменные title и content
// Выведи HTML с использованием шаблонной строки
// Код в index.html


console.log("🟩 Task 2.2: Вложенные шаблоны");
// Создай функцию, возвращающую строку с именем и возрастом
function userInfo(name, age) {
    return `${name} (${age} лет)`;
}
const fullInfo = `Пользователь: ${userInfo("Тим", 25)}`;
console.log(fullInfo);



console.log("🟩 Task 2.3: Тег-функции");
// Создай тег-функцию highlight, которая выделяет переменные
// Используй её с шаблонной строкой
// Что значит "Выделяет переменные"?


console.log("🟩 Task 3.1: Проверка RegExp");
// Проверь, содержит ли строка 'apple123' цифры с помощью RegExp и test()
const str13 = "apple123";
const exp = /[0-9]/;
console.log(exp.test(str13));


console.log("🟩 Task 3.2: Гласные через RegExp");
// Найди все гласные в строке 'education'
//не знаю как делать 


console.log("🟩 Task 4.1: Классы символов");
// Создай регулярку для поиска всех цифр
const reg = /\d/;


console.log("🟩 Task 4.2: Метасимволы");
// Найди любые символы между двумя буквами
const reg1 = /\w/;


console.log("🟩 Task 4.3: Ограничение — начало строки");
// Найди слово 'cat' только в начале строки
const reg2 = /^cat/;


console.log("🟩 Task 4.4: Флаги");
// Создай регулярку, ищущую 'js', игнорируя регистр
const reg3 = /js/i;


console.log("🟩 Task 5.1: Необязательные символы");
// Найди 'color' и 'colour' в строке
const reg4 = /colou?r/;


console.log("🟩 Task 5.2: Повторение символов");
// Найди последовательности из одной или более 'a' в строке 'baaaad'
const reg5 = /a*/;


console.log("🟩 Task 5.3: Один или более");
// Найди все блоки цифр длиной от 1 символа
const reg6 = /\d+/;


console.log("🟩 Task 5.4: Точное количество повторений");
// Найди слова из ровно 4 букв в строке 'this test will pass'
const reg7 = /^[a-zA-Z]{4}$/;


console.log("🟩 Task 5.5: Минимум повторений");
// Найди слова из 2 и более букв
const reg8 = /^[a-zA-Z]{2,}$/;


console.log("🟩 Task 5.6: Минимум и максимум");
// Найди слова от 2 до 5 букв
const reg9 = /^[a-zA-Z]{2,5}$/;


console.log("🟩 Task 6.1: Метод match()");
// Используй .match() для поиска всех цифр в строке
const str14 = "dsa;lgkj03w42r23r";
reg12 = /\d/;
const res = str14.match(reg12);


console.log("🟩 Task 7.1: Группы в RegExp");
// Найди повторяющиеся слова типа 'hello hello'
// не знаю как делать 


console.log("🟩 Task 7.2: Именованные группы");
// Извлеки год, месяц, день из строки '2025-08-05'
const reg10 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;


console.log("🟩 Task 7.3: Отрицательное утверждение");
// Найди слова, не начинающиеся с заглавной буквы
const reg11 = /(?<=[A-Z])\w/;

//Дальше не знаю, прошу помочь 
console.log("🟩 Task 8.1: match и заглавные слова");
// Используй .match() для поиска слов из заглавных букв



console.log("🟩 Task 8.2: split и регулярка");
// Раздели строку по запятой с помощью регулярного выражения

console.log("🟩 Task 8.3: search и RegExp");
// Найди индекс первой цифры в строке 'abc123'

console.log("🟩 Task 8.4: replace и пробелы");
// Замени пробелы на '-' в строке 'this is a test'
