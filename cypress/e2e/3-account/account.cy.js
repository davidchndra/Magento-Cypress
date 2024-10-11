describe("Login", () => {
    beforeEach(() => {
        cy.visit("/");
    })

    it.only("Change Account", () => {
        cy.visit("/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/");
        cy.login_command("davidtesting_tak1@gmail.com", "Davidtestingtak123!");

        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click();
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click();
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click();
        cy.get('#firstname').clear();
        cy.get('#firstname').type("David Chandra");
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
    });
});