import { cookies } from "next/headers";
import { Twitter } from "../components/Icons";

export default function Loading() {
    const theme = cookies().get("theme")?.value || "light";
    return <>
        <div className="grid place-items-center h-screen w-full">
            <Twitter className="text-7xl text-accent" />
        </div>
    </>
}