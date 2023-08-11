import { expect, Locator, Page } from "@playwright/test";

export class WebTablePage {
  
  readonly page: Page;
  readonly addButtonLocator: Locator;
  readonly firstNameInputLocator: Locator;
  readonly lastNameInputLocator: Locator;
  readonly emailInputLocator: Locator;
  readonly ageInputLocator: Locator;
  readonly salaryInputLocator: Locator;
  readonly departmentInputLocator: Locator;
  readonly submitButtonLocator: Locator;
  readonly editIconLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addButtonLocator = page.locator("id=addNewRecordButton");
    this.firstNameInputLocator = page.locator("id=firstName");
    this.lastNameInputLocator = page.locator("id=lastName");
    this.emailInputLocator = page.locator("id=userEmail");
    this.ageInputLocator = page.locator("id=age");
    this.salaryInputLocator = page.locator("id=salary");
    this.departmentInputLocator = page.locator("id=department");
    this.submitButtonLocator = page.locator("id=submit");
    this.editIconLocator = page.locator("id=edit-record-2");
  }

  async navigate() {
    await Promise.all([
      this.page.goto('https://demoqa.com/webtables')
  ]);
  }

  async clickAddButton() {
    await this.addButtonLocator.click();
  }

  async clickEditIcon() {
    await this.editIconLocator.click();
  }

  async fillUserDetails(firstName, lastName, email, age, salary, department) {
    // enter user details
    await this.firstNameInputLocator.fill(firstName);
    await this.lastNameInputLocator.fill(lastName);
    await this.emailInputLocator.fill(email);
    await this.ageInputLocator.fill(age);
    await this.salaryInputLocator.fill(salary);
    await this.departmentInputLocator.fill(department);

  }

  async editUserDetails(firstName, lastName) {
    // enter user details
    await this.firstNameInputLocator.fill(firstName);
    await this.lastNameInputLocator.fill(lastName);
  }

  async clickSubmitButton() {
    await this.submitButtonLocator.click();
  }

  async isUserVisibleInTable(firstName: string) {
    await expect(this.page.getByRole('gridcell', { name: firstName })).toBeTruthy();
  }
}
