import { test } from "@playwright/test";
import { OpenNewAccountPage } from "../pages/OpenNewAccountPage";

test("Successful Creation of New Checking Account", async ({ page }) => {
  const successfulCreationOfNewCheckingAccountPage = new OpenNewAccountPage(page);
  await successfulCreationOfNewCheckingAccountPage.goto();
  await successfulCreationOfNewCheckingAccountPage.successfulCreationOfNewCheckingAccount();
});

test("Successful Creation of New Savings Account", async ({ page }) => {
  const successfulCreationOfNewSavingsAccountPage = new OpenNewAccountPage(page);
  await successfulCreationOfNewSavingsAccountPage.goto();
  await successfulCreationOfNewSavingsAccountPage.successfulCreationOfNewSavingsAccount();
});

test("Attempt to Create Account without Selecting Account Type", async ({ page }) => {
  const attemptToCreateAccountWithoutSelectingAccountTypePage = new OpenNewAccountPage(page);
  await attemptToCreateAccountWithoutSelectingAccountTypePage.goto();
  await attemptToCreateAccountWithoutSelectingAccountTypePage.attemptToCreateAccountWithoutSelectingAccountType();
});

test("Attempt to Create Account without Selecting Source Account", async ({ page }) => {
  const attemptToCreateAccountWithoutSelectingSourceAccountPage = new OpenNewAccountPage(page);
  await attemptToCreateAccountWithoutSelectingSourceAccountPage.goto();
  await attemptToCreateAccountWithoutSelectingSourceAccountPage.attemptToCreateAccountWithoutSelectingSourceAccount();
});

test("Open New Account with Insufficient Funds in Source Account", async ({ page }) => {
  const openNewAccountWithInsufficientFundsInSourceAccountPage = new OpenNewAccountPage(page);
  await openNewAccountWithInsufficientFundsInSourceAccountPage.goto();
  await openNewAccountWithInsufficientFundsInSourceAccountPage.openNewAccountWithInsufficientFundsInSourceAccount();
});

test("Display of Account Type and Source Account Options", async ({ page }) => {
  const displayOfAccountTypeAndSourceAccountOptionsPage = new OpenNewAccountPage(page);
  await displayOfAccountTypeAndSourceAccountOptionsPage.goto();
  await displayOfAccountTypeAndSourceAccountOptionsPage.displayOfAccountTypeAndSourceAccountOptions();
});