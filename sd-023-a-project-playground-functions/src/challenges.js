/* eslint-disable prefer-template */
/* eslint-disable max-lines-per-function */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable operator-assignment */
// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  area = (base * altura) / 2;

  return area;
}

// Desafio 3
function splitSentence(sentence) {
  arraySentence = sentence.split(' ');
  return arraySentence;
}

// Desafio 4
function concatName(stringArray) {
  nameConcat = stringArray[stringArray.length - 1] + ', ' + stringArray[0];
  return nameConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  points = (wins * 3) + (ties);

  return points;
}

// Desafio 6
function highestCount(numbersArray) {
  let repeatCount = 0;
  let highNumber = numbersArray[0];

  for (let indexCompare = 0; indexCompare < numbersArray.length; indexCompare += 1) {
    for (let indexHigh = 1; indexHigh < numbersArray.length; indexHigh += 1) {
      if (numbersArray[indexHigh] > highNumber) {
        highNumber = numbersArray[indexHigh];
      }
    }
    if (numbersArray[indexCompare] === highNumber) {
      repeatCount = repeatCount + 1;
    }
  }
  return repeatCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gameResult = '';
  if ((Math.abs(mouse - cat1)) === (Math.abs(mouse - cat2))) {
    gameResult = 'os gatos trombam e o rato foge';
  } else if ((Math.abs(mouse - cat1)) < (Math.abs(mouse - cat2))) {
    gameResult = 'cat1';
  } else {
    gameResult = 'cat2';
  }
  return gameResult;
}

// Desafio 8 [2, 15, 7, 9, 45]
// eslint-disable-next-line complexity
function fizzBuzz(arrayNumbers) {
  arrayStrings = [];

  for (let index in arrayNumbers) {
    if (arrayNumbers[index] % 3 == 0 && arrayNumbers[index] % 5 == 0) {
      arrayStrings.push('fizzBuzz');
    } else if (arrayNumbers[index] % 3 == 0) {
      arrayStrings.push('fizz');
    } else if (arrayNumbers[index] % 5 == 0) {
      arrayStrings.push('buzz');
    } else {
      arrayStrings.push('bug!');
    }
  }
  return arrayStrings;
}

// Desafio 9
// eslint-disable-next-line complexity
function encode(string) {
  stringForArray = string.split('');
  stringEncode = '';

  for (let index in stringForArray) {
    if (stringForArray[index] === 'a') {
      stringForArray[index] = '1';
    } else if (stringForArray[index] === 'e') {
      stringForArray[index] = '2';
    } else if (stringForArray[index] === 'i') {
      stringForArray[index] = '3';
    } else if (stringForArray[index] === 'o') {
      stringForArray[index] = '4';
    } else if (stringForArray[index] === 'u') {
      stringForArray[index] = '5';
    }
  }
  stringEncode = stringForArray.join('');
  return stringEncode;
}

// eslint-disable-next-line complexity
function decode(string) {
  let stringForArrayDecode = string.split('');
  let stringDecode;

  for (let index in stringForArrayDecode) {
    if (stringForArrayDecode[index] === '1') {
      stringForArrayDecode[index] = 'a';
    } else if (stringForArrayDecode[index] === '2') {
      stringForArrayDecode[index] = 'e';
    } else if (stringForArrayDecode[index] === '3') {
      stringForArrayDecode[index] = 'i';
    } else if (stringForArrayDecode[index] === '4') {
      stringForArrayDecode[index] = 'o';
    } else if (stringForArrayDecode[index] === '5') {
      stringForArrayDecode[index] = 'u';
    }
  }

  stringDecode = stringForArrayDecode.join('');
  return stringDecode;
}

// Desafio 10
function techList(array, stringName) {
  if (array.length == 0) {
    return 'Vazio!';
  }

  let techArray = [];
  let arraySort = array.sort();

  for (let index = 0; index < array.length; index += 1) {
    techArray.push({
      tech: arraySort[index],
      name: stringName
    })
  }
  return techArray;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
