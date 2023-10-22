class HomePage {
    constructor(page){
        this.page = page
        this.productList = '//div[normalize-space()="Sauce Labs Backpack"]'  
        this.addProductToCartBtn =  '//button[@id="add-to-cart-sauce-labs-backpack"]'
        this.cart = '//a[@class="shopping_cart_link"]'

    }

    async addProductToCart(){
        await this.page.locator(this.productList).click()
        await this.page.locator(this.addProductToCartBtn).click()
    }

    async navigateToCart(){
        await this.page.locator(this.cart).click()
    }

}

module.exports = {HomePage}