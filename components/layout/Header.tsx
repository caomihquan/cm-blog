import { signOutAction } from "@/app/_lib/actions";
import { authConfig } from "@/app/_lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {
  const session = await getServerSession(authConfig);
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/">
              <span className="text-xl font-bold cursor-pointer">CM Blog</span>
            </Link>
            <nav className="ml-8 hidden md:block">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/blog">
                    <span className="hover:text-blue-300 cursor-pointer">
                      Posts
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/topic">
                    <span className="hover:text-blue-300 cursor-pointer">
                      Topic
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
            <div className="relative w-full md:w-64 bg-white rounded-lg shadow-md">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-3 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            {session ? (
              <div className="relative group cursor-pointer flex items-center space-x-4 rounded-2xl hover:bg-gray-700 p-2">
                <span>{session.user.name}</span>
                <Image
                  src={session.user.image}
                  alt="User Image"
                  width={24}
                  height={24}
                  className="w-10 h-10 rounded-full"
                />
                <div className="absolute top-13 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <Link href="/profile">
                    <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Profile
                    </span>
                  </Link>
                  <form action={signOutAction}>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Sign Out
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Link href="/login">
                  <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer">
                    Login
                  </span>
                </Link>
                <Link href="/register">
                  <span className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg cursor-pointer">
                    Register
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
        <nav className="mt-4 block md:hidden">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/">
                <span className="hover:text-blue-300 cursor-pointer">Blog</span>
              </Link>
            </li>
            <li>
              <Link href="/categories">
                <span className="hover:text-blue-300 cursor-pointer">
                  Categories
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="hover:text-blue-300 cursor-pointer">
                  Topic
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
