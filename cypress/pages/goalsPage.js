export class GoalsPage {
    selectors = {
        login:{
            loginInput: "[id='normal_login_email']",
            passwordInput: "[id='normal_login_password']"
        },
        authButton: "button[class='ant-btn ant-btn-primary ant-btn-lg login-form-button']",
        currentProgressForm: "tr[class='ant-table-row ant-table-row-level-0']",
        optionsDropdown: "img[class='ant-dropdown-trigger']"



    };
    inputText = {
        login: "medvedevvictormsc@gmail.com",
        password: "firo19611"
    };
};