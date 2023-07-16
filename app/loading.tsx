"use client"
import { Twitter } from "../components/Icons";

export default function Loading() {
    return <>
        <div className="grid place-items-center h-screen w-full absolute top-0 left-0 z-[10000] bg-white dark:bg-black">
            <Twitter className="text-7xl text-accent" />
        </div>
    </>
}