import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function MainHeader() {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  function toggleHandler() {
    setToggle(!toggle);
  }

  return (
    <header className="text-white bg-black tracking-wider h-20 w-screen top-0 flex items-center justify-around border-b border-gray-900 fixed">
      <div className="text-2xl font-extrabold text-cyan-500">
        <Link href="/">Tournaments</Link>
      </div>
      <div className="md:hidden sm:ml-36">
        <button
          id="menu-btn"
          type="button"
          onClick={toggleHandler}
          className={`${
            toggle ? "open" : null
          } z-40 block hamburger md:hidden focus:outline-none`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {toggle && (
        <div
          id="menu"
          className="md:hidden absolute top-0 left-0 bottom-0 flex flex-col self-end w-full transition animate-navbar-appear h-[30vh] py-1 pt-16 pl-12 space-y-3 text-lg text-white bg-black"
        >
          <Link
            onClick={toggleHandler}
            className={`hover:text-gray-300 ${
              router.pathname == "/newteam"
                ? "underline underline-offset-4"
                : "text-white"
            }`}
            href="/newteam"
          >
            New Team
          </Link>
          <Link
            onClick={toggleHandler}
            className={`hover:text-gray-300 ${
              router.pathname == "/matches"
                ? "underline underline-offset-4"
                : "text-white"
            }`}
            href="/matches"
          >
            Matches
          </Link>
          <Link
            onClick={toggleHandler}
            className={`hover:text-gray-300 ${
              router.pathname == "/live"
                ? "underline underline-offset-2"
                : "text-white"
            }`}
            href="/live"
          >
            Live
          </Link>
        </div>
      )}
      <nav>
        <ul className="md:flex font-bold sm:hidden">
          <li className="mr-10">
            <Link
              className={`hover:text-gray-300 ${
                router.pathname == "/newteam"
                  ? "underline underline-offset-2"
                  : "text-white"
              }`}
              href="/newteam"
            >
              New Team
            </Link>
          </li>
          <li className="mr-10">
            <Link
              className={`hover:text-gray-300 ${
                router.pathname == "/matches"
                  ? "underline underline-offset-2"
                  : "text-white"
              }`}
              href="/matches"
            >
              Matches
            </Link>
          </li>
          <li className="mr-10">
            <Link
              className={`hover:text-gray-300 ${
                router.pathname == "/live"
                  ? "underline underline-offset-2"
                  : "text-white"
              }`}
              href="/live"
            >
              Live
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
