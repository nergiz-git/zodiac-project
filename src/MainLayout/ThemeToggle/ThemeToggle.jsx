import { useEffect, useState } from "react";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        fontSize: "24px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
      }}
    >
      {theme === "light" ? <AiOutlineMoon /> : <AiOutlineSun />}
    </button>
  );
}

export default ThemeToggle;
