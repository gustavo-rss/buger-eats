import SignupPage from "../pages/SignupPage";

describe("Registration", () => {
  it("User must become a deliveryman", () => {
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

    var signup = new SignupPage();

    signup.go();
    signup.fillForm(deliveryman);
    signup.submit();

    const expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    signup.modalContentShouldBe(expectedMessage);
  });

  it("Incorrect CPF", () => {
    var deliveryman = {
      name: "Gustavo Ramos",
      cpf: "09909911ABC",
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

    var signup = new SignupPage();

    signup.go();
    signup.fillForm(deliveryman);
    signup.submit();

    signup.alertMessageShouldBe("Oops! CPF inválido");
  });
});
