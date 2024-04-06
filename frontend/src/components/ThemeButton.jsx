import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "../App";
import { useContext, useEffect } from "react";

export default function ThemeButton() {
  const [theme, setTheme] = useContext(ThemeContext);
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <button
      className="absolute bottom-8 right-8 dark:text-white md:text-3xl shadow md:shadow-lg shadow-gray-400 dark:shadow-black rounded-full p-4"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
    </button>
  );
}
