import { Page } from "@playwright/test";

export class AccountOverviewPage {
  constructor(private readonly page: Page) {}

  readonly moduleRoot = this.page.getByRole("main");

  async goto(): Promise<void> {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  }

  async displayOfUserAccountsAndDetails(): Promise<void> {
    // Scenario: Display of User Accounts and Details
    await this.page.getByRole("main").click();
  }

  async displayOfTotalBalance(): Promise<void> {
    // Scenario: Display of Total Balance
    await this.page.getByRole("main").click();
  }

  async navigationToAccountActivityFromAccountNumberLink(): Promise<void> {
    // Scenario: Navigation to Account Activity from Account Number Link
    await this.page.getByRole("main").click();
  }

  async accessDeniedForUnauthenticatedUserToAccountOverview(): Promise<void> {
    // Scenario: Access Denied for Unauthenticated User to Account Overview
    await this.page.getByRole("main").click();
  }
}