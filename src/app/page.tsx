import Hero from "@/ui/home/Hero";
import Profile from "@/ui/home/Profile";
import Projects from "@/ui/home/Projects";
import { FloatingNav } from "@/ui/FloatingNavbar";

export default function Home() {
  const navItems = [
    {
      name: "Hero",
      link: "#hero",
    },
    {
      name: "About",
      link: "#about",

    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact Me",
      link: "#contact",
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Profile />
      <Projects />
    </div>
  );
}
