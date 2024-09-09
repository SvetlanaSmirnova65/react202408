import { Button } from "../button/button";
import { useTheme } from "../theme-context/use-theme";

export const ThemeButton = () => {
  const { value, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {value === "dark" ? "Переключить на светлую" : "Переключить на темную"}
    </Button>
  );
};
