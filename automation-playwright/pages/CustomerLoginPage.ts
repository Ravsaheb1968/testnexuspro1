import { Page } from "@playwright/test";

export class CustomerLoginPage {
  constructor(private readonly page: Page) {}

  readonly moduleRoot = this.page.getByRole("main");

  async goto(): Promise<void> {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  }

  async successfulLoginWithValidCredentials(): Promise<void> {
    // Scenario: Successful Login with Valid Credentials
    await this.page.getByRole("main").click();
  }

  async loginWithInvalidUsername(): Promise<void> {
    // Scenario: Login with Invalid Username
    await this.page.getByRole("main").click();
  }

  async loginWithInvalidPassword(): Promise<void> {
    // Scenario: Login with Invalid Password
    await this.page.getByRole("main").click();
  }

  async loginWithEmptyUsernameField(): Promise<void> {
    // Scenario: Login with Empty Username Field
    await this.page.getByRole("main").click();
  }

  async loginWithEmptyPasswordField(): Promise<void> {
    // Scenario: Login with Empty Password Field
    await this.page.getByRole("main").click();
  }

  async forgotLoginInfoLinkFunctionality(): Promise<void> {
    // Scenario: Forgot Login Info Link Functionality
    await this.page.getByRole("main").click();
  }
}