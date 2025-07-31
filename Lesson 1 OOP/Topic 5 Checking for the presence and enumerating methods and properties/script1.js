const car ={
    brand: "BMW",
    year: 1999,
    drive(){
        console.log("Driving");
    }
};
console.log("Task 1 ->");
console.log(structuredClone("brand" in car));
console.log(structuredClone("drive" in car));
console.log(structuredClone("color" in car));