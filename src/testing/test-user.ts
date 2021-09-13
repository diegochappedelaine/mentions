import { User } from "types";

export const TEST_USER = {
  token: process.env.REACT_APP_TEST_USER_TOKEN,
  accountId: process.env.REACT_APP_TEST_USER_ACCOUNT_ID,
  alertId: process.env.REACT_APP_TEST_USER_ALERT_ID,
} as User;
