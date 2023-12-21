import "./DarkMode.scss";
import { useState, useEffect } from "react";
import "./DarkMode.scss";

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default DarkMode;
