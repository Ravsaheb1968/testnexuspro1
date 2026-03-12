import { Page } from "@playwright/test";

export class BillPaymentPage {
  constructor(private readonly page: Page) {}

  readonly moduleRoot = this.page.getByRole("main");

  async goto(): Promise<void> {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  }

  async successfulBillPaymentWithValidData(): Promise<void> {
    // Scenario: Successful Bill Payment with Valid Data
    await this.page.getByRole("main").click();
  }

  async billPaymentWithMismatchedAccountNumbers(): Promise<void> {
    // Scenario: Bill Payment with Mismatched Account Numbers
    await this.page.getByRole("main").click();
  }

  async billPaymentWithEmptyMandatoryFields(): Promise<void> {
    // Scenario: Bill Payment with Empty Mandatory Fields
    await this.page.getByRole("main").click();
  }

  async billPaymentWithAmountExceedingSourceAccountBalance(): Promise<void> {
    // Scenario: Bill Payment with Amount Exceeding Source Account Balance
    await this.page.getByRole("main").click();
  }

  async billPaymentWithZeroOrNegativeAmount(): Promise<void> {
    // Scenario: Bill Payment with Zero or Negative Amount
    await this.page.getByRole("main").click();
  }

  async displayOfBillPayFormFields(): Promise<void> {
    // Scenario: Display of Bill Pay Form Fields
    await this.page.getByRole("main").click();
  }
}