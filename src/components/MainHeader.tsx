"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Item from "./Item";
import * as Icons from "./Icons";
import Image from "next/image";

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      <div className="h-screen w-full bg-light dark:bg-black flex flex-col gap-2">
        <div className="w-full flex">
          <div className="hover:bg-black/5 dark:hover:bg-light/5 hover:rounded-full w-14 h-14 mt-1 grid place-items-center">
            <Icons.Twitter className="text-3xl text-accent" />
          </div>
        </div>
        <Link href="/home">
          <Item
            text="Home"
            active={pathname === "/home"}
            icon={
              pathname === "/home" ? (
                <Icons.Home className="text-2xl" />
              ) : (
                <Icons.HomeFilled className="text-2xl" />
              )
            }
          />
        </Link>
        <Link href="/explore">
          <Item
            text="Explore"
            active={pathname === "/explore"}
            icon={
              pathname === "/explore" ? (
                <Icons.SearchSolid className="text-2xl" />
              ) : (
                <Icons.Search className="text-2xl" />
              )
            }
          />
        </Link>
        <Link href="/notifications">
          <Item
            text="Notifications"
            active={pathname === "/notifications"}
            icon={
              pathname === "/notifications" ? (
                <Icons.BellFilled className="text-2xl" />
              ) : (
                <Icons.Bell className="text-2xl" />
              )
            }
          />
        </Link>
        <Link href="/messages">
          <Item
            text="Messages"
            active={pathname === "/messages"}
            icon={
              pathname === "/messages" ? (
                <Icons.MailFilled className="text-2xl" />
              ) : (
                <Icons.Mail className="text-2xl" />
              )
            }
          />
        </Link>
        <Link href="/lists">
          <Item
            text="Lists"
            active={pathname === "/lists"}
            icon={
              pathname === "/lists" ? (
                <Icons.NotesFilled className="text-2xl" />
              ) : (
                <Icons.Notes className="text-2xl" />
              )
            }
          />
        </Link>
        <Link href="/bookmarks">
          <Item
            text="Bookmarks"
            active={pathname === "/bookmarks"}
            icon={
              pathname === "/bookmarks" ? (
                <Icons.BookmarkFilled className="text-2xl" />
              ) : (
                <Icons.Bookmark className="text-2xl" />
              )
            }
          />
        </Link>
        <Item text="Verified" icon={<Icons.Verified className="text-2xl" />} />
        <Link href="/profile">
          <Item
            text="Profile"
            active={pathname === "/profile"}
            icon={
              pathname === "/profile" ? (
                <Icons.PersonFilled className="text-2xl" />
              ) : (
                <Icons.Person className="text-2xl" />
              )
            }
          />
        </Link>
        <Item text="More" icon={<Icons.More className="text-2xl" />} />
        <button className="max-w-[85%] p-3 bg-accent text-light dark:text-black hover:bg-[#198cd4] rounded-full font-bold mt-6 hidden lg:block">
          Tweet
        </button>
        <button className="p-3 bg-accent hover:bg-[#198cd4] rounded-full mt-6 w-12 h-12 block lg:hidden">
          <div className="w-full h-full -mt-1 place-items-center lg:grid pt-[0.10rem] rounded-full cursor-pointer">
          <Icons.Feather className="text-2xl text-black/90 dark:text-light/90" />
          </div>
        </button>
        <div className="grow"></div>
        <div className="mb-4 flex hover:bg-black/5 dark:hover:bg-light/5 hover:rounded-full cursor-pointer max-w-[90%] w-14 lg:w-auto h-14">
          <div className="flex m-2 rounded-full max-w-[2.5rem] min-w-[2.5rem] bg-black overflow-hidden">
            <Image
              height={40}
              width={40}
              src="/images/nel.png"
              alt="Nel"
              loading="lazy"
            />
          </div>
          <div className="flex-[8] flex-col px-2 hidden lg:flex">
            <span className="font-bold mt-2 overflow-hidden max-h-8 whitespace-nowrap text-black/90 dark:text-light/90">
              Nel Lopena
            </span>
            <span className="text-black/70 dark:text-light/70 leading-3">@nel003</span>
          </div>
          <div className="w-12 h-full place-items-center hidden lg:grid">
            <Icons.MoreFlat className="text-2xl text-black/70 dark:text-light/70" />
          </div>
        </div>
      </div>
    </>
  );
}
