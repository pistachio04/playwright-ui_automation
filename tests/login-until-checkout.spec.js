import {test} from '@playwright/test'
import { SAUCEDEMO_LOGIN_DATA } from "../data/saucedemo/login.data"
import { LoginPage } from '../pages/saucedemo/login.page'
import { HomePage } from '../pages/saucedemo/home.page'
import { CartPage } from '../pages/saucedemo/cart.page'
import { ShippingInformationPage } from '../pages/saucedemo/shipping-information.page'
import { SAUCEDEMO_SHIPPING_INFORMATION_DATA } from '../data/saucedemo/shipping-information.data'
import { CheckoutOverviewPage } from '../pages/saucedemo/checkout-overview.page'


    test('Login until Checkout Product: Success', async ({page}) => {
        const login = new LoginPage(page)
    
        await login.navigateToLoginPage('https://www.saucedemo.com/')
        await login.login(SAUCEDEMO_LOGIN_DATA)

        const home = new HomePage(page)

        await home.addProductToCart()
        await home.navigateToCart()

        const cart = new CartPage(page)

        await cart.checkout()

        const shippingInformation = new ShippingInformationPage(page)

        await shippingInformation.continueCheckout(SAUCEDEMO_SHIPPING_INFORMATION_DATA)

        const checkoutOverview = new CheckoutOverviewPage(page)

        await checkoutOverview.finish()
        
        await page.waitForTimeout(5000)
    })