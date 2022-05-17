/// <reference types="cypress" />

describe("interaction d'un produit", () => {
  beforeEach(() => {
    cy.fixture('viewport.json').as('view')
    cy.visit('/');
    cy.viewport(1024, 768)
  });

  it("ajout d'un produit", () => {
    cy.get("#aCreateProduct").click();
    cy.wait(2500)
    cy.get("#name").type("pomme");
    cy.wait(2500)
    cy.get("#description").type(
      "fruit : pomme de type golden et le prix est désigné au kilo"
    );
    cy.wait(2500)
    cy.get("#price").type("3.79");
    cy.screenshot()
    cy.wait(2500)
    cy.get("form").submit()
    cy.screenshot()
    cy.get('app-toast').should('be.visible')
    cy.screenshot()
  });

  it("modification d'un produit",()=>{
    cy.get('#aProducts').click();

  })

  it("suppression d'un produit", () => {
    cy.wait(2500)
    cy.get('#aProducts').click();
    cy.wait(2500)
    cy.get('tr:contains("pomme")').as('ligne')
    cy.wait(2500)
    cy.get('@ligne').children().last().click()
    cy.wait(2500)
    cy.get('app-toast').should('be.visible')
    cy.wait(2500)
  });
});
