const createNewUser = () => { // creating new user
    let newUser = {
        set userFirstName(name) { // setting first name of user
            this.firstName = name;
        },
        set userLastName(newValue) { // setting last name of user
            this.lastName = newValue;
        },
        set birthdayUser(birthId) {
            this.birthday = birthId;
        },
        getLogin() { // getting user logged
            return (this.firstName[0] + this.lastName).toLowerCase();
        },
        getUserAge() { // getting information of user`s age
            let dayOfBirthday = Number(this.birthday.substring(0, 2));
            let monthOfBirthday = Number(this.birthday.substring(3, 5));
            let yearOfBirthday = Number(this.birthday.substring(6, 10));
            let birthdayDate = Date(yearOfBirthday, monthOfBirthday - 1, dayOfBirthday);
            let nowDate = new Date;
            let age = nowDate.getFullYear() - birthdayDate.getFullYear();
            let monthAge = nowDate.getMonth() - birthdayDate.getMonth();
            if (monthAge < 0 || (monthAge === 0 && nowDate.getDate() < birthdayDate.getDate())) {
                age = age - 1;
            }
        },
        getPassword() {
            return this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthday.substring(6, 10);
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

    newUser.birthdayUser = setBirthdayUser();
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

const setBirthdayUser = () => { // setting your birthday
    let birthdayUser = prompt('Please enter your birthday date: ');
    while(birthdayUser === '' || birthdayUser == null) {
        birthdayUser = prompt('Try again please');
    }
    return birthdayUser;
}

console.log(createNewUser().getPassword());
console.log(createNewUser().getUserAge());
console.log(createNewUser().getLogin());