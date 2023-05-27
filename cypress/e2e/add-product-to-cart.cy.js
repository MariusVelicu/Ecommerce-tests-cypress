import { faker } from "@faker-js/faker"
import ShoppingPage from "../pages/ShoppingPage";
import CheckoutPage from "../pages/CheckoutPage";

const URL="http://ecommerce.test.k6.io/";
const firstName=faker.person.firstName();
const lastName=faker.person.lastName();
const companyName=faker.company.name();
const region='Romania';
const street=faker.location.streetAddress();
const town='Fundeni';
const country='Calarasi';
const postCode=faker.location.zipCode();
const phone=faker.phone.number('####-###-###');
const randomEmail=faker.internet.email();

describe("Add Product To Cart Tests Suites",()=>{
    beforeEach(() => {
        cy.visit(URL);
    });
    it("Add Product To Cart",()=>{
        ShoppingPage.getProduct().click();
        ShoppingPage.getCartBtn().click();
        ShoppingPage.getCheckoutBtn().click();
        cy.checkoutInformation(firstName,lastName,companyName,region,street,town,country,postCode,phone,randomEmail);
        CheckoutPage.getPlaceOrderBtn().click();
        cy.contains('Thank you. Your order has been received.',{timeout:8000}).should('be.visible');
    })
})