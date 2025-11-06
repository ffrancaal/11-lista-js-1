/**** Escreva o código abaixo 👇******/

// Questão 1
function somar(a, b) {
  return a + b;
}

//Questão 4
function dividir(c, d) {
  if (d === 0) {
    throw new Error("Erro: divisão por zero");
  }
  return c/ d;
}

// Questão 7
function calcularAreaRetangulo(largura, altura) {
  return largura * altura;
}

//Questão 8
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "ímpar";
  }
}

//Questão 9
function calcularRaizQuadrada(numero) {
  return Math.sqrt(numero);}

/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
