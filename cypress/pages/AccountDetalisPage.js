class AccountDetalisPage{
    getFirstName()
    {
        return cy.get('#account_first_name');
    }

    getLastName()
    {
        return cy.get('#account_last_name');
    }

    getDisplayName()
    {
        return cy.get('#account_display_name');
    }

    getSaveBtn()
    {
        return cy.get('[name="save_account_details"]');
    }
}

export default new AccountDetalisPage();