"use client";
import { useContext } from "react";
import ThemeContext from "../../../utils/app/ThemeContext";
import Store from "../../../utils/app/Store";
import { useAuth, UserProtected } from "../../../utils/app/useAuth";

export default function Explore() {
  const { state, dispatch} = useContext(Store);
  const { theme, updateTheme, systemTheme } = useContext(ThemeContext);
  const { user } = useAuth();

  return (
    <UserProtected>
      <div className="flex flex-col text-black dark:text-light gap-2">
        <p>Theme: {theme}</p>
        <p>System: {systemTheme}</p>
        <p>Input: {state.user?.name}</p>
        <button
          className="py-2 px-8 bg-black dark:bg-light dark:text-black text-light"
          onClick={() => updateTheme(theme === "light" ? "dark" : "light")}
        >
          Toogle Theme
        </button>
        <input className="text-black" type="text" value={state.user?.name} onChange={(e) => dispatch({type: 'updateName', payload: e.target.value})} />
      </div>
    </UserProtected>
  );
}
