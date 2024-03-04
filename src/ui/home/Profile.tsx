"use client";

import { useEffect } from "react";
import Image from "next/image";

import AOS from "aos";
import { poppins } from "@/utils/fonts";

import { Icon } from "@iconify/react";

export default function Profile() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <section className="w-full h-full p-5 overflow-hidden">
      <div className="grid xl:grid-cols-12 grid-cols-4 place-items-center">
        <div className="col-span-4 max-w-[330px]" data-aos="fade-right">
          <h3 className="text-primary text-4xl text-center xl:text-start">
            INTRODUCTION
          </h3>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-[180px] h-[6px] bg-secondary rounded-lg xl:hidden" />
            <h5 className="text-secondary text-2xl flex-shrink-0">About Me</h5>
            <div className="w-[180px] h-[6px] bg-secondary rounded-lg" />
          </div>
          <div className="flex justify-center flex-col gap-3">
            <div className="w-full h-[230px] sm:h-[330px] bg-primary flex justify-center items-center rounded-lg flex-shrink-0">
              <div className="relative w-[260px] h-[200px] sm:w-[300px] sm:h-[230px]">
                <Image
                  src="/profile_image.webp"
                  alt="profile"
                  fill
                  className="scale-125"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row xl:flex-col md:justify-center md:gap-8 xl:gap-0">
              <div
                className={`${poppins.className} w-full h-full flex flex-col gap-4 bg-primary bg-opacity-70 p-3 rounded-lg text-white text-[14px] flex-shrink-0`}
              >
                <span className="text-[#ffffff] text-[13px] md:text-[15px]">
                  Hello! My Name is <span>Wildan Nur Rahman</span>
                </span>
                <p className="leading-12 text-[13px] md:text-[15px]">
                  I am a <span className="">Web Developer</span> with {">"} 1
                  year of expertise in working towards developing robust
                  websites using various programming languages such as
                  Javascript and Typescript.
                </p>
                <span className="text-[13px] md:text-[15px]">Please contact me!</span>
              </div>
              <div className={`${poppins.className} mt-5`}>
                <span className="py-1 px-12 bg-primary text-white text-[13px] lg:text-[15px] font-semibold rounded-xl">
                  Contact
                </span>
                <ul className="list-disc list-inside mt-3 text-[13px] md:text-[14px] flex flex-col gap-1 text-secondary marker:text-primary marker:text-[16px]">
                  <li>Phone: +6285172279467</li>
                  <li className="whitespace-nowrap">
                    Email: wildannurrahman30@gmail.com
                  </li>
                  <li>Instagram: @wildanr7_</li>
                  <li>Discord: wil.8442</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8 mt-5 sm:mt-11 xl:mt-0">
          <div className="flex flex-col" data-aos="fade-down">
          <div className="flex items-center justify-center gap-3 mb-3 sm:hidden">
            <div className="w-full h-[6px] bg-secondary rounded-lg xl:hidden" />
            <h5 className="text-secondary text-2xl flex-shrink-0">Software Skills</h5>
            <div className="w-full h-[6px] bg-secondary rounded-lg" />
          </div>
            <div
              className={`${poppins.className} flex items-center justify-center flex-wrap sm:flex-none w-full gap-7 sm:gap-8`}
            >
              <div className="flex sm:basis-2 basis-0 sm:flex-shrink-0 flex-shrink-1 sm:flex-grow-0 flex-grow flex-col items-center justify-center gap-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20 bg-white text-dark rounded-xl flex justify-center items-center text-[24px]">
                  +
                </div>
                <span className="text-[12px] sm:text-[14px] whitespace-nowrap">Software Skills</span>
              </div>
              <div className="flex sm:basis-2 basis-0 sm:flex-shrink-0 flex-shrink-1 sm:flex-grow-0 flex-grow flex-col items-center gap-1">
                <Icon icon="skill-icons:javascript" className="w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20" />
                <span className="text-[12px] sm:text-[14px]">Javascript</span>
              </div>
              <div className="flex sm:basis-2 basis-0 sm:flex-shrink-0 flex-shrink-1 sm:flex-grow-0 flex-grow flex-col items-center gap-1">
                <Icon icon="skill-icons:typescript" className="w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20" />
                <span className="text-[12px] sm:text-[14px]">Typescript</span>
              </div>
              <div className="flex sm:basis-2 basis-0 sm:flex-shrink-0 flex-shrink-1 sm:flex-grow-0 flex-grow flex-col items-center gap-1">
                <Icon icon="skill-icons:react-dark" className="w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20" />
                <span className="text-[12px] sm:text-[14px] whitespace-nowrap">React Js</span>
              </div>
              <div className="flex sm:basis-2 basis-0 sm:flex-shrink-0 flex-shrink-1 sm:flex-grow-0 flex-grow flex-col items-center gap-1">
                <Icon icon="skill-icons:git" className="w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20" />
                <span className="text-[12px] sm:text-[14px]">Git</span>
              </div>
              <div className="flex sm:basis-2 basis-0 sm:flex-shrink-0 flex-shrink-1 sm:flex-grow-0 flex-grow flex-col items-center gap-1">
                <Icon icon="ri:nextjs-fill" className="w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20" />
                <span className="text-[12px] sm:text-[14px]">Next Js</span>
              </div>
            </div>
          </div>
          <div
            className={`grid grid-cols-3 sm:grid-cols-7 xl:grid-cols-6 ${poppins.className} place-items-start mt-11 mx-2 sm:mx-11`}
            data-aos="fade-left"
          >
            <div className="col-span-3 flex flex-col xl:block w-full">
              <div className="flex flex-col gap-3">
                <span className="py-1 px-12 bg-primary text-white text-[13px] lg:text-[15px] font-semibold rounded-xl w-full sm:w-max text-center sm:text-start">
                  Education
                </span>
                <div
                  className={`flex sm:flex-col lg:flex-row gap-3 lg:gap-11 text-[15px] justify-center sm:justify-start`}
                >
                  <h3 className="text-primary font-bold whitespace-nowrap text-[13px] sm:text-[15px]">
                    2020 - <span className="italic">Now</span>
                  </h3>
                  <div className="flex flex-col gap-1">
                    <p className="whitespace-nowrap text-[14px] sm:text-[15px]">UIN Syarif Hidayatullah Jakarta</p>
                    <span className="text-[12px] sm:text-[14px] italic">
                      Information System
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-5">
                <span className="py-1 px-12 bg-primary text-white text-[13px] lg:text-[15px] font-semibold rounded-xl w-full sm:w-max text-center sm:text-start">
                  Interests
                </span>
                <div className="flex flex-wrap gap-3 max-w-[350px] justify-center sm:justify-start mt-1 sm:mt-3">
                  <div
                    className={`${poppins.className} flex gap-2 text-[15px]`}
                  >
                    <span className="bg-white py-1 px-5 text-[10px] sm:text-[12px] text-dark rounded-xl font-bold">
                      #Coding
                    </span>
                  </div>
                  <div
                    className={`${poppins.className} flex gap-2 text-[15px]`}
                  >
                    <span className="bg-white py-1 px-5 text-[10px] sm:text-[12px] text-dark rounded-xl font-bold">
                      #Reading
                    </span>
                  </div>
                  <div
                    className={`${poppins.className} flex gap-2 text-[15px]`}
                  >
                    <span className="bg-white py-1 px-5 text-[10px] sm:text-[12px] text-dark rounded-xl font-bold">
                      #Films
                    </span>
                  </div>
                  <div
                    className={`${poppins.className} flex gap-2 text-[15px]`}
                  >
                    <span className="bg-white py-1 px-5 text-[10px] sm:text-[12px] text-dark rounded-xl font-bold">
                      #Comic
                    </span>
                  </div>
                  <div
                    className={`${poppins.className} flex gap-2 text-[15px]`}
                  >
                    <span className="bg-white py-1 px-5 text-[10px] sm:text-[12px] text-dark rounded-xl font-bold">
                      #Music
                    </span>
                  </div>
                  <div
                    className={`${poppins.className} flex gap-2 text-[15px]`}
                  >
                    <span className="bg-white py-1 px-5 text-[10px] sm:text-[12px] text-dark rounded-xl font-bold">
                      #Workout
                    </span>
                  </div>
                  <div
                    className={`${poppins.className} flex gap-2 text-[15px]`}
                  >
                    <span className="bg-white py-1 px-5 text-[10px] sm:text-[12px] text-dark rounded-xl font-bold">
                      #Sports
                    </span>
                  </div>
                  <div
                    className={`${poppins.className} flex gap-2 text-[15px]`}
                  >
                    <span className="bg-white py-1 px-5 text-[10px] sm:text-[12px] text-dark rounded-xl font-bold">
                      #Gaming
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-col gap-3 mt-5 sm:mt-8 hidden sm:flex">
                <span className="py-1 px-12 bg-primary text-white text-[13px] lg:text-[15px] font-semibold rounded-xl w-full sm:w-max text-center sm:text-start">
                  Curriculum Vitae
                </span>
                <button className="mt-1 w-max h-12 flex gap-3 animate-shimmer items-center justify-center rounded-2xl border border-primary bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  Download CV
                  <Icon icon="bxs:file" className="w-7 h-7" />
                </button>
              </div>
            </div>
            <div className="col-span-1 w-full h-full translate-x-[30px] xl:hidden">
              <div className="w-1 h-full bg-primary rounded-lg"></div>
            </div>
            <div className="col-span-3 flex flex-col xl:block w-full mt-5 sm:mt-0">
              <div className="flex flex-col gap-3">
                <span className="py-1 px-12 bg-primary text-white text-[13px] lg:text-[15px] font-semibold rounded-xl w-full sm:w-max text-center sm:text-start">
                  Experiences
                </span>
                <div
                  className={`flex sm:flex-col lg:flex-row gap-3 lg:gap-11 text-[15px]`}
                >
                  <h3 className="text-primary font-bold whitespace-nowrap text-[13px] sm:text-[15px]">
                    08/2023 - 11/2023
                  </h3>
                  <div className="flex flex-col gap-1">
                    <p className="text-[13px] sm:text-[15px]">PT Inovasi Talenta Digital</p>
                    <span className="text-[12px] sm:text-[14px] italic">
                      Intern Full Stack Web Developer
                    </span>
                  </div>
                </div>
                <div
                  className={`flex sm:flex-col lg:flex-row gap-3 lg:gap-11 text-[15px]`}
                >
                  <h3 className="text-primary font-bold whitespace-nowrap text-[13px] sm:text-[15px]">
                    08/2023 - 11/2023
                  </h3>
                  <div className="flex flex-col gap-1">
                    <p className="whitespace-nowrap text-[13px] sm:text-[15px]">Mini Club Developer UIN Jakarta</p>
                    <span className="text-[12px] sm:text-[14px] italic">
                      Intern Front End Web Developer
                    </span>
                  </div>
                </div>
                <div
                  className={`flex sm:flex-col lg:flex-row gap-3 lg:gap-11 text-[15px]`}
                >
                  <h3 className="text-primary font-bold whitespace-nowrap text-[13px] sm:text-[15px]">
                    08/2023 - 11/2023
                  </h3>
                  <div className="flex flex-col gap-1">
                    <p className="text-[13px] sm:text-[15px]">Google Student UIN Jakarta</p>
                    <span className="text-[12px] sm:text-[14px] italic sm:whitespace-nowrap">
                      Member of Front End Developer Class
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-5">
                <span className="py-1 px-12 bg-primary text-white text-[13px] lg:text-[15px] font-semibold rounded-xl w-full sm:w-max text-center sm:text-start">
                  Abilities
                </span>
                <div className="flex flex-wrap gap-8 mt-1">
                  <div className="flex flex-col items-center">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20">
                      <Image src="/adapt.webp" alt="time" fill />
                    </div>
                    <span className="text-[12px]">Adaptation</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20">
                      <Image src="/time.webp" fill alt="time" />
                    </div>
                    <span className="text-[12px]">Time Management</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20">
                      <Image src="/solve.webp" fill alt="time" />
                    </div>
                    <span className="text-[12px]">Problem Solving</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20">
                      <Image src="/team.webp" fill alt="time" />
                    </div>
                    <span className="text-[12px]">Communication</span>
                  </div>
                </div>
              </div>
              <div className="flex-col gap-3 mt-5 sm:mt-8 flex sm:hidden">
                <span className="py-1 px-12 bg-primary text-white text-[13px] lg:text-[15px] font-semibold rounded-xl w-full sm:w-max text-center sm:text-start">
                  Curriculum Vitae
                </span>
                <button className="mt-1 w-max h-12 flex gap-3 animate-shimmer items-center justify-center rounded-2xl border border-primary bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  Download CV
                  <Icon icon="bxs:file" className="w-7 h-7" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
