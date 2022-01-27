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

    var deliveryman = {
      name: "Gustavo Ramos",
      cpf: "09909911109",
      email: "gustavo@hotmail.com",
      whatsapp: "11999999999",
      address: {
        postalcode: "04534011",
        street: "Rua Joaquim Floriano",
        addressNumber: "1000",
        complement: "Ap 142",
        district: "Itaim Bibi",
        city: "São Paulo/SP",
      },
      deliveryMethod: "Moto",
      cnh: "images/cnh-digital.jpg",
    };

    cy.get('input[name="name"]').type(deliveryman.name);
    cy.get('input[name="cpf"]').type(deliveryman.cpf);
    cy.get('input[name="email"]').type(deliveryman.email);
    cy.get('input[name="whatsapp"]').type(deliveryman.whatsapp);

    cy.get('input[name="postalcode"]').type(deliveryman.address.postalcode);
    cy.get('input[type="button"][value="Buscar CEP"]').click();
    cy.get('input[name="address-number"]').type(
      deliveryman.address.addressNumber
    );
    cy.get('input[name="address-details"]').type(
      deliveryman.address.complement
    );

    cy.get('input[name="address"]').should(
      "have.value",
      deliveryman.address.street
    );
    cy.get('input[name="district"]').should(
      "have.value",
      deliveryman.address.district
    );
    cy.get('input[name="city-uf"]').should(
      "have.value",
      deliveryman.address.city
    );

    cy.contains(".delivery-method li", deliveryman.deliveryMethod).click();

    cy.get('input[accept^="image"]').attachFile(deliveryman.cnh);
  });
});
