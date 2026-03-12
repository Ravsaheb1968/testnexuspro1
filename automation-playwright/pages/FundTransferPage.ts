import { Page } from "@playwright/test";

export class FundTransferPage {
  constructor(private readonly page: Page) {}

  readonly moduleRoot = this.page.getByRole("main");

  async goto(): Promise<void> {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  }

  async successfulFundTransferBetweenAccounts(): Promise<void> {
    // Scenario: Successful Fund Transfer between Accounts
    await this.page.getByRole("main").click();
  }

  async fundTransferExceedingSourceAccountBalance(): Promise<void> {
    // Scenario: Fund Transfer Exceeding Source Account Balance
    await this.page.getByRole("main").click();
  }

  async fundTransferWithZeroAmount(): Promise<void> {
    // Scenario: Fund Transfer with Zero Amount
    await this.page.getByRole("main").click();
  }

  async fundTransferWithNegativeAmount(): Promise<void> {
    // Scenario: Fund Transfer with Negative Amount
    await this.page.getByRole("main").click();
  }

  async fundTransferWithEmptyAmountField(): Promise<void> {
    // Scenario: Fund Transfer with Empty Amount Field
    await this.page.getByRole("main").click();
  }

  async displayOfSourceAndDestinationAccountDropdownsWithBalances(): Promise<void> {
    // Scenario: Display of Source and Destination Account Dropdowns with Balances
    await this.page.getByRole("main").click();
  }
}