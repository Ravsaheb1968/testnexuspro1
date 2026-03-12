import { test } from "@playwright/test";
import { AccountActivityPage } from "../pages/AccountActivityPage";

test("Display of Account Details and Transaction List", async ({ page }) => {
  const displayOfAccountDetailsAndTransactionListPage = new AccountActivityPage(page);
  await displayOfAccountDetailsAndTransactionListPage.goto();
  await displayOfAccountDetailsAndTransactionListPage.displayOfAccountDetailsAndTransactionList();
});

test("Filter Transactions by Type - Credit", async ({ page }) => {
  const filterTransactionsByTypeCreditPage = new AccountActivityPage(page);
  await filterTransactionsByTypeCreditPage.goto();
  await filterTransactionsByTypeCreditPage.filterTransactionsByTypeCredit();
});

test("Filter Transactions by Type - Debit", async ({ page }) => {
  const filterTransactionsByTypeDebitPage = new AccountActivityPage(page);
  await filterTransactionsByTypeDebitPage.goto();
  await filterTransactionsByTypeDebitPage.filterTransactionsByTypeDebit();
});

test("Filter Transactions by Type - All", async ({ page }) => {
  const filterTransactionsByTypeAllPage = new AccountActivityPage(page);
  await filterTransactionsByTypeAllPage.goto();
  await filterTransactionsByTypeAllPage.filterTransactionsByTypeAll();
});

test("Filter Transactions by Valid Date Range", async ({ page }) => {
  const filterTransactionsByValidDateRangePage = new AccountActivityPage(page);
  await filterTransactionsByValidDateRangePage.goto();
  await filterTransactionsByValidDateRangePage.filterTransactionsByValidDateRange();
});

test("Filter Transactions by Date Range with No Transactions", async ({ page }) => {
  const filterTransactionsByDateRangeWithNoTransactionsPage = new AccountActivityPage(page);
  await filterTransactionsByDateRangeWithNoTransactionsPage.goto();
  await filterTransactionsByDateRangeWithNoTransactionsPage.filterTransactionsByDateRangeWithNoTransactions();
});