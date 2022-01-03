// in this function we ask user how old is he/she and what`s his/her name
let nameUser = prompt('What`s your name?', ''); // our variable in which we ask name
let userAge = prompt('How old are you?', ''); // our variable in which we ask age

while (nameUser === ' ') { // our cycle with name
    nameUser = prompt('What`s your name?', nameUser);
}

while (userAge === ' ' || isNaN(userAge) || userAge == null) { // our cycle with age
    userAge = prompt('How old are you?', userAge);
}

if (userAge >= 18) { // condition with age checks
    alert('You are allowed to be here');
    let checks = confirm('Are you sure that you want to continue?');
    if (checks === true) {
        alert(`Welcome, ${nameUser}`);
    } else if (checks == false) {
        alert('Sorry, you are not allowed to be here');
        window.stop();
    }
} else if (userAge < 18) {
    alert('You are not allowed to be here');
    window.stop();
}