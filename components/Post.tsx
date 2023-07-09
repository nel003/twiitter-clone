import * as Icons from "../components/Icons";
import Image from "next/image";
import { useRef } from "react";
import useOutsideClick from "../utils/app/useOutsideClick";

export default function Post({id}: {id:string}): JSX.Element {
  const excempElem = useRef<any>(null)
  const [popup, setPopup] = useOutsideClick(id, excempElem);

  return (
    <>
      <div className="w-full flex border-b border-black/10 dark:border-light/10 relative">
        {/* Pop up */}
        <div ref={excempElem} className={`${popup ? "scale-y-100":"scale-y-0"} z-40 w-[300px] bg-light dark:bg-black shadow-black/20 dark:shadow-light/20 shadow-[0_0_4px] absolute rounded-xl right-4 top-4 flex flex-col`}>
          <div className={`${popup ? "scale-y-100":"scale-y-0"} delay-75 duration-100 ease-out p-3 origin-top text-black/90 dark:text-light/90 flex gap-2 hover:bg-black/5 dark:hover:bg-light/5`}>
            <Icons.ChatRemove className="text-xl" />
            <span className="text-sm font-semibold">Not interested in You might like</span>
          </div>
          <div className={`${popup ? "scale-y-100":"scale-y-0"} delay-75 duration-100 ease-out p-3 origin-top text-black/90 dark:text-light/90 flex gap-2 hover:bg-black/5 dark:hover:bg-light/5`}>
            <Icons.EmojiSad className="text-xl" />
            <span className="text-sm font-semibold">Not interested in this Tweet</span>
          </div>
          <div className={`${popup ? "scale-y-100":"scale-y-0"} delay-75 duration-100 ease-out p-3 origin-top text-black/90 dark:text-light/90 flex gap-2 hover:bg-black/5 dark:hover:bg-light/5`}>
            <Icons.PersonAdd className="text-xl" />
            <span className="text-sm font-semibold">Follow</span>
          </div>
          <div className={`${popup ? "scale-y-100":"scale-y-0"} delay-75 duration-100 ease-out p-3 origin-top text-black/90 dark:text-light/90 flex gap-2 hover:bg-black/5 dark:hover:bg-light/5`}>
            <Icons.PersonStar className="text-xl" />
            <span className="text-sm font-semibold">Subscribe</span>
          </div>
          <div className={`${popup ? "scale-y-100":"scale-y-0"} delay-75 duration-100 ease-out p-3 origin-top text-black/90 dark:text-light/90 flex gap-2 hover:bg-black/5 dark:hover:bg-light/5`}>
            <Icons.NotesAdd className="text-xl" />
            <span className="text-sm font-semibold">Add/remove</span>
          </div>
          <div className={`${popup ? "scale-y-100":"scale-y-0"} delay-75 duration-100 ease-out p-3 origin-top text-black/90 dark:text-light/90 flex gap-2 hover:bg-black/5 dark:hover:bg-light/5`}>
            <Icons.Mute className="text-xl" />
            <span className="text-sm font-semibold">Mute</span>
          </div>
          <div className={`${popup ? "scale-y-100":"scale-y-0"} delay-75 duration-100 ease-out p-3 origin-top text-black/90 dark:text-light/90 flex gap-2 hover:bg-black/5 dark:hover:bg-light/5`}>
            <Icons.DoNot className="text-xl" />
            <span className="text-sm font-semibold">Block</span>
          </div>
          <div className={`${popup ? "scale-y-100":"scale-y-0"} delay-75 duration-100 ease-out p-3 origin-top text-black/90 dark:text-light/90 flex gap-2 hover:bg-black/5 dark:hover:bg-light/5`}>
            <Icons.Code className="text-xl" />
            <span className="text-sm font-semibold">Embed Tweet</span>
          </div>
          <div className={`${popup ? "scale-y-100":"scale-y-0"} delay-75 duration-100 ease-out p-3 origin-top text-black/90 dark:text-light/90 flex gap-2 hover:bg-black/5 dark:hover:bg-light/5`}>
            <Icons.Flag className="text-xl" />
            <span className="text-sm font-semibold">Report Tweet</span>
          </div>
        </div>
        {/* Content */}
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
            <div onClick={() => setPopup(!popup)} id={id} className="w-8 h-8 place-items-center grid mr-2 pt-[0.10rem] group hover:bg-accent/10 rounded-full cursor-pointer">
              <Icons.MoreFlat className="text-lg p-0 group-hover:text-accent text-black/80 dark:text-light/80 pointer-events-none" />
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
