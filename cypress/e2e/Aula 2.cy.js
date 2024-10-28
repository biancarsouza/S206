/// <reference types="cypress" />

describe("Testes de criação, registro e login.", () => {
  it("Deve criar um novo usuário:", () => {
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    );

    cy.get(".btn-link").click();
    cy.get("#firstName").type("Bianca");
    cy.get("#Text1").type("Bianca");
    cy.get("#username").type("bianca");
    cy.get("#password").type("bianca123");
    cy.get(".btn-primary").click();
    cy.get(".ng-binding").should("contain.text", "Registration successful");
  });

  it("Criar um usuário com falha.", () => {
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    );
    
    cy.get(".btn-link").click();
    cy.get("#firstName").type("Bianca");
    cy.get("#Text1").type("Bianca");
    cy.get("#username").type("bianca");
    cy.get(".btn-primary").should("be.disabled");
  });

  it("Login com dados válidos.", () => {
    let infos = registro();
    
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    );

    cy.get("#username").type(infos[0]);
    cy.get("#password").type(infos[1]);
    cy.get(".btn-primary").click();
    cy.get("h1.ng-binding").should("contain.text", infos[0]);
  });

  it("Não conseguir fazer login após deletar usuário.", () => {
    let infos = registro();

    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    );

    cy.get("#username").type(infos[0]);
    cy.get("#password").type(infos[1]);
    cy.get(".btn-primary").click();
    cy.get("h1.ng-binding").should("contain.text", infos[0]);
    cy.get(".ng-binding > a").click();
    cy.get(".btn").click();
    cy.get("#username").type(infos[0]);
    cy.get("#password").type(infos[1]);
    cy.get(".btn-primary").click();
    cy.get(".ng-binding").should("contain.text", "Username or password is incorrect");
  });

  const registro = () => {
    let hora = new Date().getHours().toString();
    let minuto = new Date().getMinutes().toString();
    let segundo = new Date().getSeconds().toString();

    let ID = hora + minuto + segundo + "ID";
    let Senha = hora + minuto + segundo + "Senha";

    let infos = [ID, Senha];

    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login"
    );

    cy.get(".btn-link").click();
    cy.get("#firstName").type(ID);
    cy.get("#Text1").type(ID);
    cy.get("#username").type(ID);
    cy.get("#password").type(Senha);
    cy.get(".btn-primary").click();
    cy.get(".ng-binding").should("contain.text", "Registration successful");
    
    return infos;
  };
});
