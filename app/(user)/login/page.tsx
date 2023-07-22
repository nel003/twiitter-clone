"use client";
import { Apple, Close, Eye, EyeOff, GoogleColored, Twitter } from "../../../components/Icons"
import { useRef, useState } from "react"
import Home from "../../page";
import Link from "next/link";
import Cookies from "js-cookie";
import { useContext } from "react";
import { AuthContext } from "../../../utils/app/useAuth";

export default function Login() {
    const inputLabel = useRef<HTMLLabelElement>(null);
    const passwordLabel = useRef<HTMLLabelElement>(null);
    const [userInput, setUserInput] = useState("");     
    const [passwordInput, setPasswordInput] = useState("");     
    const [pwdPage, setPwdPage] = useState(false);     
    const [showPassword, setShowPassword] = useState(false);     
    const { dispatch } = useContext(AuthContext);
    const [error, setError] = useState("");

    function handleOnFocus() {
        if (userInput === "") {
            inputLabel.current?.classList.remove("top-[20%]");
            inputLabel.current?.classList.remove("text-lg");
            inputLabel.current?.classList.add("top-0");
            inputLabel.current?.classList.add("text-sm");
        }
        if (passwordInput === "") {
            passwordLabel.current?.classList.remove("top-[20%]");
            passwordLabel.current?.classList.remove("text-lg");
            passwordLabel.current?.classList.add("top-0");
            passwordLabel.current?.classList.add("text-sm");
        }
    }
    function handleOnBlur() {
        if (userInput === "") {
            inputLabel.current?.classList.add("top-[20%]");
            inputLabel.current?.classList.add("text-lg");
            inputLabel.current?.classList.remove("top-0");
            inputLabel.current?.classList.remove("text-sm");
        }
        if (passwordInput === "") {
            passwordLabel.current?.classList.add("top-[20%]");
            passwordLabel.current?.classList.add("text-lg");
            passwordLabel.current?.classList.remove("top-0");
            passwordLabel.current?.classList.remove("text-sm");
        }
    }

    async function submitForm(e: React.MouseEvent) {
        const target = e.target as HTMLButtonElement;
        target.disabled = true;
        target.innerText = "Logging in...";
        try {
            const res = await fetch("/api/user/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    usernameORemail: userInput.includes("@") && !userInput.startsWith("@") ? userInput : !userInput.startsWith("@") ? "@"+userInput:userInput,
                    password: passwordInput,
                })
            });
            if (res.status === 201) {
                const json = await res.json();
                const { success, refreshToken, ...user } = json;
                Cookies.set("refreshToken", refreshToken, {
                    expires: 7,
                });
                dispatch({type: "UPDATE_USER", payload: user});
            } else {
                throw res;
            }
        } catch (error) {
            const err = error as any;
            toast((await err.json()).error);
        }
        target.disabled = false;
        target.innerText = "Log in";
    }

    function toast(err: string) {
        setError(err);
        setTimeout(() => {
            setError("");
        }, 2000);
    }

    return <>
        <Home />
        <div className="w-screen h-screen bg-black/20 grid place-items-center absolute top-0 left-0">
            <div className="h-full w-full fixed sm:block sm:h-[40.5rem] sm:w-[37.5rem] bg-[#fff] dark:bg-[#000] rounded-none sm:rounded-2xl">
                <div className="w-full flex p-4">
                    <Link href="/">
                        <Close className="text-xl dark:text-light text-black" />
                    </Link>
                    <Twitter className="text-4xl dark:text-light text-black flex-grow pr-4" />
                </div>
                <div className="w-full h-[90%] sm:h-[75%] flex justify-center items-center">
                    <div className={` ${pwdPage ? 'w-[80%] sm:w-[70%]':'w-[75%] sm:w-[50%]'}`}>
                        <div className={` ${pwdPage ? "hidden":"block"}`}>
                            <h1 className="text-3xl dark:text-light text-black font-bold py-4">Sign in to Twitter</h1>
                            <button className="mt-6 mb-3 bg-black w-full dark:bg-light font-semibold dark:text-black text-light/80 py-2 text-sm rounded-full flex justify-center">
                                <GoogleColored className="text-lg mr-1"/>
                                Sign up with Google
                            </button>
                            <button className="bg-black w-full dark:bg-light font-bold dark:text-black text-light/80 py-2 text-sm rounded-full flex justify-center">
                                <Apple className="text-lg mr-1"/>
                                Sign up with Apple
                            </button>
                            <div className="w-full py-2 text-sm rounded-full relative flex justify-center">
                                <span className="absolute h-[0.5px] w-full bg block bg-black/30 dark:bg-light/30 top-[50%]"></span>
                                <p className="dark:text-light text-black px-3 bg-[#fff] dark:bg-[#000] text-sm relative">or</p>
                            </div>
                            <div className="w-full border rounded-md border-black/30 dark:border-light/30 text-black/30 dark:text-light/30 p-2 relative focus-within:border-2 focus-within:dark:border-accent focus-within:border-accent focus-within:text-accent focus-within:dark:text-accent">
                                <label ref={inputLabel} className="text-inherit w-full text-lg absolute top-[20%] duration-100" htmlFor="userInput">Email or username</label>
                                <input onFocus={() => handleOnFocus()} onBlur={() => handleOnBlur()} onChange={(e) => setUserInput(e.target.value)} value={userInput} className="dark:text-light text-black bg-transparent outline-none w-full mt-3" type="text" id="userInput" />
                            </div>
                            <button onClick={() => setPwdPage(true)} disabled={userInput === ""} className="mt-6 mb-3 bg-black w-full dark:bg-light dark:text-black text-light/80 py-2 text-sm rounded-full flex justify-center font-bold">
                                Next
                            </button>
                            <Link href="/forgot-password" className="mt-6 mb-3 w-full border border-black/20 dark:border-light/20 bg-transparent dark:text-light/90 text-black/90 py-2 text-sm rounded-full flex justify-center font-bold">
                                Forgot password?
                            </Link>
                        </div>
                        <div className={`${pwdPage ? "block":"hidden"}`}>
                            <h1 className="text-3xl dark:text-light text-black font-bold py-6">Enter your password</h1>
                            <div className="flex flex-col dark:text-light/30 text-black/60 bg-black/30 dark:bg-light-70 px-3 py-1 rounded-lg mb-4">
                                <span className="text-sm">{userInput.includes("@") && !userInput.startsWith("@") ? "Email":"Username"}</span>
                                <span>{userInput.startsWith("@") ? userInput.replace("@", ""):userInput}</span>
                            </div>
                            <div className="w-full border rounded-md border-black/30 dark:border-light/30 text-black/30 dark:text-light/30 p-2 relative focus-within:border-2 focus-within:dark:border-accent focus-within:border-accent focus-within:text-accent focus-within:dark:text-accent">
                                <label ref={passwordLabel} className="text-inherit w-full text-lg absolute top-[20%] duration-100" htmlFor="passwordInput">Password</label>
                                <div className="flex">
                                    <input onFocus={() => handleOnFocus()} onBlur={() => handleOnBlur()} onChange={(e) => setPasswordInput(e.target.value)} value={passwordInput} className="dark:text-light text-black bg-transparent outline-none w-full mt-3" type={showPassword ? "text":"password"} id="passwordInput" />
                                    <span onClick={() => setShowPassword(!showPassword)} className="block w-6 h-6 mt-4">
                                        <Eye className={`text-2xl text-black/90 dark:text-light/90 ${showPassword ? "hidden":"block"}`} />
                                        <EyeOff className={`text-2xl text-black/90 dark:text-light/90 ${showPassword ? "block":"hidden"}`} />
                                    </span>
                                </div>
                            </div>
                            <Link className="text-accent text-sm ml-2" href="/forgot-password">Forgot password?</Link>
                            <button onClick={(e) => submitForm(e)} disabled={userInput === "" || passwordInput === ""} className="mt-36 bg-black w-full dark:bg-light dark:text-black text-light/80 py-3 text-lg rounded-full flex justify-center font-bold disabled:bg-dark/60 disabled:dark:bg-light/60">
                                Log in
                            </button>
                        </div>
                        <span className="dark:text-light/50 text-black/50 pt-10 block text-[1rem]">
                            Don&apos;t have an account? <Link className="text-accent" href="/signup">Sign up</Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className={`px-6 py-3 bg-accent absolute bottom-6 text-light rounded-md shadow-lg ${error === "" ? "hidden":"block"}`}>
                {error}
            </div>
        </div>
    </> 
}