let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof(patientId));
console.log(typeof(isEnrolled));
console.log(typeof(patientInfo));
console.log(typeof(firstName));
console.log(typeof(patientEmail));

// O que aconteceria se tentássemos checar qual o tipo da variável patientAge ? 
// Experimente executar o comando console.log(typeof patientAge) e veja o que acontece! Ué...mas não declaramos essa variável, não é mesmo? É exatamente por esse motivo que o seu tipo é undefined , como você pôde observar no retorno do console.log(typeof patientAge) . 
// Experimente também trocar o valor de patientId = 50 para patientId = '50' . 
// Execute novamente um console.log() para imprimir o tipo dessa variável após a modificação. Você verá que o retorno agora é uma string pois colocamos o número 50 dentro das aspas. O JavaScript interpreta como string tudo o que estiver entre aspas.
