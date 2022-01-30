import signup from "../pages/SignupPage";

describe("Registration", () => {
  beforeEach(function () {
    cy.fixture("deliveryman").then((d) => {
      this.deliveryman = d;
    });
  });
  it("User must become a deliveryman", function () {
    signup.go();
    signup.fillForm(this.deliveryman.signup);
    signup.submit();

    const expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    signup.modalContentShouldBe(expectedMessage);
  });

  it("Incorrect CPF", function () {
    signup.go();
    signup.fillForm(this.deliveryman.inv_cpf);
    signup.submit();
    signup.alertMessageShouldBe("Oops! CPF inválido");
  });
});
