import Image from "next/image";

export default function WTF(): JSX.Element {
  return (
    <>
      <div className="h-14 px-1 flex hover:bg-black/10 dark:hover:bg-light/10 cursor-pointer">
        <div className="flex p-2 flex-2">
          <Image
            height={40}
            width={40}
            src="/images/nel.png"
            alt="Nel"
            loading="lazy"
          />
        </div>
        <div className="flex-[8] flex flex-col px-2">
          <span className="font-bold mt-2 text-black/80 dark:text-light/80">Nel Lopena</span>
          <span className="text-black/60 dark:text-light/60 leading-3">@nel003</span>
        </div>
        <button className="font-bold bg-black text-light dark:bg-light/90 dark:text-black/90 p-1.5 h-9 w-20 rounded-full text-sm mt-3 mr-2">
          Follow
        </button>
      </div>
    </>
  );
}
