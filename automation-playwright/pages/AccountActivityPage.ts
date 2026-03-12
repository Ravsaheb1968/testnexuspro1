import { Page } from "@playwright/test";

export class AccountActivityPage {
  constructor(private readonly page: Page) {}

  readonly moduleRoot = this.page.getByRole("main");

  async goto(): Promise<void> {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  }

  async displayOfAccountDetailsAndTransactionList(): Promise<void> {
    // Scenario: Display of Account Details and Transaction List
    await this.page.getByRole("main").click();
  }

  async filterTransactionsByTypeCredit(): Promise<void> {
    // Scenario: Filter Transactions by Type - Credit
    await this.page.getByRole("main").click();
  }

  async filterTransactionsByTypeDebit(): Promise<void> {
    // Scenario: Filter Transactions by Type - Debit
    await this.page.getByRole("main").click();
  }

  async filterTransactionsByTypeAll(): Promise<void> {
    // Scenario: Filter Transactions by Type - All
    await this.page.getByRole("main").click();
  }

  async filterTransactionsByValidDateRange(): Promise<void> {
    // Scenario: Filter Transactions by Valid Date Range
    await this.page.getByRole("main").click();
  }

  async filterTransactionsByDateRangeWithNoTransactions(): Promise<void> {
    // Scenario: Filter Transactions by Date Range with No Transactions
    await this.page.getByRole("main").click();
  }
}