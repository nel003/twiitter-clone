"use client"
import { useState } from "react";
import * as Icons from "@/components/Icons";
import TrendsItem from "@/components/TrendsItem";
import Post from "@/components/Post";
import WTF from "@/components/WTF";
import Image from "next/image";

export default function Hello() {
    const [trends, setTrends] = useState([
        { cat: "Trending in Phillipines", text: "Google", tweets: "400K Tweets" },
        { cat: "Trending in Mars", text: "Alien", tweets: "30K Tweets" },
        { cat: "Trending in Jupiter", text: "Gas", tweets: "320K Tweets" },
        { cat: "Trending in Earth", text: "ABCDF", tweets: "90K Tweets" },
        { cat: "Trending in Pluto", text: "#LGQHDTV+", tweets: "60K Tweets" },
        { cat: "Trending in rgsgs", text: "#giatay", tweets: "604K Tweets" },
        { cat: "Trending in Africa", text: "#WATER", tweets: "4K Tweets" },
        { cat: "Trending in China", text: "#COVID", tweets: "490K Tweets" },
      ]);
    return <>
        <div className="max-w-full lg:max-w-[60%] w-full">
          <div className="border border-black/10 dark:border-light/10 border-y-0 flex flex-col">
            <div
              className="sticky top-0 flex flex-col bg-light/70 dark:bg-black/70 backdrop-blur-lg z-50"
            >
              <h2 className="p-4 py-2 text-xl font-semibold text-black/90 dark:text-light/90">Home</h2>
              <div className="flex pt-2 border-b border-black/10 dark:border-light/10">
                <div
                  className="flex-1 flex justify-center cursor-pointer"
                >
                  <span
                    className="py-3 font-semibold border-accent border-b-4 text-black/90 dark:text-light/90"
                    >For you</span>
                </div>
                <div
                  className="flex-1 flex justify-center cursor-pointer"
                >
                  <span
                    className="py-3 font-semibold border-accent border-b-4 text-black/90 dark:text-light/90"
                    >Following</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex border-b border-black/10 dark:border-light/10">
              <div className="w-[4.5rem] p-4 flex">
                <div className="w-full">
                  <Image
                    height={40}
                    width={40}
                    src="/images/nel.png"
                    alt="Nel"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex-1 pr-4 flex-col flex">
                <textarea
                  className="outline-0 py-4 w-full text-xl bg-transparent text-black/90 dark:text-light/90"
                  name="message"
                  placeholder="What is happening?"
                ></textarea>
                <div className="w-full h-14 border-t flex items-end pb-2 gap-1 border-black/10 dark:border-light/10">
                  <div
                    className="w-9 h-9 pr-[0.10rem] grid place-items-center hover:bg-accent/10 rounded-full cursor-pointer"
                  >
                    <Icons.Image className="text-lg text-accent"/>
                  </div>
                  <div
                    className="w-9 h-9 pr-[0.10rem] grid place-items-center hover:bg-accent/10 rounded-full cursor-pointer"
                  >
                    <Icons.Gif className="text-lg text-accent"/>
                  </div>
                  <div
                    className="w-9 h-9 pr-[0.10rem] grid place-items-center hover:bg-accent/10 rounded-full cursor-pointer"
                  >
                    <Icons.Lists className="text-lg text-accent"/>
                  </div>
                  <div
                    className="w-9 h-9 pr-[0.10rem] grid place-items-center hover:bg-accent/10 rounded-full cursor-pointer"
                  >
                    <Icons.Schedule className="text-lg text-accent"/>
                  </div>
                  <div
                    className="w-9 h-9 pr-[0.10rem] grid place-items-center hover:bg-accent/10 rounded-full cursor-pointer"
                  >
                    <Icons.Location className="text-lg text-accent"/>
                  </div>
                  <div className="grow"></div>
                  <button
                    className="px-4 h-8 bg-accent text-light dark:text-black rounded-full font-bold disabled:opacity-60"
                    disabled
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </div>
            {/* Contents  */}
            <div className="w-full">
                {Array(10).fill(null).map((item, index) => {
                    return <Post key={index}/>
                })}
            </div>
          </div>
        </div>
        <div className="max-w-[40%] w-full px-6 hidden lg:block">
           {/* Search Box  */}
          <div className="w-full sticky pt-2 pb-1 top-0 bg-light dark:bg-black z-50">
            <div className="flex h-11 bg-black/5 dark:bg-light/5 rounded-full overflow-hidden">
              <div className="w-16 h-full place-items-center hidden lg:grid">
                <Icons.Search className="text-lg text-black/60 dark:text-light/60"/>
              </div>
              <input
                className="w-full bg-transparent outline-none text-black/80 dark:text-light/80"
                type="text"
                placeholder="Search Bold"
              />
            </div>
          </div>
          <div className="sticky -top-[35%]">
            {/* Get Verified Box */}
            <div className="bg-black/5 dark:bg-light/5 rounded-xl p-4 flex flex-col gap-2 mt-3">
              <h1 className="text-xl font-bold text-black/80 dark:text-light/80">Get Verified</h1>
              <h2 className="font-bold text-black/80 dark:text-light/80">Subscribe to unlock new features.</h2>
              <div>
                <button
                  className="font-bold bg-black text-light/90 dark:bg-light/90 dark:text-black p-1.5 px-4 rounded-full text-sm"
                >
                  Get Verified
                </button>
              </div>
            </div>
            {/* Trending Tweets  */}
            <div
              className="w-full bg-black/5 dark:bg-light/5 rounded-xl flex flex-col gap-1 mt-4 overflow-hidden"
            >
              <h1 className="text-xl font-bold p-3 text-black/80 dark:text-light/80">Trends for you</h1>
                {trends.map((trend, index) => {
                    return <TrendsItem key={index} cat={trend.cat} text={trend.text} tweets={trend.tweets}/>
                })}
              <div className="w-full hover:bg-black/5 dark:hover:bg-light/5 p-3">
                <span className="text-accent">Show more</span>
              </div>
            </div>
             {/* Right Footer  */}
            <div
              className="w-full bg-black/5 dark:bg-light/5 rounded-xl flex flex-col gap-1 mt-4 overflow-hidden"
            >
              <h1 className="text-xl font-bold p-3 text-black/80 dark:text-light/80">Who to follow</h1>
              <WTF />
              <WTF />
              <div className="w-full hover:bg-black/5 dark:hover:bg-light/5 p-3">
                <span className="text-accent">Show more</span>
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-xs p-3 text-black/90 dark:text-light/90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </h1>
            </div>
          </div>
        </div>
    </>
}