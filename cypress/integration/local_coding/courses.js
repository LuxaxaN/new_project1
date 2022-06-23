import { CoursePage } from "../../pages/coursePage.js";
import { Urls } from "../../support/urls.js";

const coursePage = new CoursePage();
const urls = new Urls();

describe("тестирование страницы Курсы", () => {
   before(() => {
     cy.loginManual();
   });
   it("проверка полей описания курсов", () => {
      cy.visit(urls.baseUrls.courses)
          // .viewport(2000,2000)
          // .get(coursePage.selectors.languageDropdownButton)
          // .click({force:true})
          // .wait(2000)
          // .get(coursePage.selectors.languageDropdownOptionEn)
          // .click({force:true})
          // .wait(2000)
          .get(coursePage.selectors.course)
          .then(element => {
              expect(element.length).equals(coursePage.assertions.coursesDescriptionRu.length)
              for (let i = 0; i < coursePage.assertions.coursesDescriptionRu.length; i++) {
               expect(Cypress.$.makeArray(element).map(i => i.innerText).filter(j => j === coursePage.assertions.coursesDescriptionRu[i]).length).equal(1)
               expect(Cypress.$.makeArray(element).map(i => i.innerText).filter(j => j === coursePage.assertions.coursesDescriptionRu[i])[0]).equal(coursePage.assertions.coursesDescriptionRu[i])
              };
          });
   });
});