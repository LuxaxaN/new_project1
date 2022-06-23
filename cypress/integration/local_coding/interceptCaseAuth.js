import { Urls } from "../../support/urls.js"
import { LoginPage } from "../../pages/loginPage.js"

const urls = new Urls();
const loginPage = new LoginPage();

describe("тестирование страницы логина при помощи метода интерсепт", () => {
    before(() => {
        cy.login()
            .intercept("https://server-prod.pasv.us/progress/codewars/completed/5de758e6d889cf003c55099a")
            .as("completed")
            .intercept("https://server-prod.pasv.us/challenge/profile/5de758e6d889cf003c55099a")
            .as("profile")
    });
    // before(() =>{
    //     // cy.intercept("https://server-prod.pasv.us/user/login",
    //     // {"message":"ВИТЯ ЛОХ","success":false,"fail":true,"show":true,"payload":"off"}
    //     // )
    // });

    it("подмена правильного ответа при логине на неправильный, замена текста ошибки", () => {
        cy.visit("https://localcoding.us/user/login")
            .intercept("https://server-prod.pasv.us/user/login",
                {"message":"ВИТЯ ЛОХ","success":false,"fail":true,"show":true,"payload":"off"}
            )
            .get(loginPage.selectors.loginInput)
            .type("medvedevvictormsc@gmail.com")
            .get(loginPage.selectors.passwordInput)
            .type("firo19611")
            .get(loginPage.selectors.authButton)
            .click()
            .get(loginPage.selectors.errorNote)
            .invoke("text")
            .should("eq", "ВИТЯ ЛОХ")
    });
    it.only("ожидание нескольких методов с интерсептом", () => {
        cy.visit("https://localcoding.us/profile/5de758e6d889cf003c55099a")
            .wait(["@completed", "@profile"])
    });
});