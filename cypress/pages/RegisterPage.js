class RegisterPage{
    getEditDetalisLink()
    {
        return cy.get(".woocommerce-MyAccount-content p:nth-child(3) a:nth-child(3)");
    }
}

export default new RegisterPage();