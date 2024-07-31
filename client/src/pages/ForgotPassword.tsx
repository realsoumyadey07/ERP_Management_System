import { SubmitHandler, useForm } from "react-hook-form";

type ForgetPasswordInput = {
  email: string;
};
export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ForgetPasswordInput>();
  const onSubmit: SubmitHandler<ForgetPasswordInput> = (
    data: ForgetPasswordInput
  ) => {};
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-100">
      <div className="p-5 shadow-lg shadow-gray-500/50 flex flex-col gap-7 w-80 border-blue-500 border-t-4 rounded-md bg-white">
        <div className="text-center">
          <h2 className="font-semibold text-lg hover:text-blue-600">
            Forget Password
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <div className="text-center">
            <p className="text-sm">
              Provide the email address associated with your account to recover
              your password.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Email</p>
            <input
              type="email"
              {...register("email", {
                required: "Email is required!",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="bg-gray-200 border-gray-300 rounded-sm border mt-2 outline-none w-full"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full mt-2 bg-blue-500 text-white py-1 rounded-sm  text-sm hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
