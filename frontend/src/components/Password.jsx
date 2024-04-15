import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Password({ placeholder, handleChange }) {
  const [visibility, setVisibility] = useState(false);
  return (
    <div className="relative">
      <input
        onChange={handleChange}
        name="password"
        className="px-6 py-2 md:text-xl border my-4 rounded-lg bg-gray-100 dark:bg-gray-800 dark:border-slate-700 dark:text-white"
        {...{ type: visibility ? "text" : "password", placeholder }}
      />
      {visibility ? (
        <FaEyeSlash
          onClick={() => setVisibility(!visibility)}
          className="dark:text-white text-xl absolute top-[50%] translate-y-[-50%] right-6"
        />
      ) : (
        <FaEye
          onClick={() => setVisibility(!visibility)}
          className="dark:text-white text-xl absolute top-[50%] translate-y-[-50%] right-6"
        />
      )}
    </div>
  );
}
