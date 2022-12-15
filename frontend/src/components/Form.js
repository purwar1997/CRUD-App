const Form = function () {
  return (
    <div className="mt-8">
      <h1 className="text-4xl font-semibold text-center">Create User</h1>

      <form className="mt-16 flex flex-col items-center gap-10" action="" method="post">
        <div className="flex justify-center gap-8">
          <div className="flex flex-col items-start gap-2">
            <label className="text-lg" htmlFor="username">
              Username
            </label>

            <input
              className="bg-[#FAF9FA] border border-gray-300 rounded px-3 py-2.5 w-72 focus:outline-[#656EF5]"
              type="text"
              name="username"
              id="username"
              required
            />
          </div>

          <div className="flex flex-col items-start gap-2">
            <label className="text-lg" htmlFor="email">
              Email
            </label>

            <input
              className="bg-[#FAF9FA] border border-gray-300 rounded px-3 py-2.5 w-72 focus:outline-[#656EF5]"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
        </div>

        <button
          className="bg-[#656EF5] text-lg text-white px-8 py-2 rounded cursor-pointer transition hover:opacity-90"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
