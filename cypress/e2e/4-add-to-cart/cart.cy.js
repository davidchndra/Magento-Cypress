describe("Login", () => {
    beforeEach(() => {
        cy.visit("/");
    })

    it("Test add to cart", () => {
        cy.visit("/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/");
        cy.login_command("davidtesting_tak2@gmail.com", "Davidtestingtak123!");

        cy.get('#ui-id-5 > :nth-child(2)').click();
        cy.get('dd > .items > :nth-child(1) > a').click();
        cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
        cy.get('#option-label-size-143-item-170').click();
        cy.get('#option-label-color-93-item-50').click();
        cy.wait(3000);
        cy.get('#product-addtocart-button').click();

        cy.get('.showcart').click();
        cy.get('#top-cart-btn-checkout').click();
        cy.wait(10000);
        cy.get('.button').click();
        cy.wait(7000);
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click();
        cy.url().should("contain", "https://magento.softwaretestingboard.com/checkout/onepage/success/");
    });
});