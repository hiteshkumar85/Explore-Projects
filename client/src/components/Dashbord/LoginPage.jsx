function LoginPage() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-950 via-purple-950 to-black p-6">
        <div className="w-full max-w-lg min-h-[550px] bg-gradient-to-b from-gray-900/80 to-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-purple-800/40 flex flex-col justify-center">
          <h2 className="text-5xl font-extrabold text-center text-purple-300 mb-10 tracking-wide drop-shadow-lg">
            Login
          </h2>
          <form className="space-y-8">
            <div>
              <label className="block text-[20px] pl-[10px] font-medium text-purple-200">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-3 px-5 py-4 rounded-2xl bg-gray-900/60 border border-purple-700/50 text-white placeholder-[#fff] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition text-lg"
              />
            </div>
            <div>
              <label className="block text-[20px] pl-[10px]  font-medium text-purple-200">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-3 px-5 py-4 rounded-2xl bg-gray-900/60 border border-purple-700/50 text-white placeholder focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition text-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-600 hover:via-purple-500 hover:to-indigo-500 text-white font-semibold rounded-2xl text-lg transition duration-300 shadow-lg hover:shadow-purple-800/60"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
