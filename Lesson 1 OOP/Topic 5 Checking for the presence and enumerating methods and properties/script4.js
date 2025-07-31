console.log("\n\nTask 4 ->");
for(const [key, value] of Object.entries(car)){ 
    if(typeof value === "function"){
        console.log("Функция: ", key)
    }
    else{
        console.log("Обычное свойство: ", key)
    }
}