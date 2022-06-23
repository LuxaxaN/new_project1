import { GoalsPage } from "../../pages/goalsPage";
import { Urls } from "../../support/urls";

const goalsPage = new GoalsPage();
const urls = new Urls();

describe("тестирование страницы goals", () => {
    before(() => {
        // cy.visit(urls.baseUrls.login)
        // .get(goalsPage.selectors.login.loginInput)
        //     .type(goalsPage.inputText.login)
        //     .get(goalsPage.selectors.login.passwordInput)
        //     .type(goalsPage.inputText.password)
        //     .get(goalsPage.selectors.authButton)
        //     .click()
        //     .wait(2000)
        cy.login();
            cy.visit(urls.baseUrls.goals);

    });
    describe("тестирование списка элементов прогресса", () => {
        it("доступность опций в каждом элементе", () => {
            cy.get(goalsPage.selectors.currentProgressForm)
                .each(element => {
                    cy.wrap(element)
                        .find(goalsPage.selectors.optionsDropdown)
                        .should("be.visible"); //проверяет видимость или наличие кнопки
                });
        });
    });
});