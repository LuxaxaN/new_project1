export class LoginPage {
    selectors = {
        loginInput: "[id='normal_login_email']",
        passwordInput: "[id='normal_login_password']",
        errorNote: "div[class='ant-notification-notice-message']",
        authButton: "button[class='ant-btn ant-btn-primary ant-btn-lg login-form-button']",
        authForm: "form[id='normal_login']",
        titleText: "h1[class='mb-4']"
    };

    inputText = {
        loginLatin: "abcdefghi",
        loginTestFalse: "biba@mail.ru",
        passTestFalse: "123opa"
    };

    assertions = {
        loginLatin: "abcdefghi",
        errorText: "Auth failed"
    };

    loginFunction(login, password) {
        cy.visit("https://localcoding.us/user/login")
            .get("[id='normal_login_email']")
            .type(login)
            .get("[id='normal_login_password']")
            .type(password)
            .get("button[class='ant-btn ant-btn-primary ant-btn-lg login-form-button']")
            .click()
            .wait(2000)
    };
};