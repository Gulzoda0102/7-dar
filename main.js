// const ism ="Gulzoda";
// console.log(typeof ism);
// log(ism.split(""));

// const ism = ["Gulzoda"];
// console.log(typeof ism);
// console.log(ism.join(""));
// const result = ism.reverse()

// const ism = ["Gulzoda" , "Sitora", "Safina"];
// console.log(ism,reverse());


// const ism = prompt("Ismingizni kiriting");

// if (ism ==""){
//     alert("Please enter your name")
// }else{
//     console.log(ism.split("").reverse ("") .join(""));
// }

















const fruits = ["Olma", "Banan", "Gilos", "Shaftoli"];

alert("Arrayning uzunligi: " + fruits.length);
console.log(fruits);

const look = confirm("Sizning arrayingizdan ma'lumotlarni olib tashlamoqchimiz");
if (look) {
    fruits.pop();
    
    alert("Arrayning uzunligi: " + fruits.length);
    console.log(fruits);
}
