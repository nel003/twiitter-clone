"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home as HomeIcon,
  HomeFilled,
  Feather,
  Search,
  Bell,
  Mail,
  SearchSolid,
  BellFilled,
  MailFilled,
  Close,
  Add,
  Person,
  Notes,
  Bookmark,
  ArrowDown,
  Chart,
  Rocket,
  SquareArrowRight,
  Money,
  Settings,
  Help,
  PieChart,
  Access,
  LogOut,
  Brush,
} from "./Icons";
import { useContext, useEffect, useRef, useState } from "react";
import Store from "../utils/app/Store";
import Image from "next/image";
import { AuthContext } from "../utils/app/useAuth";

export default function MobileNav() {
  const { state, dispatch } = useContext(Store);
  const { user } = useContext(AuthContext);
  const pathname = usePathname();
  const [collapseCS, setCollapseCS] = useState(true);
  const [collapsePT, setCollapsePT] = useState(true);
  const [collapseSS, setCollapseSS] = useState(true);
  const defaultClass = "text-[1.65rem] text-black/90 dark:text-light/90";

  const mobileNav = useRef(null);
  useEffect(() => {
    function handleClick(e: Event) {
      const target = e.target as HTMLElement;
      const excemp = mobileNav.current || {contains: (e: HTMLElement) => false};
      if (target.id !== "userPhoto" && !excemp.contains(target)) {
        dispatch({ type: "updateMHeader", payload: false });
      }
    }

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed w-screen h-screen left-0 top-0 bg-black/30 dark:bg-light/10 z-50 sm:hidden ${
          state.isMHeaderOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          ref={mobileNav}
          className={`h-full max-w-[70%] min-w-[280px] w-[280px] flex flex-col delay-100 duration-300 ease-out bg-light dark:bg-black ${
            state.isMHeaderOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex px-4 pt-2 pb-3">
            <span className="text-lg text-black dark:text-light/90 font-semibold flex-grow">
              Account info
            </span>
            <span
              onClick={() =>
                dispatch({ type: "updateMHeader", payload: false })
              }
              className="px-1 rounded-full py-1 mr-1 hover:bg-black/10 dark:hover:bg-light/10"
            >
              <Close className="text-xl text-black/90 dark:text-light/90" />
            </span>
          </div>
          <div className="py-1 flex flex-col pb-8 overflow-y-scroll">
            <div className="flex h-12 px-4 mt-2 flex-col gap-1">
              <div className="flex">
                <div className="h-10 w-10 pt-1 rounded-full overflow-hidden relative">
                  { user ? <Image
                    fill
                    style={{objectFit: "cover"}}
                    src={`${user?.picture}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Nel"
                    loading="lazy"
                  /> : "" }
                </div>
                <span className="flex-grow"></span>
                <span className="h-8 mt-1 w-8 border border-black/10 dark:border-light/10 hover:border-transparent grid place-items-center rounded-full hover:bg-black/10 dark:hover:bg-light/10">
                  <Add className="text-xl text-black/90 dark:text-light/90" />
                </span>
              </div>
            </div>
            <div className="flex flex-col px-4">
              <span className="font-bold text-lg text-black dark:text-light/90">{user?.name}</span>
              <span className="leading-[15px] text-black/70 dark:text-light/70">
                {user?.username}
              </span>
            </div>
            <div className="flex gap-x-5 my-4 px-4">
              <div className="flex gap-x-1">
                <span className="text-sm font-semibold text-black/90 dark:text-light/90">1</span>
                <Link href="/" className="text-sm text-black/80 dark:text-light/80">
                  Following
                </Link>
              </div>
              <div className="flex gap-x-1">
                <span className="text-sm font-semibold text-black/90 dark:text-light/90">0</span>
                <Link href="/" className="text-sm text-black/80 dark:text-light/80">
                  Followers
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="py-4 flex gap-x-5 hover:bg-accent/5 px-4">
                <Person className="text-[1.6rem] text-black/90 dark:text-light/90" />
                <span className="text-xl font-semibold text-black/90 dark:text-light/90">Profile</span>
              </div>
              <div className="py-4 flex gap-x-5 hover:bg-accent/5 px-4">
                <Notes className="text-[1.6rem] text-black/90 dark:text-light/90" />
                <span className="text-xl font-semibold text-black/90 dark:text-light/90">Lists</span>
              </div>
              <div className="py-4 flex gap-x-5 hover:bg-accent/5 px-4">
                <Bookmark className="text-[1.6rem] text-black/90 dark:text-light/90" />
                <span className="text-xl font-semibold text-black/90 dark:text-light/90">Bookmarks</span>
              </div>
              <div className="w-full h-[1px] py-1 px-5">
                <span className="h-[1px] w-full bg-accent/10 block" />
              </div>
            </div>
            <div className="flex flex-col">
              {/* wwsd */}
              <div onClick={() => setCollapseCS(!collapseCS)} className="py-3 hover:bg-accent/5 px-5 flex">
                <span className="text-[1.0rem] font-semibold flex-grow text-black/90 dark:text-light/90">
                  Creator Studio
                </span>
                <span>
                  <ArrowDown className={`text-[1.6rem] text-black/90 dark:text-light/90 duration-200 ${collapseCS ? "rotate-0" : "-rotate-180"}`} />
                </span>
              </div>
              {/* Collapse 1 */}
              <div className={`flex-col ${collapseCS ? "hidden":"flex"}`}>
                <div className="py-3 hover:bg-accent/5 px-4 flex gap-x-2">
                  <Chart className="text-[1.3rem] mt-[0.05rem] text-black/90 dark:text-light/90" />
                  <span className="text-[1.0rem] text-black/90 dark:text-light/90">Analytics</span>
                </div>
              </div>
              {/* wwsd */}
              <div onClick={() => setCollapsePT(!collapsePT)} className="py-3 hover:bg-accent/5 px-5 flex">
                <span className="text-[1.0rem] font-semibold flex-grow text-black/90 dark:text-light/90">
                  Professional Tools
                </span>
                <span>
                  <ArrowDown className={`text-[1.6rem] text-black/90 dark:text-light/90 duration-200 ${collapsePT ? "rotate-0" : "-rotate-180"}`} />
                </span>
              </div>
              {/* Collapse 2 */}
              <div className={`flex-col ${collapsePT ? "hidden":"flex"}`}>
                <div className="flex flex-col">
                  <div className="py-3 hover:bg-accent/5 px-4 flex gap-x-2">
                    <Rocket className="text-[1.3rem] mt-[0.05rem] text-black/90 dark:text-light/90" />
                    <span className="text-[1.0rem] text-black/90 dark:text-light/90">
                      Twitter for Professional
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="py-3 hover:bg-accent/5 px-4 flex gap-x-2">
                    <SquareArrowRight className="text-[1.3rem] mt-[0.05rem] text-black/90 dark:text-light/90" />
                    <span className="text-[1.0rem] text-black/90 dark:text-light/90">Twitter Ads</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="py-3 hover:bg-accent/5 px-4 flex gap-x-2">
                    <Money className="text-[1.3rem] mt-[0.05rem] text-black/90 dark:text-light/90" />
                    <span className="text-[1.0rem] text-black/90 dark:text-light/90">Monetization</span>
                  </div>
                </div>
              </div>
              {/* wwsd */}
              <div onClick={() => setCollapseSS(!collapseSS)} className="py-3 hover:bg-accent/5 px-5 flex">
                <span className="text-[1.0rem] font-semibold flex-grow text-black/90 dark:text-light/90">
                  Settings and Support
                </span>
                <span>
                  <ArrowDown className={`text-[1.6rem] text-black/90 dark:text-light/90 duration-200 ${collapseSS ? "rotate-0" : "-rotate-180"}`} />
                </span>
              </div>
              {/* Collapse 3 */}
              <div className={`flex-col ${collapseSS ? "hidden":"flex"}`}>
                <div className="flex flex-col">
                  <div className="py-3 hover:bg-accent/5 px-4 flex gap-x-2">
                    <Settings className="text-[1.3rem] mt-[0.05rem] text-black/90 dark:text-light/90" />
                    <span className="text-[1.0rem] text-black/90 dark:text-light/90">
                      Settings and privacy
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="py-3 hover:bg-accent/5 px-4 flex gap-x-2">
                    <Help className="text-[1.3rem] mt-[0.05rem] text-black/90 dark:text-light/90" />
                    <span className="text-[1.0rem] text-black/90 dark:text-light/90">Help Center</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="py-3 hover:bg-accent/5 px-4 flex gap-x-2">
                    <PieChart className="text-[1.3rem] mt-[0.05rem] text-black/90 dark:text-light/90" />
                    <span className="text-[1.0rem] text-black/90 dark:text-light/90">Data saver</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="py-3 hover:bg-accent/5 px-4 flex gap-x-2">
                    <Brush className="text-[1.3rem] mt-[0.05rem] text-black/90 dark:text-light/90" />
                    <span className="text-[1.0rem] text-black/90 dark:text-light/90">Display</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="py-3 hover:bg-accent/5 px-4 flex gap-x-2">
                    <Access className="text-[1.3rem] mt-[0.05rem] text-black/90 dark:text-light/90" />
                    <span className="text-[1.0rem] text-black/90 dark:text-light/90">Keyboard shortcuts</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="py-3 hover:bg-accent/5 px-4 flex gap-x-2">
                    <LogOut className="text-[1.3rem] mt-[0.05rem] text-black/90 dark:text-light/90" />
                    <span className="text-[1.0rem] text-black/90 dark:text-light/90">Logout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed sm:hidden flex w-full left-0 bottom-0 flex-col">
        <div className="flex justify-end w-full p-6">
          <div className="bg-accent p-3 rounded-full">
            <Feather className="text-[1.65rem] text-light/80" />
          </div>
        </div>
        <div className="p-3 bg-light dark:bg-black border-t border-black/5 dark:border-light/10 flex justify-around">
          <Link href="/home" aria-label="Home">
            <div className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-light/10">
              {pathname === "/home" ? (
                <HomeIcon className={defaultClass} />
              ) : (
                <HomeFilled className={defaultClass} />
              )}
            </div>
          </Link>
          <Link href="/explore" aria-label="Explore">
            <div className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-light/10">
              {pathname === "/explore" ? (
                <SearchSolid className={defaultClass} />
              ) : (
                <Search className={defaultClass} />
              )}
            </div>
          </Link>
          <Link href="/notifications" aria-label="Notifications">
            <div className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-light/10">
              {pathname === "/notifications" ? (
                <BellFilled className={defaultClass} />
              ) : (
                <Bell className={defaultClass} />
              )}
            </div>
          </Link>
          <Link href="/messages" aria-label="Messages">
            <div className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-light/10">
              {pathname === "/messages" ? (
                <MailFilled className={defaultClass} />
              ) : (
                <Mail className={defaultClass} />
              )}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
