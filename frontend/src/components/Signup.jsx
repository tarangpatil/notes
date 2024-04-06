import ThemeButton from "./ThemeButton";

export default function Signup() {
  return (
    <div className="min-h-screen relative dark:bg-slate-800">
      <form
        action=""
        method="POST"
        className="flex flex-col items-center justify-center h-screen"
      >
        <h2 className="text-green-600 text-[3rem] mb-4 font-bold">Sign up</h2>
        <input
          className="px-6 py-2 md:text-xl border my-4 rounded-lg bg-gray-100 dark:bg-gray-800 dark:border-slate-700 dark:text-white"
          type="text"
          placeholder="Name"
          required={true}
        />
        <input
          className="px-6 py-2 md:text-xl border my-4 rounded-lg bg-gray-100 dark:bg-gray-800 dark:border-slate-700 dark:text-white"
          type="number"
          placeholder="Age"
        />
        <input
          className="px-6 py-2 md:text-xl border my-4 rounded-lg bg-gray-100 dark:bg-gray-800 dark:border-slate-700 dark:text-white"
          type="email"
          placeholder="E-Mail ID"
          required={true}
        />
        <input
          className="px-6 py-2 md:text-xl border my-4 rounded-lg bg-gray-100 dark:bg-gray-800 dark:border-slate-700 dark:text-white"
          type="password"
          placeholder="Password"
          required={true}
        />
        <p className="dark:text-white flex flex-col text-center">
          Already have an account? <a href="/login">Click here to login</a>
        </p>
        <input
          className="px-6 py-2 md:text-xl border my-4 rounded-lg bg-green-600 text-white border-none"
          type="submit"
          value={"Sign - Up"}
        />
      </form>
      <ThemeButton />
    </div>
  );
}
