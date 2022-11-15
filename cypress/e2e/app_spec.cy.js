describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("should visits the page, and show the page title and the existing shortened URLs", () => {
    cy.get(".card-container").should("exist");
    cy.get(".title").should("exist").contains("URL Shortener");
    cy.get(".card-container > :nth-child(1)").should("exist");
    cy.get(":nth-child(1) > h3").should("be.visible").contains("Awesome photo");
    cy.get(":nth-child(1) > a")
      .should("be.visible")
      .contains("http://localhost:3001/useshorturl/1");
  });

  it("should visits the page, they can view the Form with the proper inputs", () => {
    cy.get("header").should("exist");
    cy.get('[placeholder="Title..."]').should("not.have.value");
    cy.get('[placeholder="URL to Shorten..."]').should("not.have.value");
    cy.get("button").should("exist").contains("Shorten Please");
  });

  it("should fills out the form, the information is reflected in the input fields", () => {
    cy.get('[placeholder="Title..."]')
      .type("hello")
      .should("have.value", "hello");
    cy.get('[placeholder="URL to Shorten..."]')
      .type(
        "https://images.freeimages.com/images/large-previews/85a/cliff-over-indian-ocean-1520869.jpg"
      )
      .should(
        "have.value",
        "https://images.freeimages.com/images/large-previews/85a/cliff-over-indian-ocean-1520869.jpg"
      );
  });

  it.only("should be able to fill out and submits the form, and a new shortened URL is rendered", () => {
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {fixture: "testUrl"})
    cy.visit("http://localhost:3000/")
    cy.get('h3').should("exist").contains("Test Here")
    cy.get('a').should("exist").contains("http://localhost:3001/useshorturl/1")
  });
});
