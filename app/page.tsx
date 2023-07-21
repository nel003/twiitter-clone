"use client";
import Image from "next/image";
import { UserRedirect } from "../utils/app/useAuth";
import { Twitter } from "../components/Icons";

export default function Home() {
  return (
    <>
      <UserRedirect>
        <div className="flex w-screen lg:h-screen flex-col-reverse lg:flex-row">
          <div className="lg:w-[55%] relative h-full min-h-[23rem] lg:min-h-full">
            <Image src="/banner.png" alt="Banner" fill style={{objectFit: "cover"}}/>
            <div className="absolute top-0 left-0 grid place-items-center h-full w-full">
              <Twitter className="text-[15rem] sm:text-[22rem] text-light" />
            </div>
          </div>
          <div className="lg:w-[45%] lg:min-w-[35rem] min-h-[90vh] lg:min-h-full flex items-center">
            <div className="px-4 sm:px-14">
              <Twitter className="text-5xl text-black/80 dark:text-light/80" />
              <h1 className="text-5xl md:text-[4rem] text-black/80 dark:text-light/90 font-bold py-6">Happening now</h1>
              <p className="text-3xl text-black/80 dark:text-light/90 font-bold">Join Twitter today.</p>
              <button className="mt-6 mb-3 bg-black dark:bg-light font-semibold dark:text-black text-light/80 w-[90%] sm:w-[65%] lg:w-[55%] py-2 text-sm rounded-full block">Sign up with Google</button>
              <button className="bg-black dark:bg-light font-bold dark:text-black text-light/80 w-[90%] sm:w-[65%] lg:w-[55%] py-2 text-sm rounded-full block">Sign up with Apple</button>
              <div className="w-[90%] sm:w-[65%] lg:w-[55%] py-2 text-sm rounded-full relative flex justify-center">
                <span className="absolute h-[0.5px] w-full bg block bg-black/30 dark:bg-light/30 top-[50%]"></span>
                <p className="dark:text-light text-black px-3 bg-light dark:bg-black relative">or</p>
              </div>
              <button className="bg-accent text-light w-[90%] sm:w-[65%] lg:w-[55%] py-2 text-sm rounded-full font-bold block">Create Account</button>
              <div className="dark:text-light/80 text-black/80 w-[90%] sm:w-[65%] lg:w-[55%] py-2 text-[.6rem] font-semibold block">
                By signing up, you agree to the <span className="text-accent">Terms of Service</span> and <span className="text-accent">Privacy Policy</span>, including <span className="text-accent">Cookie Use.</span>
              </div>
              <span className="dark:text-light text-black font-bold pt-10 pb-4 block">Already have an account?</span>
              <button className="font-bold text-accent border border-accent w-[90%] sm:w-[65%] lg:w-[55%] py-2 text-sm rounded-full block">Sign in</button>
            </div>
          </div>
        </div>
      </UserRedirect>
    </>
  );
}
