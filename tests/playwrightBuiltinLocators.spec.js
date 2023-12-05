/*

page.getByAltText() - to locate an element, usually image, by its text alternative.
page.getByPlaceholder() - to locate an input by placeholder.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.

page.getByLabel() to locate a form control by associated label's text.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/


//some examples

import {test, expect} from '@playwright/test';

test ("Playwright Buit-in Locators", async ({page})=>{
    //visiting the page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //checking the company logo is visible or not by using getByAltText locator
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //locating an element using getByPlaceholder() locator
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    //locating element using getByRole() locator
    await page.locator('button', {type: 'submit'}).click();

    //locating element using page.getByText() locator
   /*
    const text = await page.getByText('Paul Collings');
    await expect(text).toBeVisible();
   */ 
    const name = await page.locator("//p[contains(text(),'Paul Collings')]").textContent();
    await expect(await page.getByText(name)).toBeVisible();
    console.log(name); //printing the name in the console


});