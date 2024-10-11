describe("Login", () => {
    beforeEach(() => {
        cy.visit("/");
    })

    it.only("Login with valid credentials", () => {
        cy.visit("/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/");
        cy.login_command("davidtesting_tak1@gmail.com", "Davidtestingtak123!");
    });

    it("Login with invalid password", () => {
        cy.visit("/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/");
        cy.login_command("davidtesting_tak1@gmail.com", "Davidsalahpassword123!");
        cy.get('.message-error').should("be.visible");
        cy.get('.message-error > div').should("contain.text", "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
    });

    it("Login with invalid email format", () => {
        cy.visit("/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/");
        cy.login_command("davidtestinggmail.com", "Davidsalahpassword123!");
        cy.get('.message-error').should("be.visible");
        cy.get('.message-error > div').should("contain.text", "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
    });
});