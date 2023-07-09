import { MoreFlat as MoreIcon, EmojiSad } from "./Icons";
import { useRef } from "react";
import useOutsideClick from "../utils/app/useOutsideClick";
type TrendsItemType = {
  cat: String;
  text: String;
  tweets: String;
  id: string;
};

export default function TrendsItem({
  cat,
  text,
  tweets,
  id,
}: TrendsItemType): JSX.Element {
  const excempElem = useRef<any>(null)
  const [popup, setPopup] = useOutsideClick(id, excempElem);

  return (
    <>
      <div className="w-full hover:bg-black/5 dark:hover:bg-light/5 px-3 py-2 flex flex-col relative">
        {/* Pop up */}
        <div ref={excempElem} className={`${popup ? "scale-y-100":"scale-y-0"} w-[280px] bg-light dark:bg-black shadow-black/20 dark:shadow-light/20 shadow-[0_0_4px] absolute rounded-xl right-4 top-4 flex flex-col z-50 overflow-hidden`}>
          <div className={`${popup ? "scale-y-100":"scale-y-0"} delay-75 duration-100 ease-out p-3 origin-top text-black/90 dark:text-light/90 flex gap-2 hover:bg-black/5 dark:hover:bg-light/5`}>
            <EmojiSad className="text-xl" />
            <span className="text-sm font-semibold">Not interested in this</span>
          </div>
          <div className={`${popup ? "scale-y-100":"scale-y-0"} delay-75 duration-100 ease-out p-3 origin-top text-black/90 dark:text-light/90 flex gap-2 hover:bg-black/5 dark:hover:bg-light/5`}>
            <EmojiSad className="text-xl" />
            <span className="text-sm font-semibold">This trend is harmful or spammy</span>
          </div>
        </div>
        {/* Content */}
        <div className="flex relative">
          <span className=" text-black/60 dark:text-light/60 grow text-sm">
            {cat}
          </span>
          <div onClick={() => setPopup(!popup)} id={id} className="w-8 h-8 place-items-center hidden lg:grid hover:bg-accent/10 rounded-full absolute right-0 -top-1">
            <MoreIcon className="text-xl p-0 text-black/60 dark:text-light/60 hover:text-accent/90 pointer-events-none" />
          </div>
        </div>
        <span className="text-[.9rem] font-bold ml-[2px] text-black/80 dark:text-light/80">
          {text}
        </span>
        <span className="text-black/60 dark:text-light/60 grow text-sm">
          {tweets}
        </span>
      </div>
    </>
  );
}
