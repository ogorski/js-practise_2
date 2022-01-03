const getNums = () => { // you must get a certain numbers
    let nums = [];

    for (let i = 0; i < 2; i++) {
        nums[i] = prompt('Choose a number');
        while (nums[i] === '' || isNaN(nums[i]) || nums[i] == null) {
            nums[i] = prompt('Wrong! You must choose a number', nums);
        }
    }

    return nums;
}

const getOperation = () => { // you must choose a certian arithmetic operation
    let operation = prompt('You now must choose a certain arithmetic operation');
    while (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
        operation = prompt('Please, choose a arithmetic operation');
    }
    return operation;
}

const getResult = (dataNums, operation) => { // you will get a certain result due your numbers and arithmetic operation you choosed
    let showResult = dataNums;
    showResult.splice(1, 0, operation);
    return eval(showResult.join(' '));
}

console.log(getResult(getNums(), getOperation()));