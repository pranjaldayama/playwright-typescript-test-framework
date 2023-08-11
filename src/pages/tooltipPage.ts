import { expect, Locator, Page } from "@playwright/test";

export class ToolTipPage {
  
  readonly page: Page;
  readonly toolTipButton: Locator;
 
  constructor(page: Page) {
    this.page = page;
    this.toolTipButton = page.locator('id=toolTipButton')
  }

  async navigate() {
    await this.page.goto("https://demoqa.com/tool-tips");
  }

  async verifyHoverOverToolTip() {

    await this.toolTipButton.hover();
   // Wait for the tooltip to appear
   const tooltip = await this.page.waitForSelector('.tooltip-inner');
   // Get the tooltip text
   const tooltipText = await tooltip.innerText();
  }
  
   async gettooltipText() {
    // Wait for the tooltip to appear
    const tooltip = await this.page.waitForSelector('.tooltip-inner');
    // Get the tooltip text
    return await tooltip.innerText();
  }
}