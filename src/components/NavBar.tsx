
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";


import titleImage from "../../public/harry-new-header.png";

function Navbar() {
  const router = useRouter();
  

  return (
    <>
      <header className="md:w-auto w-4/5">
        <Image
          src={titleImage}
          alt="Harry Duncton"
          width="700"
          height="50"
        />
      </header>

      <nav className="flex md:w-2/3 w-4/5 mt-8 justify-evenly text-gray-700 font-sans font-semibold ">
        <Link className={router.pathname == "/" ? "text-[#073D93]" : ""} href="/">
          <h1 className="hover:text-[#067A75]" >HOME</h1>
        </Link>{" "}
        <Link
          className={router.pathname == "/about" ? "text-[#073D93]" : ""}
          href="/about"
        >
          <h1 className="hover:text-[#067A75]" >ABOUT</h1>
        </Link>{" "}
        <Link
          className={router.pathname == "/contact" ? "text-[#073D93]" : ""}
          href="/contact"
        >
          <h1 className="hover:text-[#067A75]" >CONTACT</h1>
        </Link>{" "}
      </nav>
    </>
  );
}

export default Navbar;