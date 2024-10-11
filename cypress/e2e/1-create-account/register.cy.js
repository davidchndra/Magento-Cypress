const registerData = require("../../fixtures/register-data.json");
const registerPage = require("../../support/pageObject/register");

describe("Create An Account", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("TC001 Successfully create an account", () => {
        cy.visit("/customer/account/create/");
        registerPage.inputFirstName(registerData.registerArray[0].firstName);
        registerPage.inputLastName(registerData.registerArray[0].lastName);
        registerPage.inputEmailAccount(registerData.registerArray[0].accountEmail);
        cy.get('#password').click().type("Davidtak123");
        cy.get("#password-confirmation").click().type("Davidtak123");
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();

        cy.get('.message-success').should("be.visible");
        cy.get('.message-success').should("contain.text", "Thank you for registering with Main Website Store.");
    });

    it("TC002 Create an account with no uppercase password", () => {
        cy.visit("/customer/account/create/");
        registerPage.inputFirstName(registerData.registerArray[1].firstName);
        registerPage.inputLastName(registerData.registerArray[1].lastName);
        registerPage.inputEmailAccount(registerData.registerArray[1].accountEmail);
        cy.get('#password').click().type("davidtak123");
        cy.get("#password-confirmation").click().type("davidtak123");

        cy.get('.mage-error').should("be.visible");
        cy.get('.mage-error').should("contain.text", "This is a required field.This is a required field.Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.This is a required field.");
    });

    it("TC003 Create an account with no special characters on password", () => {
        cy.visit("/customer/account/create/");
        registerPage.inputFirstName(registerData.registerArray[2].firstName);
        registerPage.inputLastName(registerData.registerArray[2].lastName);
        registerPage.inputEmailAccount(registerData.registerArray[2].accountEmail);
        cy.get('#password').click().type("Davidtak123");
        cy.get("#password-confirmation").click().type("Davidtak123");

        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();

        cy.get('.message-success').should("be.visible");
        cy.get('.message-success > div').should("contain.text", "Thank you for registering with Main Website Store.");
    });

    it("TC004 Create an account with registered email", () => {
        cy.visit("/customer/account/create/");
        registerPage.inputFirstName(registerData.registerArray[3].firstName);
        registerPage.inputLastName(registerData.registerArray[3].lastName);
        registerPage.inputEmailAccount(registerData.registerArray[0].accountEmail);
        cy.get('#password').click().type("Davidtak123");
        cy.get("#password-confirmation").click().type("Davidtak123");
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();

        cy.get('.message-error').should("be.visible");
        cy.get('.message-error > div').should("contain.text", "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.");
    });
});