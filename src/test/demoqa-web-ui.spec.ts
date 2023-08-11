import { Browser, chromium, expect, Page, test } from "@playwright/test";
import { EDIT_FIRST_NAME, EDIT_LAST_NAME } from "../data/changeless.data";
import { DataFactory } from "../data/dataFactory";
import { User } from "../models/user";
import {WebTablePage} from "../pages/webTables";
import {BrokenImagePage} from "../pages/brokenImagePage";
import {DragDropPage} from "../pages/dragDropPage";
import {PracticeFormPage} from "../pages/practiceFormPage";
import { Form } from "../models/form";
import {ProgressBarPage} from "../pages/progressBarPage";
import {ToolTipPage} from "../pages/tooltipPage";

let browser: Browser;

test.beforeEach(async ({ page }) => {
  browser = await chromium.launch();
  page = await browser.newPage();
});

test.afterEach(async ({ page }) => {
    await page.close()
    await browser.close();
});


test("Enter user details in WebTables", async ({page}) => {

  let webtablesPage: WebTablePage;
  webtablesPage = new WebTablePage(page);

  const user: User = DataFactory.getUserDetails();

  await webtablesPage.navigate();
  await webtablesPage.clickAddButton();
  await webtablesPage.fillUserDetails(user.firstName,user.lastName,user.age,user.email,user.salary,user.department);
  await webtablesPage.clickSubmitButton();

  await webtablesPage.isUserVisibleInTable(user.firstName);

});

test("Edit user details", async ({page}) => {
  
    let webtablesPage: WebTablePage;
    webtablesPage = new WebTablePage(page);
  
    const user: User = DataFactory.getUserDetails();
  
    await webtablesPage.navigate();
    await webtablesPage.clickEditIcon();
    await webtablesPage.editUserDetails(EDIT_FIRST_NAME,EDIT_LAST_NAME);
    await webtablesPage.clickSubmitButton();
  
    await webtablesPage.isUserVisibleInTable(EDIT_FIRST_NAME);
  });

  test("Verify broken Image", async ({page}) => {

    let brokenImagePage: BrokenImagePage;
    brokenImagePage = new BrokenImagePage(page);
  
    await brokenImagePage.navigate();
    await brokenImagePage.verifyPresenceOfBrokenImg();
  
  });

  test("Verify drang and drop", async ({page}) => {
  
    let dragDropPage: DragDropPage;
    dragDropPage = new DragDropPage(page);
  
    await dragDropPage.navigate();
    await dragDropPage.performDragAndDrop();
    await dragDropPage.verifyDroppedText();
  });

  test("Practice form filling", async ({page}) => {

    let practiceFormPage: PracticeFormPage;
    practiceFormPage = new PracticeFormPage(page);
  
    const formData: Form = DataFactory.getFormData();
  
    await practiceFormPage.navigate();
    await practiceFormPage.fillPracticeForm(formData.firstName,formData.lastName,
      formData.email,formData.mobileNmbr,
      formData.dob);
  
      await practiceFormPage.clickSubmitButton();
  });

  test("Verify progress bar", async ({page}) => {

    let progressBarPage: ProgressBarPage;
    progressBarPage = new ProgressBarPage(page);
    await progressBarPage.navigate();
    await progressBarPage.clickOnProgressBarAndVerify();
  });

  test("Hover Tool Tip", async ({page}) => {

    let tootlTipPage: ToolTipPage;
    tootlTipPage = new ToolTipPage(page);

    await tootlTipPage.navigate();
    await tootlTipPage.verifyHoverOverToolTip();
  
    // Verify tooltip text
    const tooltipText = await tootlTipPage.gettooltipText();
    expect(tooltipText).toEqual('You hovered over the Button');
  });