var data = new Date();
var dataNova = new Date("March 10, 2018");

console.log(data);
console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());

console.log(dataNova);
console.log(Date.parse(dataNova));
console.log(dataNova.getDate());
console.log(dataNova.getMonth());
console.log(dataNova.getFullYear());

console.log(
  data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear(),
);
