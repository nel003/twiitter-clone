"use client";
import { useContext } from "react";
import ThemeContext from "@/utils/ThemeContext";
import Store from "@/utils/Store";

export default function Explore() {
  const { state, dispatch} = useContext(Store);
  const { theme, updateTheme, systemTheme } = useContext(ThemeContext);
  
  return (
    <>
      <div className="flex flex-col text-black dark:text-light gap-2">
        <p>Theme: {theme}</p>
        <p>System: {systemTheme}</p>
        <p>Input: {state.user.name}</p>
        <button
          className="py-2 px-8 bg-black dark:bg-light dark:text-black text-light"
          onClick={() => updateTheme(theme === "light" ? "dark" : "light")}
        >
          Toogle Theme
        </button>
        <input className="text-black" type="text" value={state.user.name} onChange={(e) => dispatch({type: 'updateName', payload: e.target.value})} />
      </div>
    </>
  );
}
