import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");
  const [color, setColor] = useState("blue");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-color", color);
  }, [theme, color]);

  return { theme, setTheme, color, setColor };
};

export default useTheme;
