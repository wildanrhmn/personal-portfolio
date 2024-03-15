"use client";

import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";

import { Spotlight } from "../Spotlight";
import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    gsap.from(".hero", {
      y: -500,
      duration: 0.5,
      autoAlpha: 0,
      delay: 0.5,
      ease: "power2.inOut",
    });
    gsap.from(".icon", {
      x: 500,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      delay: 1,
    });
    gsap.from(".webdev", {
      x: -500,
      opacity: 0,
      duration: 0.5,
      delay: 1,
      autoAlpha: 0,
    });
    gsap.from(".portfolio", {
      y: 500,
      opacity: 0,
      duration: 0.5,
      autoAlpha: 0,
      ease: "power2.inOut",
    });
    gsap.to(".portfolio h1", {
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "center top",
        scrub: true,
      },
      color: "#005ABB",
    });
  });

  return (
    <section className="hero-section relative w-full h-[100vh] p-5 grid grid-cols-12 grid-rows-16 overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-96 md:-top-20"
        fill="white"
      />
      <div className="lg:w-max lg:h-max w-full h-full translate-y-[500px] relative md:row-start-13 col-span-12 md:translate-y-8 lg:-translate-x-20 lg:-translate-y-2 lg:col-start-2 lg:row-start-6 xl:-translate-x-16 xl:-translate-y-8 2xl:-translate-x-14 2xl:-translate-y-4">
        <div className="flex justify-center items-center gap-5 bg-transparent p-3 rounded-xl">
          <Link
            href="https://www.linkedin.com/in/wildan-nur-rahman-96040b239/"
            target="_blank"
            className="icon"
          >
            <Icon
              icon="mdi:linkedin"
              className="w-16 h-16 md:w-24 md:h-24 lg:w-16 lg:h-16 xl:w-20 xl:h-20 cursor-pointer text-secondary hover:text-primary"
              style={{ transition: "all 0.2s ease-in-out" }}
            />
          </Link>
          <Link
            href="https://github.com/wildanrhmn"
            target="_blank"
            className="icon"
          >
            <Icon
              icon="mdi:github"
              className="w-16 h-16 md:w-24 md:h-24 lg:w-16 lg:h-16 xl:w-20 xl:h-20 cursor-pointer text-secondary hover:text-primary"
              style={{ transition: "all 0.2s ease-in-out" }}
            />
          </Link>
          <Link
            href="https://www.instagram.com/wildnr_/"
            target="_blank"
            className="icon"
          >
            <Icon
              icon="mdi:instagram"
              className="w-16 h-16 md:w-24 md:h-24 lg:w-16 lg:h-16 xl:w-20 xl:h-20 cursor-pointer text-secondary hover:text-primary"
              style={{ transition: "all 0.2s ease-in-out" }}
            />
          </Link>
        </div>
      </div>
      <div className="hero invisible grid place-items-center z-10 col-span-12 row-start-4 md:col-span-8 md:row-start-5 md:col-start-3 lg:col-start-5 lg:col-span-4 xl:row-start-4">
        <Image src="/hero_image.webp" width={600} height={600} alt="hero" />
      </div>
      <div className="webdev invisible text-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[300px] md:-translate-y-[350px] lg:static lg:col-start-9 lg:row-start-7 lg:-translate-x-14 lg:-translate-y-1 xl:-translate-x-0 xl:-translate-y-5 2xl:-translate-x-12">
        <h1 className="text-secondary whitespace-nowrap tracking-[5px] md:text-[55px] md:tracking-[10px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] 2xl:tracking-[15px]">
          WEB DEVELOPER
        </h1>
      </div>
      <div className="portfolio invisible absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100px] md:translate-x-[-49%] lg:-translate-x-[48%] xl:-translate-x-[47%] 2xl:-translate-x-[49%] md:-translate-y-1/2 z-0">
        <h1
          style={{ WebkitTextStroke: "3px #005ABB" }}
          className="text-[55px] text-transparent tracking-[5px] md:text-[90px] md:tracking-[25px] lg:text-[100px] lg:tracking-[50px] xl:tracking-[65px] xl:text-[130px] 2xl:text-[200px]"
        >
          PORTFOLIO
        </h1>
      </div>
    </section>
  );
}
