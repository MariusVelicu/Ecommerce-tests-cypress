class MainMenuPage{
    getRegisterTextBox()
    {
        return cy.get("#reg_email");
    }

    getRegisterBtn()
    {
        return cy.get('[name="register"]');
    }
}

export default new MainMenuPage();