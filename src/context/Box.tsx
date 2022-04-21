import { useContext } from "react";
import { ThemeContext } from "./themeContext";
export const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}
    >
      Theme Content
    </div>
  );
};
