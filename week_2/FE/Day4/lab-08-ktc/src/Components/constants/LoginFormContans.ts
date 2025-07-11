// import type { LoginMessageError, LoginRegex } from "../../types/LoginFormTypes";

// export const MESSAGE_ERROR: LoginMessageError = {
//   email: "Email error",
//   password: "Password error",
// };

// export const REGEX: LoginRegex = {
//   email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//   password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@$!%*?&]{8,}$/,
// };

// src/constants/LoginFormConstants.ts
import type { LoginMessageError, LoginRegex } from "../../types/LoginFormTypes";

export const MESSAGE_ERROR: LoginMessageError = {
  name: "Name is required",
  email: "Email is required",
  phone: "Phone is required",
  password: "Password is required",
  confirmPassword: "Confirm Password is required",
  invalidEmail: "Invalid email",
  invalidPhone: "Phone must be 10-11 digits",
  invalidPassword:
    "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character",
  passwordNotMatch: "Passwords do not match",
};

export const REGEX: LoginRegex = {
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
  phone: /^\d{10,11}$/,
};
