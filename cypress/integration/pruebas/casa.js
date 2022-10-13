require("cypress-xpath");

let time = 1000;

describe("Casa del libro", () => {
  it("test", () => {
    cy.visit("https://www.casadellibro.com/");
    cy.title().should("eq","Libros e eBooks, descuentos y envíos gratis | Casa del Libro");
    cy.wait(time);

    cy.get("#onetrust-accept-btn-handler").click();
    cy.get(".book-finder").should("be.visible").type("monstruo rosa");
    cy.wait(time);
    cy.get(".ebx-search-box__input").should("be.visible").type("{enter}");

    cy.get("[data-scroll-id=2223979] > .ebx-result-link").type("{enter}");

    cy.get(":nth-child(1) > .row--dense > :nth-child(2) > .v-btn").should("be.visible").click({ force: true });
    cy.wait(time);

    cy.xpath('//*[@id="app"]/div[1]/div[3]/aside/div[3]/div/div/div[2]/a').contains("Ir a pagar").click({ force: true });
  });
});
