import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { RHFSignInSchema, RHFSignUpSchema } from "../../schema/RHFFormSchema";
import type { RHFSignUpValues } from "../../types/RHFForm.types";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export const RHFReactForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(isSignUp ? RHFSignUpSchema : RHFSignInSchema),
  });

  const onSubmit: SubmitHandler<RHFSignUpValues> = (data) => {
    console.log("Hook Form Data:", data);
    reset();
  };

  const renderError = (name: keyof RHFSignUpValues) =>
    errors[name] && (
      <p className="error" style={{ color: "red" }}>
        {errors[name]?.message?.toString()}
      </p>
    );

  return (
    <div className="max-w-md p-8 mx-auto shadow">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-4 text-2xl font-bold text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        {isSignUp && (
          <div className="mb-2">
            <input
              type="text"
              placeholder="Enter Name"
              {...register("name")}
              className="w-full border p-2 rounded border-[#c8c8c8]"
            />
            {renderError("name")}
          </div>
        )}

        <div className="mb-2">
          <input
            type="text"
            placeholder="Enter Email"
            {...register("email")}
            className="w-full border p-2 rounded border-[#c8c8c8]"
          />
          {renderError("email")}
        </div>

        {isSignUp && (
          <div className="mb-2">
            <input
              type="text"
              placeholder="Enter Phone"
              {...register("phone")}
              className="w-full border p-2 rounded border-[#c8c8c8]"
            />
            {renderError("phone")}
          </div>
        )}

        <div className="relative mb-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            {...register("password")}
            className="w-full border p-2 rounded border-[#c8c8c8] pr-10"
          />
          <button
            type="button"
            className="absolute text-blue-500 transform -translate-y-1/2 right-2 top-1/2"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
          {renderError("password")}
        </div>

        {isSignUp && (
          <div className="relative mb-2">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              className="w-full border p-2 rounded border-[#c8c8c8] pr-10"
            />
            <button
              type="button"
              className="absolute text-blue-500 transform -translate-y-1/2 right-2 top-1/2"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
            {renderError("confirmPassword")}
          </div>
        )}

        <div className="flex justify-between mt-4">
          <input
            type="submit"
            value={isSignUp ? "Submit" : "Login"}
            className="w-[45%] bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          />
          <button
            type="button"
            className="w-[45%] bg-[#f0f0f0] text-black border border-[#c8c8c8] p-2 rounded hover:bg-blue-600 hover:text-white"
            onClick={() => setIsSignUp((prev) => !prev)}
          >
            Switch to {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RHFReactForm;
