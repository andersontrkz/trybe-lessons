//Mostra as marcas de carros presentes em um Array:
let car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

for (let i in car) {
  console.log(i, car[i]);
}