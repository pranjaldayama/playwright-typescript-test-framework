import { expect, Locator, Page } from "@playwright/test";

export class BrokenImagePage {
  
  readonly page: Page;
  readonly links: Locator;
 
  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {

    await Promise.all([
      this.page.goto('https://demoqa.com/broken')
  ]);
  }

  async verifyPresenceOfBrokenImg() {
    await this.page.waitForLoadState("domcontentloaded");
    const images = this.page.locator("img")
    console.log(await images.count());
    const allImages = await images.all();
    for await (const img of allImages){
        const imgSrc = await img.getAttribute("src");
        expect.soft(imgSrc?.length).toBeGreaterThan(1);
        //@ts-ignore
        if(imgSrc?.length>1){
        const response = await this.page.request.get("https://demoqa.com/broken/" + imgSrc);
        expect.soft(response.status()).toBe(200);
        }
    }
  }
}