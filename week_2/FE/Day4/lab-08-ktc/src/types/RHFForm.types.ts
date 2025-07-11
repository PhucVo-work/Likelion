export interface RHFSignInValues {
  email: string;
  password: string;
}

export interface RHFSignUpValues extends RHFSignInValues {
  name: string;
  phone: string;
  confirmPassword: string;
}
