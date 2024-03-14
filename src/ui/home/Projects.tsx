"use client";

import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";

import { poppins } from "@/utils/fonts";
import { ProjectData } from "@/utils/data";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TracingBeam } from "../TracingBeam";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Projects() {
  useGSAP(() => {
    const projectCards = gsap.utils.toArray(".project-card");
    projectCards.forEach((projectCard: any) => {      
      gsap.from(projectCard, {
        y: 500,
        opacity: 0,
        stagger: 0.1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: projectCard,
          start: "top bottom",
          toggleActions: "play none none reverse",
        }
      });
    })
  })
  return (
      <section className="w-full overflow-hidden py-11">
    <TracingBeam>
        <div className="flex flex-col items-center sm:items-end py-11">
          <h3
            className="text-primary text-4xl text-center xl:text-start"
            id="projects"
          >
            MY PROJECTS
          </h3>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-[160px] h-[6px] bg-secondary rounded-lg" />
            <h5 className="text-secondary text-2xl flex-shrink-0">Works</h5>
            <div className="w-[180px] h-[6px] bg-secondary rounded-lg xl:hidden" />
          </div>
        </div>
          <div
            className={`${poppins.className} flex flex-col gap-16`}
            style={{ alignItems: "flex-start" }}
          >
            {ProjectData.map((project, index) => (
              <article
                key={index}
                className={`project-card group relative aspect-video h-[36rem] w-[36rem] cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl ${
                  index % 2 === 0 ? "ml-auto" : "mr-auto"
                }`}
              >
                <div className="relative h-full w-full">
                  <Image
                    className="absolute opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300"
                    src={project.image}
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "left" }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent to-100% text-white transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/100 group-hover:transition-all group-hover:duration-500">
                  <h2 className="absolute bottom-8 bg-dark px-3 py-2 rounded-md left-8 m-0 font-extrabold transition-all delay-300 duration-100 ease-out group-hover:bottom-1/2 group-hover:delay-0 group-hover:duration-300">
                    {project.title}
                  </h2>
                  <p className="absolute left-8 top-1/2 line-clamp-3 max-w-[80%] pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300">
                    {project.description}
                  </p>
                  <div className="flex">

                  <Link
                    className="absolute bottom-8 left-8 max-w-[80%] rounded-lg border px-4 py-2 uppercase opacity-0 transition-opacity ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:delay-500 group-hover:duration-300"
                    href={project.link_github}
                    target="_blank"
                  >
                    Visit Repository
                  </Link>
                  {project.link_site && (  
                    <Link
                      className="absolute ms-44 bottom-8 left-8 max-w-[80%] rounded-lg border px-4 py-2 uppercase opacity-0 transition-opacity ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:delay-500 group-hover:duration-300"
                      href={project.link_site}
                      target="_blank"
                    >
                      Visit Site
                    </Link>
                  )}
                  </div>
                </div>
              </article>
            ))}
          </div>
    </TracingBeam>
      </section>
  );
}
