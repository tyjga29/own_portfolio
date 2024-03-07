// src/app/page.tsx

import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div className="font-mono absolute top-10 left-20 right-20 bottom-10">
      <div className="absolute">
        <div className="text-5xl">Tobias Kapp</div>
      </div>
      <div className="absolute top-20">
        <div className="text-xl">Software Engineering \</div>
        <div className="text-xl my-3">Management \</div>
        <div className="text-xl">IT Architecture \</div>
      </div>
      <div className="absolute bottom-0">
        <Link href="/cv">CV</Link>
        <Link href="/skills" className="ml-4">Skills</Link>
      </div>
      <div className="relative top-0 right-0 ">
        <a href="https://www.instagram.com/tobiaska.pp/" className="absolute top-0 right-3.5">
          <Image src="/pictures/instagram.png" alt="Link to my Instagram Account" width={"45"} height={"45"} className="" />
        </a>
        <a href="https://www.linkedin.com/uas/login-submit" className="absolute top-0 right-0 top-12">
          <Image src="/pictures/linkedIn.png" alt="Link to my LinkedIn Account" className="" width={"70"} height={"70"} />
        </a>
      </div>
      <div className="absolute bottom-0 right-0 w-64">
        <div className="text-pretty text-right">
          <p className="">born in Leonberg 1998 \</p>
          <p className="">I believe every part of technology should serve humanity and give us the time and freedom to pursue ourselves \</p>
          <p className="">Build with Next JS \</p>
        </div>
      </div>
  </div>
  );
}
