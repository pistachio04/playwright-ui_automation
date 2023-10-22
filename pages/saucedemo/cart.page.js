class CartPage {

    constructor(page) {
        this.page = page
        this.checkoutBtn = '//button[@id="checkout"]'
    }

    async checkout(){
        await this.page.locator(this.checkoutBtn).click()
    }
}

module.exports = {CartPage}
