class CheckoutOverviewPage {

    constructor(page) {
        this.page = page
        this.finishBtn = '//button[@id="finish"]'
    }

    async finish(){
        await this.page.locator(this.finishBtn).click()
    }
}

module.exports = {CheckoutOverviewPage}
