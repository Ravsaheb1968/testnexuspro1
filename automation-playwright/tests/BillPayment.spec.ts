import { test } from "@playwright/test";
import { BillPaymentPage } from "../pages/BillPaymentPage";

test("Successful Bill Payment with Valid Data", async ({ page }) => {
  const successfulBillPaymentWithValidDataPage = new BillPaymentPage(page);
  await successfulBillPaymentWithValidDataPage.goto();
  await successfulBillPaymentWithValidDataPage.successfulBillPaymentWithValidData();
});

test("Bill Payment with Mismatched Account Numbers", async ({ page }) => {
  const billPaymentWithMismatchedAccountNumbersPage = new BillPaymentPage(page);
  await billPaymentWithMismatchedAccountNumbersPage.goto();
  await billPaymentWithMismatchedAccountNumbersPage.billPaymentWithMismatchedAccountNumbers();
});

test("Bill Payment with Empty Mandatory Fields", async ({ page }) => {
  const billPaymentWithEmptyMandatoryFieldsPage = new BillPaymentPage(page);
  await billPaymentWithEmptyMandatoryFieldsPage.goto();
  await billPaymentWithEmptyMandatoryFieldsPage.billPaymentWithEmptyMandatoryFields();
});

test("Bill Payment with Amount Exceeding Source Account Balance", async ({ page }) => {
  const billPaymentWithAmountExceedingSourceAccountBalancePage = new BillPaymentPage(page);
  await billPaymentWithAmountExceedingSourceAccountBalancePage.goto();
  await billPaymentWithAmountExceedingSourceAccountBalancePage.billPaymentWithAmountExceedingSourceAccountBalance();
});

test("Bill Payment with Zero or Negative Amount", async ({ page }) => {
  const billPaymentWithZeroOrNegativeAmountPage = new BillPaymentPage(page);
  await billPaymentWithZeroOrNegativeAmountPage.goto();
  await billPaymentWithZeroOrNegativeAmountPage.billPaymentWithZeroOrNegativeAmount();
});

test("Display of Bill Pay Form Fields", async ({ page }) => {
  const displayOfBillPayFormFieldsPage = new BillPaymentPage(page);
  await displayOfBillPayFormFieldsPage.goto();
  await displayOfBillPayFormFieldsPage.displayOfBillPayFormFields();
});