/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
/* eslint-disable quotes */
// Desafio 11
function generatePhoneNumber(elevenNumbers) {
  if (elevenNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index in elevenNumbers) {
    if (elevenNumbers[index] > 9 || elevenNumbers[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }

  let currentCount = 1;
  
  for (let index = 0; index < elevenNumbers.length; index += 1) {
    for (let indexCompare = 1; indexCompare < elevenNumbers.length; indexCompare += 1) {
     if (elevenNumbers[index] === elevenNumbers[indexCompare]) {
       currentCount = currentCount + 1;
     }
    }
    if (currentCount >= 3) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
    currentCount = 0;
  }

  return `(${elevenNumbers[0]}${elevenNumbers[1]}) ${elevenNumbers[2]}${elevenNumbers[3]}${elevenNumbers[4]}${elevenNumbers[5]}${elevenNumbers[6]}-${elevenNumbers[7]}${elevenNumbers[8]}${elevenNumbers[9]}${elevenNumbers[10]}`
}

// Desafio 12
function triangleCheck(edgeA, edgeB, EdgeC) {
  let sumEdges = edgeA + edgeB + EdgeC;
  triangle = false;

  if (edgeA < sumEdges - edgeA && edgeB < sumEdges - edgeB && EdgeC < sumEdges - EdgeC) {
      triangle = true;
    }
    return triangle
  }

// Desafio 13
function hydrate(drinkRequest) {
  let reg = /\d+/g;
  let necessitiesArray = drinkRequest.match(reg);
  let watterSuggestion = 0;

  for (let index in necessitiesArray) {
    watterSuggestion = watterSuggestion + parseInt(necessitiesArray[index])
  }
  if (watterSuggestion === 1) {
    return `${watterSuggestion} copo de água`
  }
  return `${watterSuggestion} copos de água`
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
