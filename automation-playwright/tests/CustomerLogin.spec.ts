import { test } from "@playwright/test";
import { CustomerLoginPage } from "../pages/CustomerLoginPage";

test("Successful Login with Valid Credentials", async ({ page }) => {
  const successfulLoginWithValidCredentialsPage = new CustomerLoginPage(page);
  await successfulLoginWithValidCredentialsPage.goto();
  await successfulLoginWithValidCredentialsPage.successfulLoginWithValidCredentials();
});

test("Login with Invalid Username", async ({ page }) => {
  const loginWithInvalidUsernamePage = new CustomerLoginPage(page);
  await loginWithInvalidUsernamePage.goto();
  await loginWithInvalidUsernamePage.loginWithInvalidUsername();
});

test("Login with Invalid Password", async ({ page }) => {
  const loginWithInvalidPasswordPage = new CustomerLoginPage(page);
  await loginWithInvalidPasswordPage.goto();
  await loginWithInvalidPasswordPage.loginWithInvalidPassword();
});

test("Login with Empty Username Field", async ({ page }) => {
  const loginWithEmptyUsernameFieldPage = new CustomerLoginPage(page);
  await loginWithEmptyUsernameFieldPage.goto();
  await loginWithEmptyUsernameFieldPage.loginWithEmptyUsernameField();
});

test("Login with Empty Password Field", async ({ page }) => {
  const loginWithEmptyPasswordFieldPage = new CustomerLoginPage(page);
  await loginWithEmptyPasswordFieldPage.goto();
  await loginWithEmptyPasswordFieldPage.loginWithEmptyPasswordField();
});

test("Forgot Login Info Link Functionality", async ({ page }) => {
  const forgotLoginInfoLinkFunctionalityPage = new CustomerLoginPage(page);
  await forgotLoginInfoLinkFunctionalityPage.goto();
  await forgotLoginInfoLinkFunctionalityPage.forgotLoginInfoLinkFunctionality();
});