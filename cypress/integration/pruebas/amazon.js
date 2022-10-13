require("cypress-plugin-tab");

let time = 1000;

describe("Amazon", () => {
  it("test", () => {
    cy.viewport(1800, 1000);
    cy.visit("https://www.amazon.es");
    cy.title().should("eq","Amazon.es: compra online de electrónica, libros, deporte, hogar, moda y mucho más.");
    cy.wait(time);

    cy.get("#twotabsearchtextbox").type("monstruo rosa");
    cy.get("#nav-search-submit-button").click();

    cy.get("#sp-cc-rejectall-link").click();
    
    cy.get('[data-asin="8493973645"]').click();
    cy.wait(time);

    cy.get("#add-to-cart-button").click();

    cy.get("#sc-buy-box-ptc-button").click();
    cy.get("#createAccountSubmit").click();

    cy.get("#ap_customer_name").should("be.visible").type("Lidia San");
    cy.wait(time);

    cy.get("#ap_email").should("be.visible").type("lidia@gmail.com");
    cy.wait(time);

    cy.get("#ap_password").type("13october2022*").tab().type("13october2022*").tab().click();

  });
});
