/// <reference types="cypress" />

describe("Teste de UI com Cypress", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it("Teste de variação A/B.", () => {
    cy.visit("https://the-internet.herokuapp.com/abtest");

    cy.log("Verificando se a página contém o texto.");
    cy.contains("Also known as split testing.").should("exist");
  });

  it("Adicionar e remover elemento.", () => {
    cy.visit("https://the-internet.herokuapp.com/add_remove_elements/");

    cy.log("Adicionando elemento.");
    cy.contains("Add Element").click();

    cy.log("Se o botão para deletar o elemento existe, então o elemento foi adicionado.");
    cy.contains("Delete").should("be.visible");

    cy.log("Deletando o elemento.");
    cy.contains("Delete").click();
  });

  it("Autenticação básica.", () => {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: {
        username: "admin",
        password: "admin",
      },
    });
  
    cy.log("Verificando se o usuário foi autenticado.");
    cy.contains("Congratulations! You must have the proper credentials.");
  });

  it("Marcar todas as checkboxes.", () => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");

    cy.log("Marcando as checkboxes não marcadas.");
    cy.get('input[type="checkbox"]').each(($checkbox) => {
      if (!$checkbox.is(":checked")) {
        cy.wrap($checkbox).click();
      }
    });

    cy.log("Verificando se agora todas estão marcadas.");
    cy.get('input[type="checkbox"]').should("be.checked");
  });

  it("Login com as credenciais corretas.", () => {
    cy.visit("https://the-internet.herokuapp.com/login");

    cy.log("Preenchendo as credenciais corretas.");
    cy.get('input[name="username"]').type("tomsmith");
    cy.get('input[name="password"]').type("SuperSecretPassword!");

    cy.log("Logando.");
    cy.get('button[type="submit"]').click();

    cy.log("Verificando se o login foi feito com sucesso.");
    cy.get("#flash").should("contain", "You logged into a secure area!");
  });

  it("Login com as credenciais incorretas.", () => {
    cy.visit("https://the-internet.herokuapp.com/login");

    cy.log("Preenchendo as credenciais incorretas.");
    cy.get('input[name="username"]').type("loginInvalido");
    cy.get('input[name="password"]').type("loginInvalido");

    cy.log("Logando.");
    cy.get('button[type="submit"]').click();

    cy.log("Verificando se o login não foi feito com sucesso.");
    cy.get("#flash").should("contain", "Your username is invalid!");
  });

  it("Teste de geolocalização.", () => {
    cy.visit("https://the-internet.herokuapp.com/geolocation");

    cy.log("Clicando no botão que vê minha latitude e longitude.");
    cy.contains("Where am I?").click();

    cy.log("Verificando se conseguiu achar a minha geolocalização.");
    cy.contains("Latitude").should("exist");
  });

  it("Teste de última tecla pressionada.", () => {
    cy.visit("https://the-internet.herokuapp.com/key_presses");

    cy.log("Pressionando a tecla A.");
    cy.get("body").type("A");

    cy.log("Verificando se a tecla A foi pressionada.");
    cy.get("#result").should("contain", "You entered: A");
  });
});
