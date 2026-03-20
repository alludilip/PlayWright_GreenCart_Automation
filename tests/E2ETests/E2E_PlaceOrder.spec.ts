import {test} from '../../src/BasePage'


test('PlaceOrder', async({checkoutPage,chooseCountryPage,homePage, testData,setupTearDown})=>{

    await homePage.GotoHomePage();
    await homePage.searchForItem(String(testData.ModuleTestData?.VegetableName));
    await homePage.AddItemtoCart();
    await homePage.ProceedToCheckout();
    await checkoutPage.PlaceOrder();
    await chooseCountryPage.ChooseCountryFromList(String(testData.ModuleTestData?.Country))
    await chooseCountryPage.AgreeToTermsAndConditions();
    await chooseCountryPage.ClickProceedButton();
    await homePage.CheckHomePageIsLoaded();
    console.log(`price of vegetable is ${String(testData.ModuleTestData?.Price)} `);

});