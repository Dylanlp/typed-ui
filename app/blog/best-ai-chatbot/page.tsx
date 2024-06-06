"use client";

import Image from "next/image";

import React, { useState, useEffect, useContext } from "react";

import icons01 from "./icons01.png";
import icons02 from "./icons02.png";
import icons03 from "./icons03.png";
import {
  IconMessageFill,
  IconChevronDown,
  IconGlobe,
  IconTablecells,
  IconEllipsisMessage,
  IconPaintbrushPointed,
  IconWandAndStarsInverse,
} from "symbols-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import art4 from "../../art4.jpg";

export default function Blog() {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    setIframeLoaded(true);
  }, []);

  return (
    <main className="flex  justify-between h-full bg-white">
      {iframeLoaded && (
        <iframe
          className="hidden"
          rel="preload"
          src="https://mallorcainsights.typedui.com"
          name="preview"
          height="100%"
          width="100%"
          loading="eager"
        ></iframe>
      )}

      <Popover onOpenChange={(open) => setIsOpen(open)}>
        <PopoverTrigger className="z-20 fixed mr-4 mb-4 bottom-0 right-0 h-12 w-12 flex items-center justify-center rounded-full shadow-lg bg-primary text-white">
          <span id="popover-icon">
            {isOpen ? (
              <IconChevronDown size={16} fill="currentColor" />
            ) : (
              <IconMessageFill size={16} fill="currentColor" />
            )}
          </span>
        </PopoverTrigger>
        <PopoverContent className="p-0 mr-4 mb-2 h-[440px] z-20 bg-white rounded-xl border overflow-hidden w-96">
          <iframe
            className="w-full h-full overflow-hidden"
            rel="preload"
            src="https://mallorcainsights.typedui.com"
            name="preview"
            height="100%"
            width="100%"
            loading="eager"
          ></iframe>
        </PopoverContent>
      </Popover>

      <div className="p-2 md:p-8 max-w-screen-xl mx-auto w-full flex flex-col items-center gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-auto   overflow-hidden relative  gap-16 w-full rounded-3xl p-6 md:p-10  border ">
          <Image
            src={art4}
            alt="chat"
            className=" absolute blur-lg opacity-5 h-full inset-0 w-full  object-cover"
          />

          <div className="flex  flex-col z-10 w-full justify-between h-full">
            <nav className="flex mb-8 lg:mb-0 items-center gap-12">
              <a href="/" className="text-xl font-medium">
                <svg
                  width="114"
                  height="25"
                  viewBox="0 0 114 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.0466 6.49299V3.71404H45.1441V6.49299H40.2468V20.0005H36.9439V6.49299H32.0466Z"
                    fill="black"
                  />
                  <path
                    d="M44.7572 23.8272V21.39H45.8506C47.0806 21.39 47.5817 20.7522 47.5817 19.7955C47.5817 19.1577 47.354 18.406 46.6934 16.6293L43.55 8.31525H46.8073L48.5384 13.577C48.9029 14.6476 49.2901 16.1282 49.2901 16.1282H49.3357C49.3357 16.1282 49.6546 14.6476 50.019 13.577L51.659 8.31525H54.7797L50.7024 20.2966C49.814 22.8933 48.9484 23.8272 46.5795 23.8272H44.7572Z"
                    fill="black"
                  />
                  <path
                    d="M55.3735 23.8272V8.31525H58.3575V9.77306H58.4258C59.1775 8.74803 60.2708 7.99635 61.8653 7.99635C64.9631 7.99635 66.9449 10.5247 66.9449 14.1693C66.9449 17.9504 64.8948 20.3422 61.8881 20.3422C60.248 20.3422 59.1775 19.6816 58.5169 18.6794H58.4713V23.8272H55.3735ZM61.2275 17.7682C62.7992 17.7682 63.8015 16.4699 63.8015 14.2604C63.8015 12.0509 63.027 10.502 61.1136 10.502C59.1775 10.502 58.403 12.1648 58.403 14.2604C58.403 16.3787 59.3825 17.7682 61.2275 17.7682Z"
                    fill="black"
                  />
                  <path
                    d="M73.4205 20.3422C69.5482 20.3422 67.3615 17.6316 67.3615 14.1465C67.3615 10.6842 69.7076 7.99635 73.1243 7.99635C76.8828 7.99635 78.8872 10.8664 78.8872 15.0348H70.4137C70.6415 16.8343 71.6438 17.9504 73.3977 17.9504C74.6049 17.9504 75.3111 17.4038 75.6527 16.5154H78.705C78.2722 18.5882 76.4272 20.3422 73.4205 20.3422ZM73.1699 10.3881C71.5299 10.3881 70.7326 11.3675 70.4593 12.8937H75.6527C75.5616 11.4131 74.5822 10.3881 73.1699 10.3881Z"
                    fill="black"
                  />
                  <path
                    d="M84.2389 20.3422C81.3005 20.3422 79.296 17.9504 79.296 14.1693C79.296 10.5247 81.3688 7.99635 84.2844 7.99635C85.9245 7.99635 86.9495 8.74803 87.5873 9.7275H87.6556V3.71404H90.7535V20.0005H87.7695V18.4743H87.724C87.0406 19.5905 85.8789 20.3422 84.2389 20.3422ZM84.9222 17.7454C86.7673 17.7454 87.724 16.3787 87.724 14.2376C87.724 12.0053 86.9951 10.502 85.0134 10.502C83.305 10.502 82.4394 12.0053 82.4394 14.1693C82.4394 16.4243 83.3278 17.7454 84.9222 17.7454Z"
                    fill="black"
                  />
                  <path
                    d="M102.219 20.2738C98.0055 20.2738 95.796 18.2921 95.796 14.7615V3.71404H99.0989V14.7615C99.0989 16.4471 99.9416 17.6316 102.151 17.6316C104.247 17.6316 105.226 16.4015 105.226 14.7159V3.71404H108.529V14.7615C108.529 18.2466 106.388 20.2738 102.219 20.2738Z"
                    fill="black"
                  />
                  <path
                    d="M110.47 20.0005V3.71404H113.773V20.0005H110.47Z"
                    fill="black"
                  />
                  <path
                    d="M10.9091 21.3648C10.9091 23.1723 9.4438 24.6376 7.63631 24.6376H4.36291C2.55543 24.6376 1.09018 23.1723 1.09018 21.3648L1.09018 17.0004C1.09018 15.193 2.55543 13.7277 4.36291 13.7277H7.63631C9.4438 13.7277 10.9091 15.193 10.9091 17.0004V21.3648Z"
                    fill="#041DFF"
                  />
                  <path
                    d="M17.0585 1.25236C17.428 0.446073 18.5737 0.446074 18.9432 1.25236L23.0296 10.1682C23.3443 10.8548 22.8426 11.6367 22.0872 11.6367H13.9144C13.1591 11.6367 12.6573 10.8548 12.9721 10.1682L17.0585 1.25236Z"
                    fill="#3CC059"
                  />
                  <path
                    d="M13.0913 18.8331C13.0913 15.8205 15.5336 13.3782 18.5462 13.3782C21.5589 13.3782 24.0012 15.8205 24.0012 18.8331C24.0012 21.8458 21.5589 24.2881 18.5462 24.2881C15.5336 24.2881 13.0913 21.8458 13.0913 18.8331Z"
                    fill="#E8A82B"
                  />
                  <path
                    d="M6.00042 12.6376L4.07156 11.2938L1.75748 10.8801L1.34374 8.566L0 6.63714L1.34374 4.70828L1.75748 2.3942L4.07156 1.98046L6.00042 0.636719L7.92928 1.98046L10.2434 2.3942L10.6571 4.70828L12.0008 6.63714L10.6571 8.566L10.2434 10.8801L7.92929 11.2938L6.00042 12.6376Z"
                    fill="#E35454"
                  />
                </svg>
              </a>
              <div className=" text-neutral-500 text-sm tracking-tight flex gap-3">
                {/* <a className="px-3 flex cursor-pointer items-center flex-none py-1 hover:text-neutral-900 rounded-full duration-300 ease-in-out hover:bg-white/50">
                  Pricing
                </a> */}
                <a
                  href="/blog"
                  className="px-3 flex active:text-neutral-900 cursor-pointer items-center flex-none py-1 hover:text-neutral-900 rounded-full duration-300 ease-in-out hover:bg-white/50"
                >
                  Blog
                </a>
                {/* <a className="px-3 flex cursor-pointer items-center flex-none py-1 hover:text-neutral-900 rounded-full duration-300 ease-in-out hover:bg-white/50">
                  FAQs
                </a> */}
              </div>
            </nav>

            <div className="flex flex-col gap-16 mt-auto ">
              <div className="flex flex-col gap-3">
                <h1 className="lg:text-5xl mt-16 text-3xl font-medium lg:leading-[4rem] tracking-tighter">
                  Best AI Chatbots (2024)
                </h1>
                <p className="text-lg mt-3 text-secondary-foreground tracking-tight w-full max-w-[37ch]">
                  This is a blog post subheading
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 gap-2 md:gap-4 py-12">
          <div className="max-w-screen-md mx-auto flex flex-col gap-8">
            <h3 className="text-2xl font-medium">Getting started</h3>
            <p className="text-lg text-secondary-foreground ">
              Welcome to our first blog post! In this post, we'll explore
              various topics and share insights that we hope you'll find
              valuable and engaging. Stay tuned for more updates and feel free
              to share your thoughts in the comments.
            </p>
            <p className="text-lg  text-secondary-foreground ">
              Welcome to our first blog post! In this post, we'll explore
              various topics and share insights that we hope you'll find
              valuable and engaging. Stay tuned for more updates and feel free
              to share your thoughts in the comments.
            </p>
            <Image
              className="w-full h-80 rounded-xl overflow-hidden"
              src={art4}
              alt="art4"
            />
            <h3 className="text-2xl font-medium">Getting started</h3>
            <p className="text-lg text-secondary-foreground ">
              Welcome to our first blog post! In this post, we'll explore
              various topics and share insights that we hope you'll find
              valuable and engaging. Stay tuned for more updates and feel free
              to share your thoughts in the comments.
            </p>
            <p className="text-lg  text-secondary-foreground ">
              Welcome to our first blog post! In this post, we'll explore
              various topics and share insights that we hope you'll find
              valuable and engaging. Stay tuned for more updates and feel free
              to share your thoughts in the comments.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          {" "}
          {/* <div className="flex w-full justify-between items-center gap-3 ">
            <a className="text-xl font-medium">
              <svg
                width="114"
                height="25"
                viewBox="0 0 114 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.0466 6.49299V3.71404H45.1441V6.49299H40.2468V20.0005H36.9439V6.49299H32.0466Z"
                  fill="black"
                />
                <path
                  d="M44.7572 23.8272V21.39H45.8506C47.0806 21.39 47.5817 20.7522 47.5817 19.7955C47.5817 19.1577 47.354 18.406 46.6934 16.6293L43.55 8.31525H46.8073L48.5384 13.577C48.9029 14.6476 49.2901 16.1282 49.2901 16.1282H49.3357C49.3357 16.1282 49.6546 14.6476 50.019 13.577L51.659 8.31525H54.7797L50.7024 20.2966C49.814 22.8933 48.9484 23.8272 46.5795 23.8272H44.7572Z"
                  fill="black"
                />
                <path
                  d="M55.3735 23.8272V8.31525H58.3575V9.77306H58.4258C59.1775 8.74803 60.2708 7.99635 61.8653 7.99635C64.9631 7.99635 66.9449 10.5247 66.9449 14.1693C66.9449 17.9504 64.8948 20.3422 61.8881 20.3422C60.248 20.3422 59.1775 19.6816 58.5169 18.6794H58.4713V23.8272H55.3735ZM61.2275 17.7682C62.7992 17.7682 63.8015 16.4699 63.8015 14.2604C63.8015 12.0509 63.027 10.502 61.1136 10.502C59.1775 10.502 58.403 12.1648 58.403 14.2604C58.403 16.3787 59.3825 17.7682 61.2275 17.7682Z"
                  fill="black"
                />
                <path
                  d="M73.4205 20.3422C69.5482 20.3422 67.3615 17.6316 67.3615 14.1465C67.3615 10.6842 69.7076 7.99635 73.1243 7.99635C76.8828 7.99635 78.8872 10.8664 78.8872 15.0348H70.4137C70.6415 16.8343 71.6438 17.9504 73.3977 17.9504C74.6049 17.9504 75.3111 17.4038 75.6527 16.5154H78.705C78.2722 18.5882 76.4272 20.3422 73.4205 20.3422ZM73.1699 10.3881C71.5299 10.3881 70.7326 11.3675 70.4593 12.8937H75.6527C75.5616 11.4131 74.5822 10.3881 73.1699 10.3881Z"
                  fill="black"
                />
                <path
                  d="M84.2389 20.3422C81.3005 20.3422 79.296 17.9504 79.296 14.1693C79.296 10.5247 81.3688 7.99635 84.2844 7.99635C85.9245 7.99635 86.9495 8.74803 87.5873 9.7275H87.6556V3.71404H90.7535V20.0005H87.7695V18.4743H87.724C87.0406 19.5905 85.8789 20.3422 84.2389 20.3422ZM84.9222 17.7454C86.7673 17.7454 87.724 16.3787 87.724 14.2376C87.724 12.0053 86.9951 10.502 85.0134 10.502C83.305 10.502 82.4394 12.0053 82.4394 14.1693C82.4394 16.4243 83.3278 17.7454 84.9222 17.7454Z"
                  fill="black"
                />
                <path
                  d="M102.219 20.2738C98.0055 20.2738 95.796 18.2921 95.796 14.7615V3.71404H99.0989V14.7615C99.0989 16.4471 99.9416 17.6316 102.151 17.6316C104.247 17.6316 105.226 16.4015 105.226 14.7159V3.71404H108.529V14.7615C108.529 18.2466 106.388 20.2738 102.219 20.2738Z"
                  fill="black"
                />
                <path
                  d="M110.47 20.0005V3.71404H113.773V20.0005H110.47Z"
                  fill="black"
                />
                <path
                  d="M10.9091 21.3648C10.9091 23.1723 9.4438 24.6376 7.63631 24.6376H4.36291C2.55543 24.6376 1.09018 23.1723 1.09018 21.3648L1.09018 17.0004C1.09018 15.193 2.55543 13.7277 4.36291 13.7277H7.63631C9.4438 13.7277 10.9091 15.193 10.9091 17.0004V21.3648Z"
                  fill="#041DFF"
                />
                <path
                  d="M17.0585 1.25236C17.428 0.446073 18.5737 0.446074 18.9432 1.25236L23.0296 10.1682C23.3443 10.8548 22.8426 11.6367 22.0872 11.6367H13.9144C13.1591 11.6367 12.6573 10.8548 12.9721 10.1682L17.0585 1.25236Z"
                  fill="#3CC059"
                />
                <path
                  d="M13.0913 18.8331C13.0913 15.8205 15.5336 13.3782 18.5462 13.3782C21.5589 13.3782 24.0012 15.8205 24.0012 18.8331C24.0012 21.8458 21.5589 24.2881 18.5462 24.2881C15.5336 24.2881 13.0913 21.8458 13.0913 18.8331Z"
                  fill="#E8A82B"
                />
                <path
                  d="M6.00042 12.6376L4.07156 11.2938L1.75748 10.8801L1.34374 8.566L0 6.63714L1.34374 4.70828L1.75748 2.3942L4.07156 1.98046L6.00042 0.636719L7.92928 1.98046L10.2434 2.3942L10.6571 4.70828L12.0008 6.63714L10.6571 8.566L10.2434 10.8801L7.92929 11.2938L6.00042 12.6376Z"
                  fill="#E35454"
                />
              </svg>
            </a>
          </div> */}
          <div className="w-full flex gap-4 text-xs text-neutral-400 justify-between">
            <p>© 2018 - 2024 Bankside Partners Ltd.</p>
            <p>London, UK</p>
          </div>
        </div>
      </div>
    </main>
  );
}