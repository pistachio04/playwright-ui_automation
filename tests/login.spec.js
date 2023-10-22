import {test} from '@playwright/test'
import { SAUCEDEMO_LOGIN_DATA } from "../data/saucedemo/login.data"
import { LoginPage } from '../pages/saucedemo/login.page'
import { HomePage } from '../pages/saucedemo/home.page'
import { SAUCEDEMO_PRODUCT_DATA } from '../data/saucedemo/product.data'


test.describe('Login until Success Checkout Item', () => {
    test('Login with valid credential: Success', async ({page}) => {
        const login = new LoginPage(page)
    
        await login.navigateToLoginPage('https://www.saucedemo.com/')
        await login.login(SAUCEDEMO_LOGIN_DATA)
        
        await page.waitForTimeout(3000)
    }) &&

    test('Add Product to Cart: Success', async ({page}) => {
        const home = new HomePage(page)
        
        await home.addProductToCart(SAUCEDEMO_PRODUCT_DATA.productName)
    })
    
})