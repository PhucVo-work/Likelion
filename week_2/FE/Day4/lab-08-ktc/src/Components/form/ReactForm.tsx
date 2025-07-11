import React, { useState } from "react";
import { MESSAGE_ERROR, REGEX } from "../constants/LoginFormContans";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const ReactForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  

  const [signInData, setSignInData] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  });

  const [signUpData, setSignUpData] = useState({
    name: { value: "", error: "" },
    email: { value: "", error: "" },
    phone: { value: "", error: "" },
    password: { value: "", error: "" },
    confirmPassword: { value: "", error: "" },
  });

  const validate = () => {
    const newErrors: any = {};

    if (isSignUp && !signUpData.name.value) {
      newErrors.name = "Name is required";
    }

    const emailData = isSignUp ? signUpData.email : signInData.email;
    if (!emailData.value) {
      newErrors.email = MESSAGE_ERROR.email;
    } else if (!REGEX.email.test(emailData.value)) {
      newErrors.email = "Invalid email";
    }

    if (isSignUp && !signUpData.phone.value) {
      newErrors.phone = "Phone is required";
    } else if (isSignUp && !/^\d{10,11}$/.test(signUpData.phone.value)) {
      newErrors.phone = "Phone must be 10-11 digits";
    }

    const passwordData = isSignUp ? signUpData.password : signInData.password;
    if (!passwordData.value) {
      newErrors.password = MESSAGE_ERROR.password;
    } else if (!REGEX.password.test(passwordData.value)) {
      newErrors.password =
        "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character";
    }

    if (isSignUp && !signUpData.confirmPassword.value) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (
      isSignUp &&
      signUpData.confirmPassword.value !== signUpData.password.value
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let error = "";

    switch (name) {
      case "name":
        if (!value) error = MESSAGE_ERROR.name;
        break;

      case "email":
        if (!value) error = MESSAGE_ERROR.email;
        else if (!REGEX.email.test(value)) error = MESSAGE_ERROR.invalidEmail;
        break;

      case "phone":
        if (!value) error = MESSAGE_ERROR.phone;
        else if (!REGEX.phone.test(value)) error = MESSAGE_ERROR.invalidPhone;
        break;

      case "password":
        if (!value) error = MESSAGE_ERROR.password;
        else if (!REGEX.password.test(value))
          error = MESSAGE_ERROR.invalidPassword;
        break;

      case "confirmPassword":
        if (!value) error = MESSAGE_ERROR.confirmPassword;
        else if (value !== signUpData.password.value)
          error = MESSAGE_ERROR.passwordNotMatch;
        break;

      default:
        break;
    }

    if (isSignUp) {
      setSignUpData((prev) => ({
        ...prev,
        [name]: { value, error },
      }));
    } else {
      setSignInData((prev) => ({
        ...prev,
        [name]: { value, error },
      }));
    }
  };  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      if (isSignUp) {
        setSignUpData({
          ...signUpData,
          name: { ...signUpData.name, error: validationErrors.name || "" },
          email: { ...signUpData.email, error: validationErrors.email || "" },
          phone: { ...signUpData.phone, error: validationErrors.phone || "" },
          password: {
            ...signUpData.password,
            error: validationErrors.password || "",
          },
          confirmPassword: {
            ...signUpData.confirmPassword,
            error: validationErrors.confirmPassword || "",
          },
        });
      } else {
        setSignInData({
          ...signInData,
          email: { ...signInData.email, error: validationErrors.email || "" },
          password: {
            ...signInData.password,
            error: validationErrors.password || "",
          },
        });
      }
      return;
    }
    console.log("Form submitted:", isSignUp ? signUpData : signInData);
  };

  console.log(
    isSignUp ? JSON.stringify(signUpData) : JSON.stringify(signInData)
  );

  return (
    <div className="max-w-md p-8 mx-auto shadow">
      <form onSubmit={handleSubmit}>
        <h2 className="mb-4 text-2xl font-bold text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        {isSignUp && (
          <div
            className={`custom-input ${
              signUpData.name.error && "custom-input-error"
            }`}
          >
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              value={signUpData.name.value}
              onChange={handleChange}
              className="w-full border p-2 rounded my-2 border-[#c8c8c8]"
            />
            {signUpData.name.error && (
              <p className="error" style={{ color: "red" }}>
                {signUpData.name.error}
              </p>
            )}
          </div>
        )}

        <div
          className={`custom-input ${
            (isSignUp ? signUpData.email.error : signInData.email.error) &&
            "custom-input-error"
          }`}
        >
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={isSignUp ? signUpData.email.value : signInData.email.value}
            onChange={handleChange}
            className="w-full border p-2 rounded my-2 border-[#c8c8c8]"
          />
          {(isSignUp ? signUpData.email.error : signInData.email.error) && (
            <p className="error" style={{ color: "red" }}>
              {isSignUp ? signUpData.email.error : signInData.email.error}
            </p>
          )}
        </div>

        {isSignUp && (
          <div
            className={`custom-input ${
              signUpData.phone.error && "custom-input-error"
            }`}
          >
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter Phone"
              value={signUpData.phone.value}
              onChange={handleChange}
              className="w-full border p-2 rounded my-2 border-[#c8c8c8]"
            />
            {signUpData.phone.error && (
              <p className="error" style={{ color: "red" }}>
                {signUpData.phone.error}
              </p>
            )}
          </div>
        )}

        <div
          className={`custom-input ${
            (isSignUp
              ? signUpData.password.error
              : signInData.password.error) && "custom-input-error"
          }`}
        >
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter Password"
              value={
                isSignUp ? signUpData.password.value : signInData.password.value
              }
              onChange={handleChange}
              className="w-full border p-2 rounded my-2 border-[#c8c8c8] pr-10"
            />
            {isSignUp && (
              <button
                type="button"
                className="absolute text-blue-500 transform -translate-y-1/2 right-2 top-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            )}
          </div>
          {(isSignUp
            ? signUpData.password.error
            : signInData.password.error) && (
            <p className="error" style={{ color: "red" }}>
              {isSignUp ? signUpData.password.error : signInData.password.error}
            </p>
          )}
        </div>

        {isSignUp && (
          <div
            className={`custom-input ${
              signUpData.confirmPassword.error && "custom-input-error"
            }`}
          >
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={signUpData.confirmPassword.value}
                onChange={handleChange}
                className="w-full border p-2 rounded my-2 border-[#c8c8c8] pr-10"
              />
              <button
                type="button"
                className="absolute text-blue-500 transform -translate-y-1/2 right-2 top-1/2"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            {signUpData.confirmPassword.error && (
              <p className="error" style={{ color: "red" }}>
                {signUpData.confirmPassword.error}
              </p>
            )}
          </div>
        )}

        <div className="flex justify-between w-full mt-4">
          <input
            type="submit"
            value={isSignUp ? "Submit" : "Login"}
            className="w-[45%] bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          />
          <button
            className="w-[45%] bg-[#f0f0f0] text-black border border-[#c8c8c8] p-2 rounded hover:bg-blue-600 hover:text-white"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            Switch to {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReactForm;
