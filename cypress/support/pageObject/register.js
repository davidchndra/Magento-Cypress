class registerPage {
    firstName = "#firstname";
    lastName = "#lastname";
    accountEmail = "#email_address";
    password = "#password";
    confirmPassword = "#password-confirmation";

    inputFirstName(first) {
        cy.get(this.firstName).type(first);
    }

    inputLastName(last) {
        cy.get(this.lastName).type(last);
    }

    inputEmailAccount(account) {
        cy.get(this.accountEmail).type(account);
    }
}

module.exports = new registerPage();