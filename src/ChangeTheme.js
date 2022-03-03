import React from "react";
import { ThemeContent } from "./theme-context";

export default function ChangeTheme() {
  return (
    <ThemeContent.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: theme.background,
            color: theme.foreground
          }}
        >
          Change Theme
        </button>
      )}
    </ThemeContent.Consumer>
  );
}
