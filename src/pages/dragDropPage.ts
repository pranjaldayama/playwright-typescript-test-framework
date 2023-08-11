import { expect, Locator, Page } from "@playwright/test";
import { BASEURL } from "../data/changeless.data";

export class DragDropPage {
  
  readonly page: Page;
  draggableElement: Locator;
  droppableElement: Locator;
 
  constructor(page: Page) {
    this.page = page;
    this.draggableElement = page.locator('id=draggable')
    this.droppableElement = page.getByLabel('Simple').locator('#droppable')
  }

  async navigate() {
  await Promise.all([
    this.page.goto('https://demoqa.com/droppable')
]);
  }

  async performDragAndDrop() {
    // Perform drag and drop operation
    await this.draggableElement.hover();
    await this.page.mouse.down();
    await this.droppableElement.hover();
    await this.page.mouse.up();
    }

    async verifyDroppedText() {
      await expect(this.droppableElement).toContainText('Dropped'); 
      }
  }