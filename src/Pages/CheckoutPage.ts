import { Page } from "@playwright/test";

export class CheckoutPage{

    readonly page:Page;
    readonly placeOrder;

    constructor(page:Page){
        this.page = page
        this.placeOrder = this.page.getByRole('button', { name: 'Place Order' });
    }

    // Click on place order button
    async PlaceOrder(){
        await this.placeOrder.click();
    }

}