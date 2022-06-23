import challengesData from "../../fixtures/challenges.json";

describe("тестирование страницы challenges", () => {
  before(() => {
      cy.loginManual();
  });
  it("замена списка через интерсепт, проверка названий по списку", () => {
      cy.intercept("https://server-prod.pasv.us/challenge/search", challengesData)
          .visit("https://localcoding.us/challenge")
          // .wait(5000)
          .get("div[class='col-lg-12']")
          // .invoke("text")
          .each(element => {
              cy.wrap(element)
                  .invoke("text")
                  .then(el => {
                      expect(el).contains("ЕПТИ")
                  });

               });
          });

  });