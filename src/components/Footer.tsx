import Link from "next/link";
import LinkedIn from "../../public/linkedin-custom.svg";
import SubStack from "../../public/substack-custom.svg";
import Twitter from "../../public/twitter-custom.svg";


function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="flex md:flex-row flex-col items-center mt-12 relative w-screen md:justify-center">
      <article className="flex flex-row justify-center space-x-10 mb-4">
        <Link href="https://uk.linkedin.com/in/harry-duncton-93591731" target="_blank" rel="noopener noreferrer" >
          {/* to open link in a new tab use target="_blank" 
      and as a security measure use rel="noopener noreferrer" to stop malicious reopening of the tab */}
          
            {/* <Image src={linkedIn} width="40" height="40" alt="LinkedIn-logo" /> */}
            <LinkedIn />
          
        </Link>
        <Link href="https://harryduncton.substack.com" target="_blank" rel="noopener noreferrer" >
          
            {/* <Image src={subStack} width="40" height="40" alt="Substack-logo" /> */}
            <SubStack />
          
        </Link>
        <Link href="https://twitter.com/lethalsturgeon" target="_blank" rel="noopener noreferrer">
          
            {/* <Image src={twitter} width="40" height="40" alt="Twitter-logo" /> */}
            <Twitter />
          
        </Link>
      </article>
      <footer className="md:absolute md:left-10 md:inset-y-4 font-sans text-base text-gray-700">
        {/* displays a dynamic copyright date */}
        <p>© {year} Harry Duncton</p>
      </footer>
    </div>
  )
}

export default Footer;
