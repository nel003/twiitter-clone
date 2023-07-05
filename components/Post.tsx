import * as Icons from "../components/Icons";
import Image from "next/image";

export default function Post(): JSX.Element {
  return (
    <>
      <div className="w-full flex border-b border-black/10 dark:border-light/10">
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
        <div className="flex w-full flex-col py-2 gap-0">
          <div className="flex gap-1">
            <h1 className="font-bold text-black/90 dark:text-light/90">Nel Cutie</h1>
            <div className="w-4 h-6 place-items-center grid">
              <Icons.VerifiedFilled className="text-lg p-0 text-accent" />
            </div>
            <p className="text-black/60 dark:text-light/60">@nel003</p>
            <span className="text-black/60 dark:text-light/60">·</span>
            <p className="text-black/60 dark:text-light/60 grow">16h</p>
            <div className="w-8 h-8 place-items-center grid mr-2 pt-[0.10rem] group hover:bg-accent/10 rounded-full cursor-pointer">
              <Icons.MoreFlat className="text-lg p-0 group-hover:text-accent text-black/80 dark:text-light/80 " />
            </div>
          </div>
          <p className="mr-5 -mt-1 text-black/90 dark:text-light/90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            alias rem nihil magnam doloribus cumque eaque quidem, obcaecati
            itaque dignissimos distinctio commodi officiis vel, hic harum quis
            necessitatibus minima ab?
          </p>
          <div className="flex gap-2 mt-2 w-full sm:w-[80%] md:w-[80%] lg:w-full xl:w-[80%]">
            <div className="flex group flex-1">
              <div className="w-7 h-7 -mt-1 -ml-1 place-items-center grid pt-[0.10rem] group-hover:bg-accent/10 rounded-full cursor-pointer">
                <Icons.Message className="text-xl p-0 text-black/70 dark:text-light/70 group-hover:text-accent/70" />
              </div>
              <p className="text-black/70 dark:text-light/70 group-hover:text-accent text-sm">
                23
              </p>
            </div>
            <div className="flex group flex-1">
              <div className="w-7 h-7 -mt-1 -ml-1 place-items-center grid pt-[0.10rem] group-hover:bg-[#00BA7C]/10 rounded-full cursor-pointer">
                <Icons.Retweet className="text-xl p-0 text-black/70 dark:text-light/70 group-hover:text-[#00BA7C]/70" />
              </div>
              <p className="text-black/70 dark:text-light/70 group-hover:text-[#00BA7C] text-sm">
                3,600
              </p>
            </div>
            <div className="flex group flex-1">
              <div className="w-7 h-7 -mt-1 -ml-1 place-items-center grid pt-[0.10rem] group-hover:bg-[#F91880]/10 rounded-full cursor-pointer">
                <Icons.Favorite className="text-xl p-0 text-black/70 dark:text-light/70 group-hover:text-[#F91880]/70" />
              </div>
              <p className="text-black/70 dark:text-light/70 group-hover:text-[#F91880] text-sm">
                600
              </p>
            </div>
            <div className="group flex-1 hidden sm:flex">
              <div className="w-7 h-7 -mt-1 -ml-1 place-items-center grid pt-[0.10rem] group-hover:bg-accent/10 rounded-full cursor-pointer">
                <Icons.Chart className="text-xl p-0 text-black/70 dark:text-light/70 group-hover:text-accent/70" />
              </div>
              <p className="text-black/70 dark:text-light/70 group-hover:text-accent text-sm">
                2.3M
              </p>
            </div>
            <div className="flex group pr-[0.7rem]">
              <div className="w-7 h-7 -mt-1 -ml-1 place-items-center grid pt-[0.10rem] group-hover:bg-accent/10 rounded-full cursor-pointer">
                <Icons.Upload className="text-xl p-0 text-black/70 dark:text-light/70 group-hover:text-accent/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
