
import { test as baseTest, Page } from '@playwright/test';
import { CheckoutPage } from './Pages/CheckoutPage';
import { HomePage } from './Pages/HomePage';
import { ChooseCountryPage } from './Pages/ChooseCountryPage';
import { LoadTestData } from './utils/JsonHelper';
import { TestData } from './Interface/TestDataInterface';

type MyFixtures = {
    setupTearDown:Page
    homePage: HomePage
    checkoutPage: CheckoutPage
    chooseCountryPage: ChooseCountryPage
    testData:TestData;
}

export const test = baseTest.extend<MyFixtures>({

    setupTearDown: async({page},use)=>{
        console.log('Setting up things for tests');
        await use(page); // code before this statement is for setup and after this is tear down
        console.log("Handling tear down actions");
    },
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