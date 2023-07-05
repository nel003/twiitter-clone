import "./globals.css";
import { ThemeProvider } from "../utils/app/ThemeContext";
import { StoreProvider } from "../utils/app/Store";
import { cookies } from "next/headers";

export const metadata = {
  title: {
    default: "Twitter Clone",
    template: "%s / Twitter Clone"
  },
  description: "This project is owned by Nel003",
  themeColor: "#ffffff"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = cookies().get("theme")?.value || "";
  metadata.themeColor = theme === "dark" ? "#0f1419" : "#ffffff";

  return (
    <html lang="en">
      <StoreProvider>
        <ThemeProvider defaultTheme={theme}>{children}</ThemeProvider>
      </StoreProvider>
    </html>
  );
}
