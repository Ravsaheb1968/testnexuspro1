import { test } from "@playwright/test";
import { UserRegistrationPage } from "../pages/UserRegistrationPage";

test("Successful User Registration with Valid Data", async ({ page }) => {
  const successfulUserRegistrationWithValidDataPage = new UserRegistrationPage(page);
  await successfulUserRegistrationWithValidDataPage.goto();
  await successfulUserRegistrationWithValidDataPage.successfulUserRegistrationWithValidData();
});

test("User Registration with an Already Existing Username", async ({ page }) => {
  const userRegistrationWithAnAlreadyExistingUsernamePage = new UserRegistrationPage(page);
  await userRegistrationWithAnAlreadyExistingUsernamePage.goto();
  await userRegistrationWithAnAlreadyExistingUsernamePage.userRegistrationWithAnAlreadyExistingUsername();
});

test("User Registration with Mismatched Passwords", async ({ page }) => {
  const userRegistrationWithMismatchedPasswordsPage = new UserRegistrationPage(page);
  await userRegistrationWithMismatchedPasswordsPage.goto();
  await userRegistrationWithMismatchedPasswordsPage.userRegistrationWithMismatchedPasswords();
});

test("User Registration with Empty Mandatory Fields", async ({ page }) => {
  const userRegistrationWithEmptyMandatoryFieldsPage = new UserRegistrationPage(page);
  await userRegistrationWithEmptyMandatoryFieldsPage.goto();
  await userRegistrationWithEmptyMandatoryFieldsPage.userRegistrationWithEmptyMandatoryFields();
});

test("Navigation to Registration Page", async ({ page }) => {
  const navigationToRegistrationPagePage = new UserRegistrationPage(page);
  await navigationToRegistrationPagePage.goto();
  await navigationToRegistrationPagePage.navigationToRegistrationPage();
});