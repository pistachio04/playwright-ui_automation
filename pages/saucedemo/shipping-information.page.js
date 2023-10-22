class ShippingInformationPage {

    constructor(page) {
        this.page = page
        this.firstNameInput = '//input[@id="first-name"]'
        this.lastNameInput = '//input[@id="last-name"]'
        this.postalCodeInput = '//input[@id="postal-code"]'
        this.continueBtn = '//input[@id="continue"]'
    }

    async continueCheckout(data){
        await this.page.locator(this.firstNameInput).click()
        await this.page.locator(this.firstNameInput).fill(data.firstName)
        await this.page.locator(this.lastNameInput).click()
        await this.page.locator(this.lastNameInput).fill(data.lastName)
        await this.page.locator(this.postalCodeInput).click()
        await this.page.locator(this.postalCodeInput).fill(data.postalCode)
        await this.page.locator(this.continueBtn).click()
    }
}

module.exports = {ShippingInformationPage}
