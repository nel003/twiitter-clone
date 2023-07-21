import "./globals.css";
import { ThemeProvider } from "../utils/app/ThemeContext";
import { StoreProvider } from "../utils/app/Store";
import { AuthProvider } from "../utils/app/useAuth"; 
import { cookies } from "next/headers";
import { Suspense } from "react";
import Loading from "./loading";
import User from "../utils/api/getUser";

export const metadata = {
  title: {
    default: "Twitter Clone",
    template: "%s / Twitter Clone",
  },
  description: "This project is owned by Nel003",
  themeColor: "#ffffff",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = cookies().get("theme")?.value || "";
  metadata.themeColor = theme === "dark" ? "#0f1419" : "#ffffff";

  const refreshToken = cookies().get("refreshToken")?.value!;
  const user = (refreshToken ? await User(refreshToken) : null);

  return (
    <html lang="en">
      <StoreProvider>
        <AuthProvider initialUser={user}>
        <ThemeProvider defaultTheme={theme}>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </ThemeProvider>
        </AuthProvider>
      </StoreProvider>
    </html>
  );
}
