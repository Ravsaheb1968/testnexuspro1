import { test } from "@playwright/test";
import { AccountOverviewPage } from "../pages/AccountOverviewPage";

test("Display of User Accounts and Details", async ({ page }) => {
  const displayOfUserAccountsAndDetailsPage = new AccountOverviewPage(page);
  await displayOfUserAccountsAndDetailsPage.goto();
  await displayOfUserAccountsAndDetailsPage.displayOfUserAccountsAndDetails();
});

test("Display of Total Balance", async ({ page }) => {
  const displayOfTotalBalancePage = new AccountOverviewPage(page);
  await displayOfTotalBalancePage.goto();
  await displayOfTotalBalancePage.displayOfTotalBalance();
});

test("Navigation to Account Activity from Account Number Link", async ({ page }) => {
  const navigationToAccountActivityFromAccountNumberLinkPage = new AccountOverviewPage(page);
  await navigationToAccountActivityFromAccountNumberLinkPage.goto();
  await navigationToAccountActivityFromAccountNumberLinkPage.navigationToAccountActivityFromAccountNumberLink();
});

test("Access Denied for Unauthenticated User to Account Overview", async ({ page }) => {
  const accessDeniedForUnauthenticatedUserToAccountOverviewPage = new AccountOverviewPage(page);
  await accessDeniedForUnauthenticatedUserToAccountOverviewPage.goto();
  await accessDeniedForUnauthenticatedUserToAccountOverviewPage.accessDeniedForUnauthenticatedUserToAccountOverview();
});