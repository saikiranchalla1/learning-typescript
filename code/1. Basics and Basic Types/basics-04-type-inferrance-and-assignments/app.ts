function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// const number1 = 5;
// let number1 = 5;
let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;

//resultPhrase = 'Result is: ';
let resultPhrase = 'Result is: ';
// resultPhrase = 10; <- throws error

add(number1, number2, printResult, resultPhrase);
