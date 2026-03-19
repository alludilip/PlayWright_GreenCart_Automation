import {Page} from '@playwright/test'

export class ChooseCountryPage{

    readonly page:Page;
    readonly selectCountryMenu;
    readonly agreeTermsCheckbox;
    readonly proceedButton;

    constructor(page:Page){
        this.page = page;
        this.selectCountryMenu = this.page.locator('//select');
        this.agreeTermsCheckbox = this.page.getByRole('checkbox').first();
        this.proceedButton = this.page.getByRole('button', { name: 'Proceed' });
    }

    // Select country from dropdown menu
    async ChooseCountryFromList(countryToSelect:string){
        await this.selectCountryMenu.selectOption({label:`${countryToSelect}`});
    }

    // Agree terms and conditions
    async AgreeToTermsAndConditions(){
        await this.agreeTermsCheckbox.check();
    }

    async ClickProceedButton(){
        await this.proceedButton.click();
    }

}