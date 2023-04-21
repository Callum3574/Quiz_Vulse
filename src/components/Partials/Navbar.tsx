import { FC } from "react";
import Link from "next/link";

interface NavbarProps {}
const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="bg-[#2D2A32] py-8 top-0 relative shadow-xl w-full">
      <ul className="flex justify-center space-x-12">
        <li>
          <Link href="/">
            <button className="inline-flex items-center justify-center py-2 bg-[#8E66FF] hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md w-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 mr-2"
              >
                <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
                <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
              </svg>
              Home
            </button>
          </Link>
        </li>
        <li>
          <Link href="/create">
            <button className="inline-flex items-center justify-center py-2 bg-[#8E66FF] hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md w-40 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 mr-2"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Add Quiz
            </button>{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
