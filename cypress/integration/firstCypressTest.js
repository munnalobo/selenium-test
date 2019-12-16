describe("Calculator test", function() {

    it("invoke calc app", function() {
        // browser.get("https://juliemr.github.io/protractor-demo/");
        // browser.sleep(3000);
        cy.visit('https://www.google.com');
        cy.get('.gLFyf').type('amanda gunturu');
        cy.get('#lga').click();
        cy.get('.FPdoLc > center > .gNO89b').click();

        expect(true).toBeTruthy;
    })
});
