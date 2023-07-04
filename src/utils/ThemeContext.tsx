"use client";
import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { ThemeType } from "./Types";
import  Head from "next/head";

const ThemeContext = createContext<ThemeType>({
  theme: "light",
  updateTheme: (theme: string) => {},
});

export function ThemeProvider({
  defaultTheme,
  children,
}: {
  defaultTheme: string;
  children: React.ReactNode;
}): JSX.Element {
  const [theme, setTheme] = useState(defaultTheme);
  const [systemTheme, setSystemTheme] = useState("");

  function updateTheme(theme: string) {
    Cookies.set("theme", theme, { expires: 365 });
    setTheme(theme);
  }

  useEffect(() => {
    const storedTheme = Cookies.get("theme") || "light";
    setTheme(storedTheme);
    setSystemTheme(
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", ({ matches }) => {
        setSystemTheme(matches ? "dark" : "light");
      });

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {
          console.log("Match Media Listener removed");
        });
    };
  }, [theme]);

  return (
      <ThemeContext.Provider value={{ theme, updateTheme, systemTheme }}>
        <body className={theme}>{children}</body>
      </ThemeContext.Provider>
  );
}
export default ThemeContext;
