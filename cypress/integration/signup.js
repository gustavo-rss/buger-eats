import signup from "../pages/SignupPage";
import signupFacoty from "../factoreis/SignupFactory";

describe("Signup", () => {
  it("User must become a deliveryman", function () {
    var deliveryman = signupFacoty.deliveryman();

    signup.go();
    signup.fillForm(deliveryman);
    signup.submit();

    const expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    signup.modalContentShouldBe(expectedMessage);
  });

  it("Incorrect document", function () {
    var deliveryman = signupFacoty.deliveryman();

    deliveryman.cpf = "0000000abc";

    signup.go();
    signup.fillForm(deliveryman);
    signup.submit();
    signup.alertMessageShouldBe("Oops! CPF inválido");
  });

  it("Incorrect email", function () {
    var deliveryman = signupFacoty.deliveryman();

    deliveryman.email = "fake1.com";

    signup.go();
    signup.fillForm(deliveryman);
    signup.submit();
    signup.alertMessageShouldBe("Oops! Email com formato inválido.");
  });

  context("Required fields", function () {
    const messages = [
      { field: "name", output: "É necessário informar o nome" },
      { field: "cpf", output: "É necessário informar o CPF" },
      { field: "email", output: "É necessário informar o email" },
      { field: "postalcode", output: "É necessário informar o CEP" },
      { field: "number", output: "É necessário informar o número do endereço" },
      { field: "delivery_method", output: "Selecione o método de entrega" },
      { field: "cnh", output: "Adicione uma foto da sua CNH" },
    ];

    before(function () {
      signup.go();
      signup.submit();
    });

    messages.forEach(function (msg) {
      it(`${msg.field} is required`, function () {
        signup.alertMessageShouldBe(msg.output);
      });
    });
  });
});
