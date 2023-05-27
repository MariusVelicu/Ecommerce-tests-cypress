import { faker } from "@faker-js/faker"
import MainMenuPage from "../pages/MainMenuPage";
import RegisterPage from "../pages/RegisterPage";
import AccountDetalisPage from "../pages/AccountDetalisPage";

const randomEmail=faker.internet.email();
const index=randomEmail.indexOf("@");
const username=(randomEmail.substring(0,index)).toLowerCase();
const URL="http://ecommerce.test.k6.io/my-account/";
const firstName=faker.person.firstName();
const lastName=faker.person.lastName();
const newUserName=faker.internet.userName();

describe("Register User And Edit Detalis Tests Suites",()=>{
    beforeEach(() => {
        cy.visit(URL);
    });
    it("Register New User",()=>{
        MainMenuPage.getRegisterTextBox().type(randomEmail);
        MainMenuPage.getRegisterBtn().click();
        cy.contains(`Hello ${username}`).should('be.visible');
        RegisterPage.getEditDetalisLink().click();
        AccountDetalisPage.getFirstName().type(firstName);
        AccountDetalisPage.getLastName().type(lastName);
        AccountDetalisPage.getDisplayName().clear();
        AccountDetalisPage.getDisplayName().type(newUserName);
        AccountDetalisPage.getSaveBtn().click();
        cy.contains('Account details changed successfully.').should('be.visible');
    })
})