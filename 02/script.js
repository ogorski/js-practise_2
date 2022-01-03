let num = prompt('Enter some number here:', '');

while(num === ' ' || isNaN(num) || num == null || (num % 1 !== 0)) {
    num = prompt('You entered wrong number, please enter another number: ', num);
}

let enteredNum = +num,
    resultNum = [];

for (let i = 0; i <= enteredNum; i++) {
    if (i % 5 === 0 && !i == 0) {
        resultNum.push(i);
    }
}

if (resultNum && resultNum.length) {
    console.log(String(resultNum));
} else {
    console.log('Sorry, there is no numbers :(');
}