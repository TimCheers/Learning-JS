console.log("\n\nTask 3 ->");
/*
Внутри нового метода speakLoudly() у Dog, сначала вызови оригинальный Animal.prototype.speak, а затем добавь:

Собака говорит громко!
Итоговый вывод:

Животное говорит
Собака говорит громко!
*/
Dog.prototype.speakLoudly = function(){
    Animal.prototype.speak.call(this);
    console.log("Собака говорит громко!")
}

barsik.speakLoudly();