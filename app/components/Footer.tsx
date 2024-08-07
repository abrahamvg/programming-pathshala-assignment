"use client";
import Link from "next/link";
import Image from "next/image";
import { useThemeStore } from "@/providers/ThemeProvider";

const SocialIcon = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <div className="bg-neutral-white/10  p-3 rounded-full">
      <Image src={imgUrl} width={16} height={16} alt="social-media" />
    </div>
  );
};

const socialMediaContent = [
  "/socialMedia/instagram.svg",
  "/socialMedia/dribble.svg",
  "/socialMedia/twitter.svg",
  "/socialMedia/youtube.svg",
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", route: "/about" },
      { name: "Blog", route: "/blog" },
      { name: "Contact us", route: "/contact" },
      { name: "Pricing", route: "/pricing" },
      { name: "Testimonials", route: "/testimonials" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help center", route: "" },
      { name: "Terms of service", route: "" },
      { name: "Legal", route: "" },
      { name: "Privacy policy", route: "" },
      { name: "Status", route: "" },
    ],
  },
];

export default function Footer() {
  const { theme } = useThemeStore((state) => state);
  return (
    <section
      className="md:px-28 px-16 flex lg:flex-row flex-col lg:justify-between justify-center md:items-center items-start py-12 lg:gap-3 gap-5 bg-neutral-black text-white"
    >
      <div className="space-y-10 max-lg:w-full">
        <Link
          href="/"
          className="flex flex-row items-center gap-2"
        >
          <Image src="/logo_icon.svg" width={35} height={24} alt="logo" />
          <span className="my-auto font-bold text-4xl">
            Nexcent
          </span>
        </Link>
        <div className="text-neutral-silver dark:text-neutral-grey text-sm">
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p className="mt-2">All rights reserved</p>
        </div>
        <div className="flex justify-start items-start gap-3">
          {socialMediaContent.map((item) => (
            <SocialIcon key={item} imgUrl={item} />
          ))}
        </div>
      </div>
      <div className="flex lg:flex-nowrap flex-wrap justify-between gap-10 items-start max-lg:w-full">
        <div className="flex sm:flex-row gap-8 flex-col max-lg:w-full">
          {footerLinks.map((items) => (
            <div className="flex flex-col gap-3 lg:min-w-40 w-full" key={items.title}>
              <h5 className="font-semibold">{items.title}</h5>
              <ul className="flex flex-col font-light">
                <li className="flex flex-col gap-2" role="button">
                  {items.links.map((link) => (
                    <Link href={link.route} key={link.name}>
                      {link.name}
                    </Link>
                  ))}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <form className="flex flex-col gap-2 w-full" onSubmit={(e)=>{e.preventDefault()}}>
          <h5 className="font-semibold">Stay up to date</h5>
          <div className="bg-neutral-white/10 py-2 px-3 rounded-md flex flex-row items-center justify-between ">
            <input
              type="email"
              className="text-light shadow-none bg-transparent w-full"
              id="emailSubmitInput"
              placeholder="Your email address"
            />
            <button>
              <Image src="/send.svg" height={20} width={20} alt="Submit Button"/>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
