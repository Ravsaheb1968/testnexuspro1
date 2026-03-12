import { test } from "@playwright/test";
import { FundTransferPage } from "../pages/FundTransferPage";

test("Successful Fund Transfer between Accounts", async ({ page }) => {
  const successfulFundTransferBetweenAccountsPage = new FundTransferPage(page);
  await successfulFundTransferBetweenAccountsPage.goto();
  await successfulFundTransferBetweenAccountsPage.successfulFundTransferBetweenAccounts();
});

test("Fund Transfer Exceeding Source Account Balance", async ({ page }) => {
  const fundTransferExceedingSourceAccountBalancePage = new FundTransferPage(page);
  await fundTransferExceedingSourceAccountBalancePage.goto();
  await fundTransferExceedingSourceAccountBalancePage.fundTransferExceedingSourceAccountBalance();
});

test("Fund Transfer with Zero Amount", async ({ page }) => {
  const fundTransferWithZeroAmountPage = new FundTransferPage(page);
  await fundTransferWithZeroAmountPage.goto();
  await fundTransferWithZeroAmountPage.fundTransferWithZeroAmount();
});

test("Fund Transfer with Negative Amount", async ({ page }) => {
  const fundTransferWithNegativeAmountPage = new FundTransferPage(page);
  await fundTransferWithNegativeAmountPage.goto();
  await fundTransferWithNegativeAmountPage.fundTransferWithNegativeAmount();
});

test("Fund Transfer with Empty Amount Field", async ({ page }) => {
  const fundTransferWithEmptyAmountFieldPage = new FundTransferPage(page);
  await fundTransferWithEmptyAmountFieldPage.goto();
  await fundTransferWithEmptyAmountFieldPage.fundTransferWithEmptyAmountField();
});

test("Display of Source and Destination Account Dropdowns with Balances", async ({ page }) => {
  const displayOfSourceAndDestinationAccountDropdownsWithBalancesPage = new FundTransferPage(page);
  await displayOfSourceAndDestinationAccountDropdownsWithBalancesPage.goto();
  await displayOfSourceAndDestinationAccountDropdownsWithBalancesPage.displayOfSourceAndDestinationAccountDropdownsWithBalances();
});