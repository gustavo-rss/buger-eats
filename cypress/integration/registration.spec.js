describe("Registration", () => {
  it("User must become a deliveryman", () => {
    cy.viewport(1920, 1080);
    cy.visit("https://buger-eats.vercel.app/");

    cy.get('a[href="/deliver"]').click();
    cy.get("#page-deliver form h1").should(
      "have.text",
      "Cadastre-se para  fazer entregas"
    );
    cy.url().should("be.equal", `https://buger-eats.vercel.app/deliver`);
  });
});
