import { expect, Page } from "@playwright/test";

export class HomePage{

    readonly page:Page;
    readonly searchField;
    readonly searchButton;
    readonly addtocartButton;
    readonly cartLink;
    readonly proceedToCheckoutButton;


    constructor(page:Page){
        this.page = page;
        this.searchField = this.page.getByRole('searchbox', { name: 'Search for Vegetables and' });
        this.searchButton = this.page.getByRole('button').filter({ hasText: /^$/ });
        this.addtocartButton = this.page.getByRole('button', { name: 'ADD TO CART' });
        this.cartLink = this.page.getByRole('img', { name: 'Cart' });
        this.proceedToCheckoutButton= this.page.getByRole('button', { name: 'PROCEED TO CHECKOUT' });

    }

    // All Actions are defined here

    async GotoHomePage(){
        await this.page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
    }
    
    // Type into the search field and click on search
    async searchForItem(item:string){
        await this.searchField.fill(item);
        await this.page.waitForTimeout(1000);
        await this.searchButton.click();
        await this.page.waitForTimeout(1000);
    }

    // Click on Add to Cart Button
    async AddItemtoCart(){
        await this.addtocartButton.click();
    }

     // Click on proceed to checkout Button
    async ProceedToCheckout(){
        await this.cartLink.click();
        await this.proceedToCheckoutButton.click();
    }

    async CheckHomePageIsLoaded(){
        await expect(this.searchField, "Didnot switch to homepage").toBeVisible({timeout:10000});
    }




    
}