import { useState } from "react";
import Password from "./Password";
import ThemeButton from "./ThemeButton";

export default function Login() {
  const [formData, setFormData] = useState({});
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/user", {
        body: JSON.stringify(formData),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="min-h-screen relative dark:bg-slate-800">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center h-screen"
      >
        <h2 className="text-green-600 text-[3rem] mb-4 font-bold">Login</h2>
        <input
          className="px-6 py-2 md:text-xl border my-4 rounded-lg bg-gray-100 dark:bg-gray-800 dark:border-slate-700 dark:text-white"
          type="email"
          placeholder="E-Mail"
          name="email"
          onChange={handleChange}
        />
        <Password
          type="password"
          placeholder="Password"
          handleChange={handleChange}
        />
        <p className="dark:text-white flex flex-col text-center">
          Don't have an account? <a href="/signup">Click here to signup</a>
        </p>
        <input
          className="px-6 py-2 md:text-xl border my-4 rounded-lg bg-green-600 text-white border-none"
          type="submit"
          value={"Log In"}
        />
      </form>
      <ThemeButton />
    </div>
  );
}
