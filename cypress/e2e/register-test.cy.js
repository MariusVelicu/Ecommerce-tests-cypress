import { faker } from "@faker-js/faker"
import MainMenuPage from "../pages/MainMenuPage";

const randomEmail=faker.internet.email();
const index=randomEmail.indexOf("@");
const username=(randomEmail.substring(0,index)).toLowerCase();
const URL="http://ecommerce.test.k6.io/my-account/";

describe("Register User Tests Suites",()=>{
    beforeEach(() => {
        cy.visit(URL);
    });
    it("Register New User",()=>{
        MainMenuPage.getRegisterTextBox().type(randomEmail);
        MainMenuPage.getRegisterBtn().click();
        cy.contains(`Hello ${username}`).should('be.visible');
    })

    it("Register An Existent User",()=>{
        MainMenuPage.getRegisterTextBox().type(randomEmail);
        MainMenuPage.getRegisterBtn().click();
        cy.contains("An account is already registered with your email address.").should('be.visible');
    })
})