import CheckoutPage from "../pages/CheckoutPage"

Cypress.Commands.add('checkoutInformation', (firstName,lastName,companyName,region,street,town,country,postCode,phone,email) => {
    CheckoutPage.getFirstName().type(firstName);
    CheckoutPage.getLastName().type(lastName);
    CheckoutPage.getCompanyName().type(companyName);
    //CheckoutPage.getRegion(region);
    CheckoutPage.getStreet().type(street);
    CheckoutPage.getTown().type(town);
    //CheckoutPage.getCountry(country);
    CheckoutPage.getPostCode().type(postCode);
    CheckoutPage.getPhone().type(phone);
    CheckoutPage.getEmail().type(email);
})