class HomePage {
    constructor(){
        this.page = page
        this.productList = '//div[@class="inventory_item_name"]'  
        this.addProductToCartBtn =  '(//button[normalize-space()="Add to cart"])[1]'

    }

    async addProductToCart(productName){
        const productList = await this.page.$$(this.productList)
console.log('PDC LIST: ', productList)
        for (let product of productList) {
            if (productName == await product.textContext()) {
                await product.click()
                break
            }
        }
    }
}

module.exports = {HomePage}