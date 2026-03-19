
import { test as baseTest } from '@playwright/test';
import { CheckoutPage } from './Pages/CheckoutPage';
import { HomePage } from './Pages/HomePage';
import { ChooseCountryPage } from './Pages/ChooseCountryPage';
import { LoadTestData } from './utils/JsonHelper';
import { TestData } from './Interface/TestDataInterface';

type MyFixtures = {
    homePage: HomePage
    checkoutPage: CheckoutPage
    chooseCountryPage: ChooseCountryPage
    testData:TestData;
}

export const test = baseTest.extend<MyFixtures>({

    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page))
    },
    chooseCountryPage: async ({ page }, use) => {
        await use(new ChooseCountryPage(page))
    },
    testData:async({},use)=>{
        const data = await LoadTestData();
        await use(data);
    }


})


// Re-export expect
export { expect } from '@playwright/test';