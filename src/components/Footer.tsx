import Link from "next/link";
import LinkedIn from "../../public/linkedin-custom.svg";
import SubStack from "../../public/substack-custom.svg";
import Twitter from "../../public/twitter-custom.svg";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="relative mt-12 flex w-screen flex-col items-center md:flex-row md:justify-center">
      <article className="mb-4 flex flex-row justify-center space-x-10">
        <Link
          href="https://uk.linkedin.com/in/harry-duncton-93591731"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </Link>
        <Link
          href="https://harryduncton.substack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SubStack />
        </Link>
        <Link
          href="https://twitter.com/lethalsturgeon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </Link>
      </article>
      <footer className="font-sans text-base text-gray-700 md:absolute md:inset-y-4 md:left-10">
        {/* displays a dynamic copyright date */}
        <p>© {year} Harry Duncton</p>
      </footer>
    </div>
  );
}

export default Footer;
