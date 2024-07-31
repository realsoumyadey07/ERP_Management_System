import { Link } from "react-router-dom";
import common from "../services/common";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type RegisterFormInput = {
  username: string;
  email: string;
  password: string;
};

export default function Register() {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<RegisterFormInput>();
  const onSubmit: SubmitHandler<RegisterFormInput> = (
    data: RegisterFormInput
  ) => {};
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-100">
      <div className="p-5 shadow-lg shadow-gray-500/50 flex flex-col gap-7 w-80 border-blue-500 border-t-4 rounded-md bg-white">
        <div className="text-center">
          <h2 className="font-semibold text-xl hover:text-blue-600">
            Register to {common.getEnv("VITE_APPLICATION_NAME")}
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
          <div>
            <label htmlFor="email" className="text-sm font-semibold">
              Username
            </label>
            <input
              type="text"
              className="bg-gray-200 p-1 outline-none w-full border-gray-300 rounded-sm border"
              {...register("username", {
                required: "Username is required!",
              })}
            />
            {errors.username && (
              <p className="text-red-600 text-sm">{errors.username.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              className="bg-gray-200 p-1 outline-none w-full border-gray-300 rounded-sm border"
              {...register("email", {
                required: "Email is required!",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-semibold">Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              className="bg-gray-200 p-1 border-gray-300 rounded-sm border outline-none w-full"
              {...register("password", {
                required: "Password is required!",
              })}
            />
            <span
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute ml-[-30px] mt-[10px]"
            >
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password.message}</p>
            )}
          </div>
          
          <div className="mt-5">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-1 rounded-sm  text-sm hover:bg-blue-600"
            >
              Log In
            </button>
            <div className="text-center">
              <a
                href="#"
                className="flex-row flex items-center justify-center text-sm"
              >
                <p>Already have an account? </p>
                <Link
                  to="/login"
                  className="text-sm hover:underline text-blue-600"
                >
                  Login
                </Link>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
