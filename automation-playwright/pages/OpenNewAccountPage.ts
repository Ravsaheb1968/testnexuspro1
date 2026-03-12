import { Page } from "@playwright/test";

export class OpenNewAccountPage {
  constructor(private readonly page: Page) {}

  readonly moduleRoot = this.page.getByRole("main");

  async goto(): Promise<void> {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  }

  async successfulCreationOfNewCheckingAccount(): Promise<void> {
    // Scenario: Successful Creation of New Checking Account
    await this.page.getByRole("main").click();
  }

  async successfulCreationOfNewSavingsAccount(): Promise<void> {
    // Scenario: Successful Creation of New Savings Account
    await this.page.getByRole("main").click();
  }

  async attemptToCreateAccountWithoutSelectingAccountType(): Promise<void> {
    // Scenario: Attempt to Create Account without Selecting Account Type
    await this.page.getByRole("main").click();
  }

  async attemptToCreateAccountWithoutSelectingSourceAccount(): Promise<void> {
    // Scenario: Attempt to Create Account without Selecting Source Account
    await this.page.getByRole("main").click();
  }

  async openNewAccountWithInsufficientFundsInSourceAccount(): Promise<void> {
    // Scenario: Open New Account with Insufficient Funds in Source Account
    await this.page.getByRole("main").click();
  }

  async displayOfAccountTypeAndSourceAccountOptions(): Promise<void> {
    // Scenario: Display of Account Type and Source Account Options
    await this.page.getByRole("main").click();
  }
}