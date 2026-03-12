import { Page } from "@playwright/test";

export class UserRegistrationPage {
  constructor(private readonly page: Page) {}

  readonly moduleRoot = this.page.getByRole("main");

  async goto(): Promise<void> {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  }

  async successfulUserRegistrationWithValidData(): Promise<void> {
    // Scenario: Successful User Registration with Valid Data
    await this.page.getByRole("main").click();
  }

  async userRegistrationWithAnAlreadyExistingUsername(): Promise<void> {
    // Scenario: User Registration with an Already Existing Username
    await this.page.getByRole("main").click();
  }

  async userRegistrationWithMismatchedPasswords(): Promise<void> {
    // Scenario: User Registration with Mismatched Passwords
    await this.page.getByRole("main").click();
  }

  async userRegistrationWithEmptyMandatoryFields(): Promise<void> {
    // Scenario: User Registration with Empty Mandatory Fields
    await this.page.getByRole("main").click();
  }

  async navigationToRegistrationPage(): Promise<void> {
    // Scenario: Navigation to Registration Page
    await this.page.getByRole("main").click();
  }
}