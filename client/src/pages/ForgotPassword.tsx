export default function ForgotPassword() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-100">
      <div className="p-5 shadow-lg shadow-gray-500/50 flex flex-col gap-7 w-80 border-blue-500 border-t-4 rounded-md bg-white">
        <div className="text-center">
          <h2 className="font-semibold text-lg">Forget Password</h2>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-center">
            <p>
              Provide the email address associated with your account to recover
              your password.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Email</p>
            <input
              type="email"
              className="bg-gray-200 border-gray-300 rounded-sm border mt-2 outline-none w-full"
            />
          </div>
          <div>
            <button className="w-full mt-2 bg-blue-500 text-white py-1 rounded-sm  text-sm hover:bg-blue-600">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
