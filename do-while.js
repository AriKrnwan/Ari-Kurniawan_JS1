const angkaRandom = Math.floor(Math.random() * 10) + 1;
let tebakan;
let input;

do {
  input = prompt("Masukkan angka positif:");
} while (isNaN(input) || parseFloat(input) <= 0);

console.log("Anda memasukkan angka positif yang valid: " + input);

