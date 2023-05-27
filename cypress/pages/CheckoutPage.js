class CheckoutPage{
    getFirstName()
    {
        return cy.get('#billing_first_name');
    }

    getLastName()
    {
        return cy.get('#billing_last_name');
    }

    getCompanyName()
    {
        return cy.get('#billing_company');
    }

    getRegion(region)
    {
        return cy.get('#select2-billing_country-container').select(region);
    }

    getStreet()
    {
        return cy.get('#billing_address_1');
    }

    getTown()
    {
        return cy.get('#billing_city');
    }

    getCountry(country)
    {
        return cy.get('#select2-billing_state-container').select(regin);

    }

    getPostCode()
    {
        return cy.get('#billing_postcode');
    }

    getPhone()
    {
        return cy.get('#billing_phone');
    }

    getEmail()
    {
        return cy.get('#billing_email');
    }

    getPlaceOrderBtn()
    {
        return cy.get('#place_order');
    }
}

export default new CheckoutPage();