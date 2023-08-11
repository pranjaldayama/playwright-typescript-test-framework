import { expect, Locator, Page } from "@playwright/test";

export class PracticeFormPage {
  
  readonly page: Page;
  readonly firstNameInputLocator: Locator;
  readonly lastNameInputLocator: Locator;
  readonly emailInputLocator: Locator;
  readonly genderRadioBtnLocator: Locator;
  readonly mobileNmbrLocator: Locator;
  readonly dobInputLocator: Locator;
  readonly subjectsInputLocator: Locator;
  readonly hobbiesCheckBoxLocator: Locator;
  readonly currentAddressInputLocator: Locator;
  readonly stateInputLocator: Locator;
  readonly cityInputLocator: Locator;
  readonly submitBtnLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInputLocator = page.locator("id=firstName");
    this.lastNameInputLocator = page.locator("id=lastName");
    this.emailInputLocator = page.locator("id=userEmail");
    this.genderRadioBtnLocator = page.locator("id=gender-radio-1");
    this.mobileNmbrLocator = page.locator("id=userNumber");
    this.dobInputLocator = page.locator("id=dateOfBirthInput");
    this.subjectsInputLocator = page.locator("id=subjectsContainer");
    this.hobbiesCheckBoxLocator = page.locator("id=hobbies-checkbox-2");
    this.currentAddressInputLocator = page.locator("id=currentAddress");
    this.stateInputLocator = page.locator("#state > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder");
    this.cityInputLocator = page.locator("#stateCity-wrapper > div:nth-child(3)");
    this.submitBtnLocator = page.locator("id=submit");

  }

  async navigate() {
    await Promise.all([
      this.page.goto('https://demoqa.com/automation-practice-form')
  ]);
  }

  async fillPracticeForm(firstName,lastName,email,mobileNmbr,dob) {
    await this.firstNameInputLocator.fill(firstName);
    await this.lastNameInputLocator.fill(lastName);
    await this.emailInputLocator.fill(email);
    await this.mobileNmbrLocator.fill(mobileNmbr);
    await this.dobInputLocator.fill(dob);
  }

  async clickSubmitButton() {
     this.submitBtnLocator.click();
  }

}