import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { createContext, useState } from "react";
import Signup from "./components/Signup";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
