// faça uma função que verifica se a primeira letra de uma string é maiuscula, retorne true ou false

// Exemplo de saida:
// checkIfTheFirstLetterIsUppercase("Brasil") --> true
// checkIfTheFirstLetterIsUppercase("mobiauto") --> false
// checkIfTheFirstLetterIsUppercase("xXx xXx") --> false
// checkIfTheFirstLetterIsUppercase("xDD") --> false
// checkIfTheFirstLetterIsUppercase("Deu Certo!") --> true

function checkIfTheFirstLetterIsUppercase(word) {
  const isUpper = () => /[A-Z]/.test(word[0]);

  return isUpper(word);
}

module.exports = checkIfTheFirstLetterIsUppercase;
