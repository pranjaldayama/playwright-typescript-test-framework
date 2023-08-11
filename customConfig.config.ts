import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  timeout: 20000,
  retries: 1,
  use: {
    baseURL: "https://the-internet.herokuapp.com",
    browserName: "firefox",
    headless: false,
    ignoreHTTPSErrors: true,
    //storageState: "state.json",
  },
};
export default config;
