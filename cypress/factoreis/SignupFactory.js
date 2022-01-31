var faker = require("faker");
var cpf = require("gerador-validador-cpf");

export default {
  deliveryman: function () {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
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
    return data;
  },
};
