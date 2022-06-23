import * as userData from "../../fixtures/user.json";


describe("тестирование страницы профиля методом intercept", () => {
    before(() => {
      cy.login();
    });
    it("применение метода intercept", () => {
        cy.intercept("https://server-prod.pasv.us/user/5de758e6d889cf003c55099a", userData)
            cy.visit("https://localcoding.us/profile/5de758e6d889cf003c55099a")

    });
    it("применение метода intercept", () => {
        cy.intercept("https://server-prod.pasv.us/user/5de758e6d889cf003c55099a")
            .as("jopa")
            .visit("https://localcoding.us/profile/5de758e6d889cf003c55099a")
            .wait("@jopa")

    });
});