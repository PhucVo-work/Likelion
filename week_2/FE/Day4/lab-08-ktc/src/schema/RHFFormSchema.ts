import * as Yup from "yup";

export const RHFSignInSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string().required("Password is required"),
});

export const RHFSignUpSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(/^\d{10,11}$/, "Phone must be 10-11 digits"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
      "Password must include uppercase, lowercase, number, special char"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});
