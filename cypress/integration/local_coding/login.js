import { LoginPage } from "../../pages/loginPage.js";
import { Urls } from "../../support/urls.js";

const loginPage = new LoginPage();
const urls = new Urls();

describe("проверка страницы логина", () => {
    beforeEach(() => {
        cy.visit(urls.baseUrls.login);
    });
  describe("тестирование поля login", () => {
      it("поле принимает латинницу", () => {
        cy.get(loginPage.selectors.loginInput)
            .type(loginPage.inputText.loginLatin)
            .invoke("val")
            .should("eq",loginPage.assertions.loginLatin);
      });
  });
  describe("тестирование поля password", () => {
      it("поле принимает латинницу", () => {
          cy.get(loginPage.selectors.passwordInput)
              .type(loginPage.inputText.loginLatin)
              .invoke("val")
              .should("eq",loginPage.assertions.loginLatin)
      })
  })
  describe("используем метод find, then, clear, wait, each", () => {
      it("поиск текста приветствия через метод find", () => {
          cy.get(loginPage.selectors.authForm)
              .find(loginPage.selectors.titleText)
              .invoke("text")
              .should("eq","Welcome back!");
      });
      it("поиск текста приветствия через метод then", () => {
          cy.get(loginPage.selectors.authForm)
              .find(loginPage.selectors.titleText)
              .invoke("text")
              .then(el => {
                  expect(el).contains("Welcome");
              });
      });
      it("удаление текста через метод clear", () => {
          cy.get(loginPage.selectors.loginInput)
              .type(loginPage.inputText.loginLatin)
              .invoke("val")
              .should("eq",loginPage.assertions.loginLatin)
              .get(loginPage.selectors.loginInput)
              .clear()
              .invoke("val")
              .should("eq","");
      });
      it("юзаем wait", () => {
          cy.get(loginPage.selectors.loginInput)
              .type(loginPage.inputText.loginLatin)
              .invoke("val")
              .should("eq",loginPage.assertions.loginLatin)
              .wait(5000)
              .get(loginPage.selectors.loginInput)
              .clear()
              .invoke("val")
              .should("eq","");
      });
      it("используем метод each", () => {
          cy.get(".ant-input")
              .each(element => {
                  cy.wrap(element)//возвращает формат к сайпрессу
                      .type("12345")
                      .invoke("val")
                      .then(el => {
                          expect(el).contains("12345");
                      });
              });
      });
      it.only("логин функция", () => {
        loginPage.loginFunction(loginPage.inputText.passTestFalse,loginPage.inputText.passTestFalse);
      });
  });
});