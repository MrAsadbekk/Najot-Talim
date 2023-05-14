// function* calculate(a, b) {
//     const sum = a + b;
//     const multiplication = a * b;
//     yield sum;
//     yield multiplication;
//   }

//   const calc = calculate(5, 10);
// console.log(calc.next()); // { value: 15, done: false }
// console.log(calc.next()); // { value: 50, done: false }
// console.log(calc.next()); // { value: undefined, done: true }

// ========================================================================================================================================================

// function* calculateAge(name, yearOfBirth) {
//     const currentYear = new Date().getFullYear();
//     const age = currentYear - yearOfBirth;
//     yield `Assalomu alaykum, ${name}! Sizning yoshingiz ${age}.`;
//     yield `Sizning yoshingiz ${age - 1} yoki ${age} da bo'lishi mumkin.`;
//   }
  
//   const user = {
//     name: 'Ali',
//     yearOfBirth: 1992
//   };
  
//   const age = calculateAge(user.name, user.yearOfBirth);
  
//   console.log(age.next().value); // Assalomu alaykum, Ali! Sizning yoshingiz 28.
//   console.log(age.next().value); // Sizning yoshingiz 27 yoki 28 da bo'lishi mumkin.
//   console.log(age.next().value); // undefined
//   console.log(age.next().done); // true
  
// ========================================================================================================================================================

function* calculateAge(year) {
    const currentYear = new Date().getFullYear();
    let age = 0;
    while (year <= currentYear) {
      yield `Yoshingiz ${age}.`;
      year++;
      age++;
    }
  }
  
  const age = calculateAge(1990);
  
  for (let i = 0; i < 10; i++) {
    console.log(age.next().value);
  }
  
  // ======================================================================================================================================================

  function* numberGenerator(count) {
    let num = 1;
    while (num <= count) {
      yield num;
      num++;
    }
  }
  
  const numbers = numberGenerator(5);
  
  console.log(numbers.next().value); // 1
  console.log(numbers.next().value); // 2
  console.log(numbers.next().value); // 3
  console.log(numbers.next().value); // 4
  console.log(numbers.next().value); // 5
  console.log(numbers.next().done); // true
  console.log(numbers.next().done); // true
  