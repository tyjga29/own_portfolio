// src/app/page.tsx

import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div className="font-mono absolute top-20 left-20 right-20 bottom-10">
      <div className="">
        <div className="text-5xl">Tobias Kapp</div>
      </div>
      <div className="absolute top-20">
        <div className="text-xl">Software Engineering \</div>
        <div className="text-xl my-3">Management \</div>
        <div className="text-xl">IT Architecture \</div>
      </div>
      <div className="relative top-0 right-0 ">
        <a href="mailto:kapp_tobias@web.de" className="absolute top-0 right-2">
          <Image src="/pictures/mail.png" alt="Link to my E-Mail" width={"55"} height={"55"} className="" />
        </a>
        <a href="https://de.linkedin.com/in/tobias-kapp-727164174" className="absolute top-12 right-0">
          <Image src="/pictures/linkedIn.png" alt="Link to my LinkedIn Account" className="" width={"70"} height={"70"} />
        </a>
        <a href="https://www.instagram.com/tobiaska.pp/" className="absolute top-32 right-3.5">
          <Image src="/pictures/instagram.png" alt="Link to my Instagram Account" width={"45"} height={"45"} className="" />
        </a>  
      </div>
      <div className="absolute bottom-0 right-0 w-[205px]">
        <div className="text-justify">
          <p className="">born in Leonberg 1998 \</p>
          <p className="">I believe every part of technology should serve humanity and give us the time and freedom to pursue ourselves \</p>
          <p className="">Built with Next JS \</p>
        </div>
      </div>
  </div>
  );
}
