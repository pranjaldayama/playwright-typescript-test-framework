import { expect, Locator, Page } from "@playwright/test";

export class ProgressBarPage {
  
  readonly page: Page;
  readonly startStopBtnLocator : Locator;
  readonly resetBtnLocator : Locator;
  readonly progressBarComplete : Locator;
 
  constructor(page: Page) {
    this.page = page;
    this.startStopBtnLocator = page.locator("id=startStopButton");
  }

  async navigate() {
    await this.page.goto("https://demoqa.com/progress-bar");
  }

  async clickOnProgressBarAndVerify() {

      // Find the start button and click it
      const startButton = await this.page.waitForSelector('#startStopButton');
      await startButton.click();
      // Wait for the progress bar to reach 100%
      const progressBar = await this.page.waitForSelector('.progress-bar', { state: 'visible' });
      // Wait for the progress bar to have 'width: 100%' style
      await progressBar.waitForSelector('[style="width: 100%;"]');

      // Verify the progress bar has reached 100% width
      expect(await progressBar.textContent()).toContain('100%');
  }
}