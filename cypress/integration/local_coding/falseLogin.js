import { Urls } from "../../support/urls.js"
import { LoginPage } from "../../pages/loginPage.js"

const urls = new Urls();
const loginPage = new LoginPage();

describe("проверка страницы логина номер 2",() => {
    beforeEach(() => {
        cy.visit(urls.baseUrls.login);
    });
    describe("тестирование поля сообщения об ошибке", () => {
        it("ожидаемый текст ошибки верен", () => {
            cy.get(loginPage.selectors.loginInput)
                .type(loginPage.inputText.loginTestFalse)
            cy.get(loginPage.selectors.passwordInput)
                .type(loginPage.inputText.passTestFalse)
            cy.get(loginPage.selectors.authButton)
                .click()
            cy.get(loginPage.selectors.errorNote)
                .invoke("text")
                .should("eq",loginPage.assertions.errorText)

        });
    });
});
