import { Hero, Aboutme, Projects } from "@/components";
import { GitHubLogoIcon, LinkedInLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav>
      </nav>
      <main>
        <Hero />
        <Aboutme />
        <Projects />
      </main>
      <footer className="h-[15em] padding-x flex flex-col justify-center items-center gap-5 border-t-2">
        <div className="w-full flex justify-around items-center text-[1.3em] flex-wrap">
          <Link href="/"><h2 className="">Nathan Tanzi</h2></Link>
          <div className="flex gap-5">
            <Link href="https://github.com/Ntanzi07"><GitHubLogoIcon width={25} height={25} className=""/></Link>
            <Link href="www.linkedin.com/in/nathan-tanzi"><LinkedInLogoIcon width={25} height={25} className=""/></Link>
            <Link href="https://www.instagram.com/nat.tanzi"><InstagramLogoIcon width={25} height={25} className=""/></Link>
          </div>
        </div>
        <span className=" text-gray-400">Nathan Tanzi Copyright &copy; 2025 All Rights Reserved</span>
      </footer>
    </div>
  );
}
