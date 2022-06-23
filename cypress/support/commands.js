Cypress.Commands.add("login",() => {
   cy.request({
       method: "POST",
       url: "https://server-prod.pasv.us/user/login",
       body: {email: "medvedevvictormsc@gmail.com", password: "firo19611"},
   }).then(response => {
       localStorage.setItem("userId", response.body.payload.userId);
       localStorage.setItem("token", response.body.payload.token);
   })
});
Cypress.Commands.add("loginManual", () => {
    cy.visit("https://localcoding.us/user/login")
        .get("[id='normal_login_email']")
        .type("medvedevvictormsc@gmail.com")
        .get("[id='normal_login_password']")
        .type("firo19611")
        .get("button[class='ant-btn ant-btn-primary ant-btn-lg login-form-button']")
        .click()
        .wait(2000)
});