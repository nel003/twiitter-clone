import { MoreFlat as MoreIcon } from "./Icons"

type TrendsItemType = {
    cat: String
    text: String
    tweets: String
}

export default function TrendsItem({ cat, text, tweets}: TrendsItemType): JSX.Element {
    return <>
        <div className="w-full hover:bg-black/5 dark:hover:bg-light/5 px-3 py-2 flex flex-col">
        <div className="flex relative">
            <span className=" text-black/60 dark:text-light/60 grow text-sm">{ cat }</span>
            <div className="w-8 h-8 place-items-center hidden lg:grid hover:bg-accent/10 rounded-full absolute right-0 -top-1">
                <MoreIcon className="text-2xl p-0 text-black/60 hover:text-accent/90"/>
            </div>
        </div>
        <span className="text-[.9rem] font-bold ml-[2px] text-black/80 dark:text-light/80">{ text }</span>
        <span className="text-black/60 dark:text-light/60 grow text-sm">{ tweets }</span>
    </div>
    </>
}