"use client";

import Image from "next/image";

import React, { useState, useEffect, useContext } from "react";

import icons01 from "./icons01.png";
import icons02 from "./icons02.png";
import icons03 from "./icons03.png";
import { IconMessageFill, IconChevronDown } from "symbols-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import art1 from "./art1.webp";
import art2 from "./art2.webp";
import art3 from "./art3.webp";
import art4 from "./art4.jpg";
import art5 from "./art5.jpg";
import art6 from "./art6.jpg";
import art7 from "./art7.jpg";
import art8 from "./art8.jpg";
import art9 from "./art9.jpg";
import art10 from "./art10.jpg";
import art11 from "./art11.jpg";
import art12 from "./art12.jpg";
import house1 from "./house1.jpg";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex  justify-between h-full bg-white">
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

      <div className="p-8 max-w-screen-xl mx-auto w-full flex flex-col items-center gap-4">
        <div className="flex h-[496px] flex-row overflow-hidden relative  gap-16 w-full rounded-3xl p-10  border ">
          <Image
            src={art4}
            alt="chat"
            className=" absolute blur-lg opacity-5 h-full inset-0 w-full  object-cover"
          />

          <div className="flex flex-col z-10 w-full justify-between h-full">
            <nav className="flex items-center gap-12">
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
              <div className=" text-neutral-500 text-sm tracking-tight flex gap-3">
                <a className="px-3 flex cursor-pointer items-center flex-none py-1 hover:text-neutral-900 rounded-full duration-300 ease-in-out hover:bg-white/50">
                  Pricing
                </a>
                <a className="px-3 flex cursor-pointer items-center flex-none py-1 hover:text-neutral-900 rounded-full duration-300 ease-in-out hover:bg-white/50">
                  Use Cases
                </a>
                <a className="px-3 flex cursor-pointer items-center flex-none py-1 hover:text-neutral-900 rounded-full duration-300 ease-in-out hover:bg-white/50">
                  FAQs
                </a>
              </div>
            </nav>

            <div className="flex flex-col gap-16 mt-auto ">
              <div className="flex flex-col gap-3">
                <h1 className="text-6xl font-medium leading-[4rem] tracking-tighter">
                  Custom ChatGPT <br></br> for your website
                </h1>
                <p className="text-lg mt-3 text-muted-foreground tracking-tight w-full max-w-[37ch]">
                  Add your data, create your chat and embed it on your website,
                  all in 15 minutes.{" "}
                  <span className="font-medium ">No code required.</span>{" "}
                </p>
              </div>
              <div className="flex  gap-3">
                <Button
                  variant="default"
                  onClick={() =>
                    window.open("https://cal.com/dylanlp", "_blank")
                  }
                  className="cursor-pointer   duration-200 ease-in-out inline-flex flex-none items-center justify-center  px-4 py-2 rounded-full"
                >
                  Book a Demo
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open("https://cal.com/dylanlp", "_blank")
                  }
                  className="bg-white cursor-pointer shadow-sm hover:bg-neutral-100/50 duration-200 ease-in-out inline-flex flex-none border border-neutral-200 items-center justify-center  text-neutral-700 px-4 py-2 rounded-full"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full h-full z-10 ml-auto rounded-2xl  overflow-hidden">
            <div className="h-full p-8 flex flex-col items-end rounded-xl shadow-md gap-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                transition={{ delay: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-white  px-4 py-2 inline-flex rounded-l-full rounded-t-full  flex w-auto bg-primary text-sm ">
                  I&apos;m looking for a 3 bed, 2 bath with a pool
                </div>
              </motion.div>
              <div className="w-full flex flex-col gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ delay: 1.3 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="text-primary px-4 py-2 inline-flex  rounded-r-full rounded-t-full  flex w-auto bg-muted text-sm ">
                    Ok, sure. Here are some properties you might like
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ delay: 1.6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-row gap-2 text-sm"
                >
                  <div className="rounded-lg w-full flex flex-col   overflow-hidden bg-white shadow-sm cursor-pointer hover:shadow-md duration-200 ease-in-out border">
                    <div className="h-20 relative overflow-hidden">
                      <Image
                        src={house1}
                        alt="chat"
                        className=" absolute h-full  object-cover"
                      />
                    </div>
                    <div className="p-3 flex flex-col gap-1 ">
                      <h3 className="font-medium">Stunning Villa</h3>
                      <p className="text-sm text-muted-foreground">
                        $1,246,297
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg w-full flex flex-col   overflow-hidden bg-white shadow-sm cursor-pointer hover:shadow-md duration-200 ease-in-out border">
                    <div className="h-20 relative overflow-hidden">
                      <Image
                        src={art12}
                        alt="chat"
                        className=" absolute h-full  object-cover"
                      />
                    </div>
                    <div className="p-3 flex flex-col gap-1 ">
                      <h3 className="font-medium">Seaview House</h3>
                      <p className="text-sm text-muted-foreground">
                        $1,246,297
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg w-full flex flex-col   overflow-hidden bg-white shadow-sm cursor-pointer hover:shadow-md duration-200 ease-in-out border">
                    <div className="h-20 relative overflow-hidden">
                      <Image
                        src={art3}
                        alt="chat"
                        className=" absolute h-full  object-cover"
                      />
                    </div>
                    <div className="p-3 flex flex-col gap-1 ">
                      <h3 className="font-medium">Beach House</h3>
                      <p className="text-sm text-muted-foreground">
                        $1,246,297
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                transition={{ delay: 4.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-row gap-2 text-sm"
              >
                <div className="text-white px-4 py-2 inline-flex rounded-l-full rounded-t-full  flex w-auto bg-primary text-sm ">
                  These look great, which is best if I like hiking?
                </div>
              </motion.div>
            </div>
            {/* <iframe
              className="w-full h-full overflow-hidden"
              src="https://mallorcainsights.typedui.com/"
              name="preview"
              height="100%"
              width="100%"
            ></iframe> */}
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row py-4 items-center justify-between px-24 font-bold uppercase text-sm text-muted-foreground/50">
          <div className="h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 220 40"
            >
              <path
                fill="currentColor"
                d="M20 40c11.046 0 20-8.954 20-20V6a6 6 0 0 0-6-6H21v8.774c0 2.002.122 4.076 1.172 5.78a9.999 9.999 0 0 0 6.904 4.627l.383.062a.8.8 0 0 1 0 1.514l-.383.062a10 10 0 0 0-8.257 8.257l-.062.383a.8.8 0 0 1-1.514 0l-.062-.383a10 10 0 0 0-4.627-6.904C12.85 21.122 10.776 21 8.774 21H.024C.547 31.581 9.29 40 20 40Z"
              ></path>
              <path
                fill="currentColor"
                d="M0 19h8.774c2.002 0 4.076-.122 5.78-1.172a10.018 10.018 0 0 0 3.274-3.274C18.878 12.85 19 10.776 19 8.774V0H6a6 6 0 0 0-6 6v13ZM46.455 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM211.711 12.104c5.591 0 8.289 3.905 8.289 8.428v8.495h-5.851V21.54c0-2.05-.748-3.742-2.893-3.742-2.145 0-2.86 1.692-2.86 3.742v7.486h-5.851V21.54c0-2.05-.715-3.742-2.861-3.742-2.145 0-2.893 1.692-2.893 3.742v7.486h-5.85v-8.495c0-4.523 2.697-8.428 8.288-8.428 3.056 0 5.266 1.204 6.274 3.189 1.072-1.985 3.413-3.19 6.208-3.19ZM180.427 23.82c1.885 0 2.698-1.725 2.698-3.776v-7.29h5.85v8.006c0 4.784-2.795 8.755-8.548 8.755-5.754 0-8.549-3.97-8.549-8.755v-8.006h5.851v7.29c0 2.05.812 3.776 2.698 3.776ZM163.275 29.547c-3.673 0-6.046-1.269-7.444-3.742l4.226-2.376c.585 1.041 1.462 1.562 2.925 1.562 1.203 0 1.755-.423 1.755-.944 0-1.985-8.581.033-8.581-6.28 0-3.06 2.6-5.533 7.021-5.533 3.868 0 5.981 1.887 6.924 3.71l-4.226 2.408c-.357-.976-1.463-1.562-2.568-1.562-.845 0-1.3.358-1.3.846 0 2.018 8.581.163 8.581 6.281 0 3.417-3.348 5.63-7.313 5.63ZM142.833 36.512h-5.851V20.858c0-4.98 3.738-8.592 8.939-8.592 5.071 0 8.939 3.873 8.939 8.592 0 5.207-3.446 8.657-8.614 8.657-1.203 0-2.405-.358-3.413-.912v7.909Zm3.088-12.497c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.124-3.088-3.124s-3.088 1.4-3.088 3.125c0 1.692 1.235 3.124 3.088 3.124ZM131.121 11.03c-1.918 0-3.51-1.595-3.51-3.515 0-1.92 1.592-3.515 3.51-3.515 1.918 0 3.511 1.595 3.511 3.515 0 1.92-1.593 3.515-3.511 3.515Zm-2.925 1.724h5.851v16.273h-5.851V12.754ZM116.97 29.515c-5.071 0-8.939-3.905-8.939-8.657 0-4.719 3.868-8.624 8.939-8.624s8.939 3.905 8.939 8.624c0 4.752-3.868 8.657-8.939 8.657Zm0-5.5c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.156-3.088-3.156s-3.088 1.432-3.088 3.156c0 1.693 1.235 3.125 3.088 3.125ZM96.983 37c-4.03 0-6.956-1.79-8.451-4.98l4.843-2.603c.52 1.107 1.495 2.246 3.51 2.246 2.114 0 3.511-1.335 3.674-3.678-.78.684-2.016 1.204-3.868 1.204-4.519 0-8.16-3.482-8.16-8.364 0-4.718 3.869-8.559 8.94-8.559 5.201 0 8.939 3.613 8.939 8.592v6.444c0 5.858-4.064 9.698-9.427 9.698Zm.39-13.31c1.755 0 3.088-1.205 3.088-2.995 0-1.757-1.332-2.929-3.088-2.929-1.723 0-3.088 1.172-3.088 2.93 0 1.79 1.365 2.993 3.088 2.993ZM78.607 29.515c-5.071 0-8.94-3.905-8.94-8.657 0-4.719 3.869-8.624 8.94-8.624 5.07 0 8.939 3.905 8.939 8.624 0 4.752-3.869 8.657-8.94 8.657Zm0-5.5c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.156-3.088-3.156s-3.088 1.432-3.088 3.156c0 1.693 1.235 3.125 3.088 3.125ZM59.013 7.06v16.434H68.7v5.533H58.2c-3.705 0-5.2-1.953-5.2-5.045V7.06h6.013Z"
              ></path>
            </svg>
          </div>
          <div className="h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 220 40"
            >
              <path
                fill="currentColor"
                d="M20 40c11.046 0 20-8.954 20-20V6a6 6 0 0 0-6-6H21v8.774c0 2.002.122 4.076 1.172 5.78a9.999 9.999 0 0 0 6.904 4.627l.383.062a.8.8 0 0 1 0 1.514l-.383.062a10 10 0 0 0-8.257 8.257l-.062.383a.8.8 0 0 1-1.514 0l-.062-.383a10 10 0 0 0-4.627-6.904C12.85 21.122 10.776 21 8.774 21H.024C.547 31.581 9.29 40 20 40Z"
              ></path>
              <path
                fill="currentColor"
                d="M0 19h8.774c2.002 0 4.076-.122 5.78-1.172a10.018 10.018 0 0 0 3.274-3.274C18.878 12.85 19 10.776 19 8.774V0H6a6 6 0 0 0-6 6v13ZM46.455 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM211.711 12.104c5.591 0 8.289 3.905 8.289 8.428v8.495h-5.851V21.54c0-2.05-.748-3.742-2.893-3.742-2.145 0-2.86 1.692-2.86 3.742v7.486h-5.851V21.54c0-2.05-.715-3.742-2.861-3.742-2.145 0-2.893 1.692-2.893 3.742v7.486h-5.85v-8.495c0-4.523 2.697-8.428 8.288-8.428 3.056 0 5.266 1.204 6.274 3.189 1.072-1.985 3.413-3.19 6.208-3.19ZM180.427 23.82c1.885 0 2.698-1.725 2.698-3.776v-7.29h5.85v8.006c0 4.784-2.795 8.755-8.548 8.755-5.754 0-8.549-3.97-8.549-8.755v-8.006h5.851v7.29c0 2.05.812 3.776 2.698 3.776ZM163.275 29.547c-3.673 0-6.046-1.269-7.444-3.742l4.226-2.376c.585 1.041 1.462 1.562 2.925 1.562 1.203 0 1.755-.423 1.755-.944 0-1.985-8.581.033-8.581-6.28 0-3.06 2.6-5.533 7.021-5.533 3.868 0 5.981 1.887 6.924 3.71l-4.226 2.408c-.357-.976-1.463-1.562-2.568-1.562-.845 0-1.3.358-1.3.846 0 2.018 8.581.163 8.581 6.281 0 3.417-3.348 5.63-7.313 5.63ZM142.833 36.512h-5.851V20.858c0-4.98 3.738-8.592 8.939-8.592 5.071 0 8.939 3.873 8.939 8.592 0 5.207-3.446 8.657-8.614 8.657-1.203 0-2.405-.358-3.413-.912v7.909Zm3.088-12.497c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.124-3.088-3.124s-3.088 1.4-3.088 3.125c0 1.692 1.235 3.124 3.088 3.124ZM131.121 11.03c-1.918 0-3.51-1.595-3.51-3.515 0-1.92 1.592-3.515 3.51-3.515 1.918 0 3.511 1.595 3.511 3.515 0 1.92-1.593 3.515-3.511 3.515Zm-2.925 1.724h5.851v16.273h-5.851V12.754ZM116.97 29.515c-5.071 0-8.939-3.905-8.939-8.657 0-4.719 3.868-8.624 8.939-8.624s8.939 3.905 8.939 8.624c0 4.752-3.868 8.657-8.939 8.657Zm0-5.5c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.156-3.088-3.156s-3.088 1.432-3.088 3.156c0 1.693 1.235 3.125 3.088 3.125ZM96.983 37c-4.03 0-6.956-1.79-8.451-4.98l4.843-2.603c.52 1.107 1.495 2.246 3.51 2.246 2.114 0 3.511-1.335 3.674-3.678-.78.684-2.016 1.204-3.868 1.204-4.519 0-8.16-3.482-8.16-8.364 0-4.718 3.869-8.559 8.94-8.559 5.201 0 8.939 3.613 8.939 8.592v6.444c0 5.858-4.064 9.698-9.427 9.698Zm.39-13.31c1.755 0 3.088-1.205 3.088-2.995 0-1.757-1.332-2.929-3.088-2.929-1.723 0-3.088 1.172-3.088 2.93 0 1.79 1.365 2.993 3.088 2.993ZM78.607 29.515c-5.071 0-8.94-3.905-8.94-8.657 0-4.719 3.869-8.624 8.94-8.624 5.07 0 8.939 3.905 8.939 8.624 0 4.752-3.869 8.657-8.94 8.657Zm0-5.5c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.156-3.088-3.156s-3.088 1.432-3.088 3.156c0 1.693 1.235 3.125 3.088 3.125ZM59.013 7.06v16.434H68.7v5.533H58.2c-3.705 0-5.2-1.953-5.2-5.045V7.06h6.013Z"
              ></path>
            </svg>
          </div>{" "}
          <div className="h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 220 40"
            >
              <path
                fill="currentColor"
                d="M20 40c11.046 0 20-8.954 20-20V6a6 6 0 0 0-6-6H21v8.774c0 2.002.122 4.076 1.172 5.78a9.999 9.999 0 0 0 6.904 4.627l.383.062a.8.8 0 0 1 0 1.514l-.383.062a10 10 0 0 0-8.257 8.257l-.062.383a.8.8 0 0 1-1.514 0l-.062-.383a10 10 0 0 0-4.627-6.904C12.85 21.122 10.776 21 8.774 21H.024C.547 31.581 9.29 40 20 40Z"
              ></path>
              <path
                fill="currentColor"
                d="M0 19h8.774c2.002 0 4.076-.122 5.78-1.172a10.018 10.018 0 0 0 3.274-3.274C18.878 12.85 19 10.776 19 8.774V0H6a6 6 0 0 0-6 6v13ZM46.455 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM211.711 12.104c5.591 0 8.289 3.905 8.289 8.428v8.495h-5.851V21.54c0-2.05-.748-3.742-2.893-3.742-2.145 0-2.86 1.692-2.86 3.742v7.486h-5.851V21.54c0-2.05-.715-3.742-2.861-3.742-2.145 0-2.893 1.692-2.893 3.742v7.486h-5.85v-8.495c0-4.523 2.697-8.428 8.288-8.428 3.056 0 5.266 1.204 6.274 3.189 1.072-1.985 3.413-3.19 6.208-3.19ZM180.427 23.82c1.885 0 2.698-1.725 2.698-3.776v-7.29h5.85v8.006c0 4.784-2.795 8.755-8.548 8.755-5.754 0-8.549-3.97-8.549-8.755v-8.006h5.851v7.29c0 2.05.812 3.776 2.698 3.776ZM163.275 29.547c-3.673 0-6.046-1.269-7.444-3.742l4.226-2.376c.585 1.041 1.462 1.562 2.925 1.562 1.203 0 1.755-.423 1.755-.944 0-1.985-8.581.033-8.581-6.28 0-3.06 2.6-5.533 7.021-5.533 3.868 0 5.981 1.887 6.924 3.71l-4.226 2.408c-.357-.976-1.463-1.562-2.568-1.562-.845 0-1.3.358-1.3.846 0 2.018 8.581.163 8.581 6.281 0 3.417-3.348 5.63-7.313 5.63ZM142.833 36.512h-5.851V20.858c0-4.98 3.738-8.592 8.939-8.592 5.071 0 8.939 3.873 8.939 8.592 0 5.207-3.446 8.657-8.614 8.657-1.203 0-2.405-.358-3.413-.912v7.909Zm3.088-12.497c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.124-3.088-3.124s-3.088 1.4-3.088 3.125c0 1.692 1.235 3.124 3.088 3.124ZM131.121 11.03c-1.918 0-3.51-1.595-3.51-3.515 0-1.92 1.592-3.515 3.51-3.515 1.918 0 3.511 1.595 3.511 3.515 0 1.92-1.593 3.515-3.511 3.515Zm-2.925 1.724h5.851v16.273h-5.851V12.754ZM116.97 29.515c-5.071 0-8.939-3.905-8.939-8.657 0-4.719 3.868-8.624 8.939-8.624s8.939 3.905 8.939 8.624c0 4.752-3.868 8.657-8.939 8.657Zm0-5.5c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.156-3.088-3.156s-3.088 1.432-3.088 3.156c0 1.693 1.235 3.125 3.088 3.125ZM96.983 37c-4.03 0-6.956-1.79-8.451-4.98l4.843-2.603c.52 1.107 1.495 2.246 3.51 2.246 2.114 0 3.511-1.335 3.674-3.678-.78.684-2.016 1.204-3.868 1.204-4.519 0-8.16-3.482-8.16-8.364 0-4.718 3.869-8.559 8.94-8.559 5.201 0 8.939 3.613 8.939 8.592v6.444c0 5.858-4.064 9.698-9.427 9.698Zm.39-13.31c1.755 0 3.088-1.205 3.088-2.995 0-1.757-1.332-2.929-3.088-2.929-1.723 0-3.088 1.172-3.088 2.93 0 1.79 1.365 2.993 3.088 2.993ZM78.607 29.515c-5.071 0-8.94-3.905-8.94-8.657 0-4.719 3.869-8.624 8.94-8.624 5.07 0 8.939 3.905 8.939 8.624 0 4.752-3.869 8.657-8.94 8.657Zm0-5.5c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.156-3.088-3.156s-3.088 1.432-3.088 3.156c0 1.693 1.235 3.125 3.088 3.125ZM59.013 7.06v16.434H68.7v5.533H58.2c-3.705 0-5.2-1.953-5.2-5.045V7.06h6.013Z"
              ></path>
            </svg>
          </div>{" "}
          <div className="h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 220 40"
            >
              <path
                fill="currentColor"
                d="M20 40c11.046 0 20-8.954 20-20V6a6 6 0 0 0-6-6H21v8.774c0 2.002.122 4.076 1.172 5.78a9.999 9.999 0 0 0 6.904 4.627l.383.062a.8.8 0 0 1 0 1.514l-.383.062a10 10 0 0 0-8.257 8.257l-.062.383a.8.8 0 0 1-1.514 0l-.062-.383a10 10 0 0 0-4.627-6.904C12.85 21.122 10.776 21 8.774 21H.024C.547 31.581 9.29 40 20 40Z"
              ></path>
              <path
                fill="currentColor"
                d="M0 19h8.774c2.002 0 4.076-.122 5.78-1.172a10.018 10.018 0 0 0 3.274-3.274C18.878 12.85 19 10.776 19 8.774V0H6a6 6 0 0 0-6 6v13ZM46.455 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM211.711 12.104c5.591 0 8.289 3.905 8.289 8.428v8.495h-5.851V21.54c0-2.05-.748-3.742-2.893-3.742-2.145 0-2.86 1.692-2.86 3.742v7.486h-5.851V21.54c0-2.05-.715-3.742-2.861-3.742-2.145 0-2.893 1.692-2.893 3.742v7.486h-5.85v-8.495c0-4.523 2.697-8.428 8.288-8.428 3.056 0 5.266 1.204 6.274 3.189 1.072-1.985 3.413-3.19 6.208-3.19ZM180.427 23.82c1.885 0 2.698-1.725 2.698-3.776v-7.29h5.85v8.006c0 4.784-2.795 8.755-8.548 8.755-5.754 0-8.549-3.97-8.549-8.755v-8.006h5.851v7.29c0 2.05.812 3.776 2.698 3.776ZM163.275 29.547c-3.673 0-6.046-1.269-7.444-3.742l4.226-2.376c.585 1.041 1.462 1.562 2.925 1.562 1.203 0 1.755-.423 1.755-.944 0-1.985-8.581.033-8.581-6.28 0-3.06 2.6-5.533 7.021-5.533 3.868 0 5.981 1.887 6.924 3.71l-4.226 2.408c-.357-.976-1.463-1.562-2.568-1.562-.845 0-1.3.358-1.3.846 0 2.018 8.581.163 8.581 6.281 0 3.417-3.348 5.63-7.313 5.63ZM142.833 36.512h-5.851V20.858c0-4.98 3.738-8.592 8.939-8.592 5.071 0 8.939 3.873 8.939 8.592 0 5.207-3.446 8.657-8.614 8.657-1.203 0-2.405-.358-3.413-.912v7.909Zm3.088-12.497c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.124-3.088-3.124s-3.088 1.4-3.088 3.125c0 1.692 1.235 3.124 3.088 3.124ZM131.121 11.03c-1.918 0-3.51-1.595-3.51-3.515 0-1.92 1.592-3.515 3.51-3.515 1.918 0 3.511 1.595 3.511 3.515 0 1.92-1.593 3.515-3.511 3.515Zm-2.925 1.724h5.851v16.273h-5.851V12.754ZM116.97 29.515c-5.071 0-8.939-3.905-8.939-8.657 0-4.719 3.868-8.624 8.939-8.624s8.939 3.905 8.939 8.624c0 4.752-3.868 8.657-8.939 8.657Zm0-5.5c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.156-3.088-3.156s-3.088 1.432-3.088 3.156c0 1.693 1.235 3.125 3.088 3.125ZM96.983 37c-4.03 0-6.956-1.79-8.451-4.98l4.843-2.603c.52 1.107 1.495 2.246 3.51 2.246 2.114 0 3.511-1.335 3.674-3.678-.78.684-2.016 1.204-3.868 1.204-4.519 0-8.16-3.482-8.16-8.364 0-4.718 3.869-8.559 8.94-8.559 5.201 0 8.939 3.613 8.939 8.592v6.444c0 5.858-4.064 9.698-9.427 9.698Zm.39-13.31c1.755 0 3.088-1.205 3.088-2.995 0-1.757-1.332-2.929-3.088-2.929-1.723 0-3.088 1.172-3.088 2.93 0 1.79 1.365 2.993 3.088 2.993ZM78.607 29.515c-5.071 0-8.94-3.905-8.94-8.657 0-4.719 3.869-8.624 8.94-8.624 5.07 0 8.939 3.905 8.939 8.624 0 4.752-3.869 8.657-8.94 8.657Zm0-5.5c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.156-3.088-3.156s-3.088 1.432-3.088 3.156c0 1.693 1.235 3.125 3.088 3.125ZM59.013 7.06v16.434H68.7v5.533H58.2c-3.705 0-5.2-1.953-5.2-5.045V7.06h6.013Z"
              ></path>
            </svg>
          </div>{" "}
          <div className="h-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 220 40"
            >
              <path
                fill="currentColor"
                d="M20 40c11.046 0 20-8.954 20-20V6a6 6 0 0 0-6-6H21v8.774c0 2.002.122 4.076 1.172 5.78a9.999 9.999 0 0 0 6.904 4.627l.383.062a.8.8 0 0 1 0 1.514l-.383.062a10 10 0 0 0-8.257 8.257l-.062.383a.8.8 0 0 1-1.514 0l-.062-.383a10 10 0 0 0-4.627-6.904C12.85 21.122 10.776 21 8.774 21H.024C.547 31.581 9.29 40 20 40Z"
              ></path>
              <path
                fill="currentColor"
                d="M0 19h8.774c2.002 0 4.076-.122 5.78-1.172a10.018 10.018 0 0 0 3.274-3.274C18.878 12.85 19 10.776 19 8.774V0H6a6 6 0 0 0-6 6v13ZM46.455 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM211.711 12.104c5.591 0 8.289 3.905 8.289 8.428v8.495h-5.851V21.54c0-2.05-.748-3.742-2.893-3.742-2.145 0-2.86 1.692-2.86 3.742v7.486h-5.851V21.54c0-2.05-.715-3.742-2.861-3.742-2.145 0-2.893 1.692-2.893 3.742v7.486h-5.85v-8.495c0-4.523 2.697-8.428 8.288-8.428 3.056 0 5.266 1.204 6.274 3.189 1.072-1.985 3.413-3.19 6.208-3.19ZM180.427 23.82c1.885 0 2.698-1.725 2.698-3.776v-7.29h5.85v8.006c0 4.784-2.795 8.755-8.548 8.755-5.754 0-8.549-3.97-8.549-8.755v-8.006h5.851v7.29c0 2.05.812 3.776 2.698 3.776ZM163.275 29.547c-3.673 0-6.046-1.269-7.444-3.742l4.226-2.376c.585 1.041 1.462 1.562 2.925 1.562 1.203 0 1.755-.423 1.755-.944 0-1.985-8.581.033-8.581-6.28 0-3.06 2.6-5.533 7.021-5.533 3.868 0 5.981 1.887 6.924 3.71l-4.226 2.408c-.357-.976-1.463-1.562-2.568-1.562-.845 0-1.3.358-1.3.846 0 2.018 8.581.163 8.581 6.281 0 3.417-3.348 5.63-7.313 5.63ZM142.833 36.512h-5.851V20.858c0-4.98 3.738-8.592 8.939-8.592 5.071 0 8.939 3.873 8.939 8.592 0 5.207-3.446 8.657-8.614 8.657-1.203 0-2.405-.358-3.413-.912v7.909Zm3.088-12.497c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.124-3.088-3.124s-3.088 1.4-3.088 3.125c0 1.692 1.235 3.124 3.088 3.124ZM131.121 11.03c-1.918 0-3.51-1.595-3.51-3.515 0-1.92 1.592-3.515 3.51-3.515 1.918 0 3.511 1.595 3.511 3.515 0 1.92-1.593 3.515-3.511 3.515Zm-2.925 1.724h5.851v16.273h-5.851V12.754ZM116.97 29.515c-5.071 0-8.939-3.905-8.939-8.657 0-4.719 3.868-8.624 8.939-8.624s8.939 3.905 8.939 8.624c0 4.752-3.868 8.657-8.939 8.657Zm0-5.5c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.156-3.088-3.156s-3.088 1.432-3.088 3.156c0 1.693 1.235 3.125 3.088 3.125ZM96.983 37c-4.03 0-6.956-1.79-8.451-4.98l4.843-2.603c.52 1.107 1.495 2.246 3.51 2.246 2.114 0 3.511-1.335 3.674-3.678-.78.684-2.016 1.204-3.868 1.204-4.519 0-8.16-3.482-8.16-8.364 0-4.718 3.869-8.559 8.94-8.559 5.201 0 8.939 3.613 8.939 8.592v6.444c0 5.858-4.064 9.698-9.427 9.698Zm.39-13.31c1.755 0 3.088-1.205 3.088-2.995 0-1.757-1.332-2.929-3.088-2.929-1.723 0-3.088 1.172-3.088 2.93 0 1.79 1.365 2.993 3.088 2.993ZM78.607 29.515c-5.071 0-8.94-3.905-8.94-8.657 0-4.719 3.869-8.624 8.94-8.624 5.07 0 8.939 3.905 8.939 8.624 0 4.752-3.869 8.657-8.94 8.657Zm0-5.5c1.853 0 3.088-1.432 3.088-3.125 0-1.724-1.235-3.156-3.088-3.156s-3.088 1.432-3.088 3.156c0 1.693 1.235 3.125 3.088 3.125ZM59.013 7.06v16.434H68.7v5.533H58.2c-3.705 0-5.2-1.953-5.2-5.045V7.06h6.013Z"
              ></path>
            </svg>
          </div>{" "}
        </div>
        <div className="w-full flex gap-4">
          <div className="flex flex-col  w-full rounded-3xl p-6 bg-green-50/10 hover:bg-green-50/50 duration-200 ease-in-out border border-green-100">
            <div className="flex flex-col gap-16 h-full ">
              <div className="flex flex-col gap-2 h-full">
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-green-600">Step 1</p>
                  <h2 className="text-xl font-medium tracking-tighter">
                    Connect your data
                  </h2>
                </div>
                <p className="text-md text-neutral-500 tracking-tight">
                  Connect your data via Airtable, Notion or CSV.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  w-full rounded-3xl p-6 bg-blue-50/10 border hover:bg-blue-50/50 duration-200 ease-in-out  border-blue-100/80">
            <div className="flex flex-col gap-16 h-full ">
              <div className="flex flex-col gap-2 h-full">
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-blue-600">Step 2</p>
                  <h2 className="text-xl font-medium tracking-tighter">
                    Customize
                  </h2>
                </div>
                <p className="text-md text-neutral-500 tracking-tight">
                  Add your branding and style.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  w-full rounded-3xl p-6 bg-yellow-50/10 border hover:bg-yellow-50/50 duration-200 ease-in-out border-yellow-100">
            <div className="flex flex-col gap-16 h-full ">
              <div className="flex flex-col gap-2 h-full">
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-yellow-600">Step 3</p>
                  <h2 className="text-xl font-medium tracking-tighter">
                    Add to your website
                  </h2>
                </div>
                <p className="text-md text-neutral-500 tracking-tight">
                  Embed or add via a link.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-12 items-center justify-center my-12">
          <div className="flex w-full flex-col gap-3 text-center">
            <h2 className="text-4xl font-medium leading-10 tracking-tighter">
              Why do I need this?
            </h2>
            <p className="text-md mt-2 text-neutral-500 tracking-tight">
              Typed UI makes it easy to add chat to your website
            </p>
          </div>
          <div className="w-full grid grid-cols-2 gap-4">
            <div className="flex flex-col relative  w-full rounded-3xl overflow-hidden  bg-neutral-50/50 border border-neutral-100">
              <Image
                src={art3}
                alt="chat"
                className=" absolute h-full  object-cover"
              />
              <div className="flex flex-col  text-white p-12 gap-2 z-10">
                <h2 className="text-3xl font-medium tracking-tighter">
                  Increase engagement
                </h2>
                <p className="text-xl  w-96 tracking-tight">
                  Let your users ask questions and receive answers in helpful UI
                  components.
                </p>
              </div>
              <div className="flex flex-col pb-6 px-6 relative ">
                <div className="h-full p-8 bg-white flex flex-col items-end rounded-xl shadow-md gap-5">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-white  px-4 py-2 inline-flex rounded-l-full rounded-t-full  flex w-auto bg-primary text-sm ">
                      I&apos;m looking for a 3 bed, 2 bath with a pool
                    </div>
                  </motion.div>
                  <div className="w-full flex flex-col gap-3">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      transition={{ delay: 1.3 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-primary px-4 py-2 inline-flex  rounded-r-full rounded-t-full  flex w-auto bg-muted text-sm ">
                        Ok, sure. Here are some properties you might like
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      transition={{ delay: 1.6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="flex flex-row gap-2 text-sm"
                    >
                      <div className="rounded-lg w-full flex flex-col   overflow-hidden bg-white shadow-sm border">
                        <div className="h-20 relative overflow-hidden">
                          <Image
                            src={house1}
                            alt="chat"
                            className=" absolute h-full  object-cover"
                          />
                        </div>
                        <div className="p-3 flex flex-col gap-1 ">
                          <h3 className="font-medium">Stunning Villa</h3>
                          <p className="text-sm">$1,246,297</p>
                        </div>
                      </div>
                      <div className="rounded-lg w-full flex flex-col   overflow-hidden bg-white shadow-sm border">
                        <div className="h-20 relative overflow-hidden">
                          <Image
                            src={art1}
                            alt="chat"
                            className=" absolute   object-cover"
                          />
                        </div>
                        <div className="p-3 flex flex-col gap-1 ">
                          <h3 className="font-medium">Stunning Villa</h3>
                          <p className="text-sm">$1,246,297</p>
                        </div>
                      </div>
                      <div className="rounded-lg w-full flex flex-col   overflow-hidden bg-white shadow-sm border">
                        <div className="h-20 relative overflow-hidden">
                          <Image
                            src={art1}
                            alt="chat"
                            className=" absolute   object-cover"
                          />
                        </div>
                        <div className="p-3 flex flex-col gap-1 ">
                          <h3 className="font-medium">Stunning Villa</h3>
                          <p className="text-sm">$1,246,297</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ delay: 4.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-row gap-2 text-sm"
                  >
                    <div className="text-white px-4 py-2 inline-flex rounded-l-full rounded-t-full  flex w-auto bg-primary text-sm ">
                      These look great, which is best if I like hiking?
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex flex-col relative  w-full rounded-3xl overflow-hidden  bg-neutral-50/50 border border-neutral-100">
              <Image
                src={art1}
                alt="chat"
                className=" absolute h-full  object-cover"
              />
              <div className="flex flex-col  text-white p-12 gap-2 z-10">
                <h2 className="text-3xl font-medium tracking-tighter">
                  Improve customer support
                </h2>
                <p className="text-xl  w-96 tracking-tight">
                  Provide instant answers to user queries by leveraging your
                  data.
                </p>
              </div>
              <div className="flex flex-col pb-6 px-6 relative ">
                <div className="h-full p-8 bg-white flex flex-col items-end rounded-xl shadow-md gap-5">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-white  px-4 py-2 inline-flex rounded-l-full rounded-t-full  flex w-auto bg-primary text-sm ">
                      Are you open at 6pm on Tuesday?
                    </div>
                  </motion.div>
                  <div className="w-full flex flex-col gap-3">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      transition={{ delay: 1.3 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-primary px-4 py-2 inline-flex  rounded-r-full rounded-t-full  flex w-auto bg-muted text-sm ">
                        Yes we are open from 9am to 7pm on Tuesday
                      </div>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ delay: 4.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-row gap-2 text-sm"
                  >
                    <div className="text-white px-4 py-2 inline-flex rounded-l-full rounded-t-full  flex w-auto bg-primary text-sm ">
                      Perfect, thanks!
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="flex flex-col relative  w-full rounded-3xl overflow-hidden  bg-neutral-50/50 border border-neutral-100">
              <Image
                src={art10}
                alt="chat"
                className=" absolute   object-cover"
              />
              <div className="flex flex-col  text-white p-12 gap-2 z-10">
                <h2 className="text-3xl font-medium tracking-tighter">
                  Generate leads
                </h2>
                <p className="text-xl w-96 tracking-tight">
                  Capture potential customers by allowing them to interact and
                  get immediate answers.
                </p>
              </div>
              <div className="flex flex-col pb-6 px-6 relative h-64">
                <div className="h-full bg-white p-8 flex flex-col items-end rounded-xl shadow-md gap-5">
                  <div>
                    <div className="text-white px-4 py-2 inline-flex rounded-l-full rounded-t-full  flex w-auto bg-primary text-sm ">
                      I&apos;m looking to buy a house for $1-3m
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="text-primary px-4 py-2 inline-flex rounded-r-full rounded-t-full  flex w-auto bg-muted text-sm ">
                      Great, we can help you with that. An areas in particular?
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col relative  w-full rounded-3xl overflow-hidden  bg-neutral-50/50 border border-neutral-100">
              <Image
                src={art12}
                alt="chat"
                className=" absolute  scale-x-[-1] object-cover"
              />
              <div className="flex flex-col  text-white p-12 gap-2 z-10">
                <h2 className="text-3xl font-medium tracking-tighter">
                  Save time
                </h2>
                <p className="text-xl w-96 tracking-tight">
                  Your team can spend less time on support by enabling users to
                  quickly get the information they need.
                </p>
              </div>
              <div className="flex flex-col pb-6 px-6 relative h-64">
                <div className="h-full bg-white p-8 flex flex-col items-end rounded-xl shadow-md gap-5">
                  <div>
                    <div className="text-white px-4 py-2 inline-flex rounded-l-full rounded-t-full  flex w-auto bg-primary text-sm ">
                      I don&apos;t know what I want...
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="text-primary px-4 py-2 inline-flex rounded-r-full rounded-t-full  flex w-auto bg-muted text-sm ">
                      Yes, we&apos;re open every weekday from 9am to 5pm
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-12 items-center justify-center my-12">
          <div className="flex w-full flex-col gap-3 text-center">
            <h2 className="text-4xl font-medium leading-10 tracking-tighter">
              Pricing
            </h2>
            <p className="text-md mt-2 text-neutral-500 tracking-tight">
              Pricing plans that scale with you
            </p>
          </div>
          <div className="w-full flex gap-4">
            <div className="flex flex-col  w-full rounded-3xl p-10 bg-neutral-50 border border-neutral-200">
              <div className="flex flex-col gap-16 h-full ">
                <div className="flex flex-col gap-3 h-full">
                  <Image
                    src={icons01.src}
                    alt="Grow"
                    width={40}
                    height={40}
                    className="blend-darken mb-4"
                  />
                  <h2 className="text-4xl font-medium tracking-tighter">
                    $39/mo
                  </h2>
                  <p className="text-lg mt-3 text-neutral-500 tracking-tight">
                    Start
                  </p>
                  <ul>
                    <li>GPT-3.5 Turbo</li>
                    <li className="opacity-50">Custom Branding</li>
                    <li className="opacity-50">Custom Domain</li>
                    <li className="">10 Generative UI Components</li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://buy.stripe.com/00g3d3giEbraeHe3ce"
                    target="_blank"
                    className="bg-neutral-900 cursor-pointer hover:bg-neutral-800 duration-200 ease-in-out inline-flex flex-1 items-center justify-center  text-white px-4 py-2 rounded-full"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col  w-full rounded-3xl p-10 bg-neutral-50 border border-neutral-200">
              <div className="flex flex-col gap-16 h-full ">
                <div className="flex flex-col gap-3 h-full">
                  <Image
                    src={icons02.src}
                    alt="Grow"
                    width={40}
                    height={40}
                    className="blend-darken mb-4"
                  />
                  <h2 className="text-4xl font-medium tracking-tighter">
                    $99/mo
                  </h2>
                  <p className="text-lg mt-3 text-neutral-500 tracking-tight">
                    Grow
                  </p>
                  <ul>
                    <li>GPT-4 Turbo</li>
                    <li>Custom Branding</li>
                    <li>Remove Built with Typed UI</li>
                    <li>Custom Domain</li>
                    <li>28 Generative UI Components</li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://buy.stripe.com/7sIfZP1nK1QAgPmeUV"
                    target="_blank"
                    className="bg-neutral-900  cursor-pointer hover:bg-neutral-800 duration-200 ease-in-out inline-flex flex-1 items-center justify-center  text-white px-4 py-2 rounded-full"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col  w-full rounded-3xl p-10 bg-neutral-50 border border-neutral-200">
              <div className="flex flex-col gap-16  ">
                <div className="flex flex-col gap-3">
                  <Image
                    src={icons03.src}
                    alt="Grow"
                    width={40}
                    height={40}
                    className="blend-darken mb-4"
                  />
                  <h2 className="text-4xl font-medium tracking-tighter">
                    $299/mo
                  </h2>
                  <p className="text-lg mt-3 text-neutral-500 tracking-tight">
                    Pro
                  </p>
                  <ul>
                    <li>GPT-4 Turbo, Llama 3 70b & Claude Opus 3</li>
                    <li className="">Custom Branding</li>
                    <li className="">Custom Domain</li>
                    <li className="">64 Generative UI Components</li>
                    <li className="">Monthly Support</li>
                  </ul>
                </div>
                <div>
                  <a
                    href="https://cal.com/dylanlp"
                    className="bg-neutral-900 cursor-pointer hover:bg-neutral-800 duration-200 ease-in-out inline-flex flex-1 items-center justify-center  text-white px-4 py-2 rounded-full"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-12 items-center justify-center my-12">
          <div className="flex w-full flex-col gap-3 text-center">
            <h2 className="text-4xl font-medium leading-10 tracking-tighter">
              Features
            </h2>
            <p className="text-sm mt-2 text-neutral-500 tracking-tight">
              Pricing plans that scale with you
            </p>
          </div>
          <div className="w-full flex gap-4">
            <div className="flex flex-col  w-full rounded-3xl p-4 bg-muted/10 hover:bg-muted/50 duration-200 ease-in-out border border-neutral-100">
              <div className="flex flex-col gap-16 h-full ">
                <div className="flex flex-col gap-2 h-full">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-green-600">Icon</p>
                    <h2 className="text-lg font-medium tracking-tighter">
                      Connect your data
                    </h2>
                  </div>
                  <p className="text-sm text-neutral-500 tracking-tight">
                    Connect your data via Airtable, Notion or CSV.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col  w-full rounded-3xl p-4 bg-muted/10 hover:bg-muted/50 duration-200 ease-in-out border border-neutral-100">
              <div className="flex flex-col gap-16 h-full ">
                <div className="flex flex-col gap-2 h-full">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-green-600">Icon</p>
                    <h2 className="text-lg font-medium tracking-tighter">
                      Connect your data
                    </h2>
                  </div>
                  <p className="text-sm text-neutral-500 tracking-tight">
                    Connect your data via Airtable, Notion or CSV.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col  w-full rounded-3xl p-4 bg-muted/10 hover:bg-muted/50 duration-200 ease-in-out border border-neutral-100">
              <div className="flex flex-col gap-16 h-full ">
                <div className="flex flex-col gap-2 h-full">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-green-600">Icon</p>
                    <h2 className="text-lg font-medium tracking-tighter">
                      Connect your data
                    </h2>
                  </div>
                  <p className="text-sm text-neutral-500 tracking-tight">
                    Connect your data via Airtable, Notion or CSV.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col  w-full rounded-3xl p-4 bg-muted/10 hover:bg-muted/50 duration-200 ease-in-out border border-neutral-100">
              <div className="flex flex-col gap-16 h-full ">
                <div className="flex flex-col gap-2 h-full">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-green-600">Icon</p>
                    <h2 className="text-lg font-medium tracking-tighter">
                      Connect your data
                    </h2>
                  </div>
                  <p className="text-sm text-neutral-500 tracking-tight">
                    Connect your data via Airtable, Notion or CSV.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col  w-full rounded-3xl p-4 bg-muted/10 hover:bg-muted/50 duration-200 ease-in-out border border-neutral-100">
              <div className="flex flex-col gap-16 h-full ">
                <div className="flex flex-col gap-2 h-full">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-green-600">Icon</p>
                    <h2 className="text-lg font-medium tracking-tighter">
                      Connect your data
                    </h2>
                  </div>
                  <p className="text-sm text-neutral-500 tracking-tight">
                    Connect your data via Airtable, Notion or CSV.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex gap-4 text-xs text-neutral-400 justify-between">
          <p>© 2018 - 2024 Bankside Partners Ltd.</p>
          <p>London, UK</p>
        </div>
      </div>
    </main>
  );
}
