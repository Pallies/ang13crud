/// <reference types="cypress" />

describe("interaction d'un produit", () => {
  beforeEach(() => {
    cy.fixture('viewport.json').as('view')
    cy.visit('/');
    cy.viewport(1024, 768)
  });

  it("ajout d'un produit", () => {
    cy.get("#aCreateProduct").click();
    cy.get("#name").type("pomme");
    cy.get("#description").type(
      "fruit : pomme de type golden et le prix est désigné au kilo"
    );
    cy.get("#price").type("3.79");
    cy.get("form").submit()
    cy.get('app-toast').should('be.visible')
  });

  it.only("modification d'un produit",()=>{
    cy.get('#aProducts').click();

  })

  it("suppression d'un produit", () => {
    cy.get('#aProducts').click();
    cy.get('tr:contains("pomme")').as('ligne')
    cy.get('@ligne').children().last().click()
    cy.get('app-toast').should('be.visible')
  });
});
