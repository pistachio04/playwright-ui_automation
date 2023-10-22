class LoginPage {

    constructor(page) {
        this.page = page
        this.usernameInput = '//input[@id="user-name"]'
        this.passwordInput = '//input[@id="password"]'
        this.loginBtn = '//input[@id="login-button"]'
    }

    async navigateToLoginPage(baseUrl){
        await this.page.goto(baseUrl)
    }

    async login(data){
        await this.page.locator(this.usernameInput).click()
        await this.page.locator(this.usernameInput).fill(data.username)
        await this.page.locator(this.passwordInput).click()
        await this.page.locator(this.passwordInput).fill(data.password)
        await this.page.locator(this.loginBtn).click()
    }
}

module.exports = {LoginPage}
