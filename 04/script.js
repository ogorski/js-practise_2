const createNewUser = () => { // creating new user
    let newUser = {
        set userFirstName(name) { // setting first name of user
            this.firstName = name;
        },
        set userLastName(newValue) { // setting last name of user
            this.lastName = newValue;
        }, 
        getLogin() { // getting user logged
            return (this.firstName[0] + this.lastName).toLowerCase();
        }
    }

    Object.defineProperty(newUser, 'First Name', {
        value: newUser.userFirstName = setFirstName(),
        writable: false,
        configurable: false
    });

    Object.defineProperty(newUser, 'Last Name', {
        value: newUser.userLastName = setLastName(),
        writable: false,
        configurable: false
    });

    return newUser;
};

const setFirstName = () => { // setting your first name
    let firstName = prompt('Please enter your first name');
    while(firstName === '' || firstName == null) {
        firstName.prompt('Try again');
    }
    return firstName;
}

const setLastName = () => { // setting your surname
    let lastName = prompt('Please enter your last name');
    while(lastName === '' || lastName == null) {
        lastName.prompt('Try again');
    }
    return lastName;
}

console.log(createNewUser().getLogin());