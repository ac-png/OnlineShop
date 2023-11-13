class Account {
    // private properties
    #password;

    // constructor
    constructor(_password, _firstName, _lastName) {
        this.#password = _password;
        this.firstName = _firstName;
        this.lastName = _lastName;
    }

    // getters and setters
    get password() {
        return this.#password;
    }

    // gets full name of account
    getFullame() {
        return `
        First Name: ${this.firstName}
        Last Name: ${this.lastName}
        `
    }
}

export default Account;