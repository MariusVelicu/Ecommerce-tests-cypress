class ShoppingPage{
    getProduct()
    {
        return cy.get('a[href="?add-to-cart=17"]');
    }

    getCartBtn()
    {
        return cy.get('a[href="http://ecommerce.test.k6.io/cart/"]').contains('Cart');
    }

    getCheckoutBtn()
    {
        return cy.get('a[href="http://ecommerce.test.k6.io/checkout/"]').contains('Checkout');
    }
}

export default new ShoppingPage();