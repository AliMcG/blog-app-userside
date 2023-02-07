import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import titleImage from "../../public/harry-new-header.png";

function Navbar() {
  const router = useRouter();

  return (
    <>
      <div className="m-auto my-10 flex flex-col items-center">
        <header className="w-4/5 md:w-auto">
          <Image src={titleImage} alt="Harry Duncton" width="700" height="50" />
        </header>

        <nav className="mt-8 flex w-4/5 justify-evenly font-sans font-semibold text-gray-700 md:w-2/3 ">
          <Link
            className={router.pathname == "/" ? "text-[#073D93]" : ""}
            href="/"
          >
            <h1 className="hover:text-[#067A75]">HOME</h1>
          </Link>{" "}
          <Link
            className={router.pathname == "/about" ? "text-[#073D93]" : ""}
            href="/about"
          >
            <h1 className="hover:text-[#067A75]">ABOUT</h1>
          </Link>{" "}
          <Link
            className={router.pathname == "/contact" ? "text-[#073D93]" : ""}
            href="/contact"
          >
            <h1 className="hover:text-[#067A75]">CONTACT</h1>
          </Link>{" "}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
