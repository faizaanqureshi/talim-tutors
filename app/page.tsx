import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
import { LuPhoneCall } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import Modal from "@/components/ui/modal";

const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-stone-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Faizaan Qureshi",
    designation: "Computer Science (UWaterloo) and Business Administration (Laurier)",
    content: (
      <div className="flex flex-col md:flex-row gap-4">
        <Image src="/faizaan.png" height={96} width={96} alt="faizaan" className="rounded-full"></Image>
        <p className="text-black text-sm">
          A <Highlight>fourth year</Highlight> student with several <Highlight>software engineering</Highlight> internships under his belt, his mastery of <Highlight>mathematics</Highlight> is unparalleled. He also created this website.
        </p>
      </div>
    ),
  },
  {
    id: 1,
    name: "Alyaan Malik",
    designation: "Computer Science (UWaterloo)",
    content: (
      <div className="flex flex-col md:flex-row gap-4">
        <Image src="/alyaan.png" height={96} width={96} alt="faizaan" className="rounded-full"></Image>
        <p className="text-black text-sm">
          A <Highlight>fourth year</Highlight> student with a knack for analyzing data and trends using advanced tools such as <Highlight>Python</Highlight>. He believes everyone should learn to see the world using numbers.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    name: "Omar Abdulrahman",
    designation: "Computer Engineering (McMaster)",
    content: (
      <div className="flex flex-col md:flex-row gap-4">
        <Image src="/omar.png" height={96} width={96} alt="faizaan" className="rounded-full"></Image>
        <p className="text-black text-sm">
          A <Highlight>fourth year</Highlight> student who TA&apos;d advanced third year engineering courses and is working 16-months at Synopsys in processor design
        </p>
      </div>
    ),
  },
  {
    id: 3,
    name: "Ali Shariq",
    designation: "Computer Engineering (McMaster)",
    content: (
      <div className="flex flex-col md:flex-row gap-4">
        <Image src="/ali.png" height={96} width={96} alt="faizaan" className="rounded-full"></Image>
        <p className="text-black text-sm">
          A <Highlight>fourth year</Highlight> student working in project management at Ontario Power Generation. He has a good grasp on <Highlight>physic</Highlight> and <Highlight>chemistry</Highlight>, from kinematics to organic.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    name: "Hamza Hamid",
    designation: "Geomatics (UWaterloo)",
    content: (
      <div className="flex flex-row gap-4">
        <Image src="/hamza.png" height={96} width={96} alt="faizaan" className="rounded-full"></Image>
        <p className="text-black text-sm">
          A <Highlight>third year</Highlight> student who&apos;s knowledge of maps and technology are rivaled by none. He&apos;s tutored in many subjects both <Highlight>academic and spiritual</Highlight>.
        </p>
      </div>
    ),
  },
];

function FAQ() {
  return (
    <div className="flex p-4 md:p-0 pt-12 md:pt-0 flex-col items-center bg-stone-950">
      <h2 className="scroll-m-20 border-b border-stone-600 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-white text-center">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full text-stone-300 bg-stone-950 w-3/4 p-4 rounded-3xl mt-5 border-2 border-stone-800">
        <AccordionItem value="item-1" className="border-stone-800">
          <AccordionTrigger className="font-semibold text-lg">What are your tutoring rates?</AccordionTrigger>
          <AccordionContent className="font-base text-lg">
            Individual rate: <span className="font-bold text-blue-400">$35/Hour</span><br />Referral Rate: <span className="font-bold text-blue-400">$30/Hour</span><br />Group rate (2 people): <span className="font-bold text-blue-400">$25/Hour</span> per person
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-stone-800">
          <AccordionTrigger className="font-semibold text-lg">What subjects do you teach?</AccordionTrigger>
          <AccordionContent className="font-base text-lg">
            Currently, we offer tutoring for <span className="font-bold text-blue-400">mathematics</span>, <span className="font-bold text-blue-400">computer science</span>, <span className="font-bold text-blue-400">physics</span>, <span className="font-bold text-blue-400">chemistry</span>, and <span className="font-bold text-blue-400">english</span> for <b>grades 6-12</b> at all levels (Academic/Applied/AP).
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-stone-800">
          <AccordionTrigger className="font-semibold text-lg">How do you conduct sessions?</AccordionTrigger>
          <AccordionContent className="font-base text-lg">
            We conduct sessions using <span className="font-bold text-blue-400">Google Meets</span>. All our tutors share their screen using writing tablets and work through problems with students.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-0">
          <AccordionTrigger className="font-semibold text-lg">I want to get started! Who should I call?</AccordionTrigger>
          <AccordionContent className="font-base text-lg">
            Complete our intake survey by calling <a href="tel:9057490504" className="font-bold text-blue-400">+1 (905) 749-0504</a> or click <a href="https://calendly.com/talimtutoring/30min" target="_blank" className="font-bold text-blue-400">here</a> to book a free consultation
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

function Header() {
  return (
    <div className="flex flex-row justify-between w-full items-center md:px-36 lg:px-64 xl:px-96 sticky top-0 z-10 bg-stone-950/75">
      <div className="flex flex-row items-center p-2 pl-4 gap-3 flex-1">
        <Image src="/logo.png" height={48} width={48} alt="logo" />
        <h3 className="scroll-m-20 text-xl font-bold tracking-tight text-stone-200 subpixel-antialiased">Talim Tutors</h3>
      </div>
      <div className="p-2 pr-4 md:flex hidden">
        <a href="mailto:talimtutoring@gmail.com">
          <Button className="text-stone-400 font-bold text-sm mr-2" variant="link">
            Join Us
          </Button>
        </a>
        <a href="https://calendly.com/talimtutoring/30min" target="_blank">
          <Button className="text-stone-200 font-bold text-md">
            Hire a Tutor
          </Button>
        </a>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="flex flex-row justify-between w-full items-center align-center pt-16 md:pt-8 bg-stone-950/75">
      <div className="flex flex-row items-center justify-center p-2 pl-4 gap-3 flex-1">
        <Image src="/logo.png" height={48} width={48} alt="logo" />
      </div>
      <div className="flex items-center justify-center p-2 pr-4 text-slate-100 flex-1">
        <p className="font-bold">© Talim Tutors</p>
      </div>
      <div className="flex items-center justify-center p-2 pr-4 text-slate-100 flex-1 hidden md:flex">
        <a href="tel:9057490504" className="text-blue-400 font-bold text-xl">+1 (905) 749-0504</a>
      </div>
    </div>

  )
}

function Hero() {
  return (<div className="bg-hero bg-no-repeat bg-cover"><div className="h-[20rem] md:h-[32.5rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
    <Spotlight
      className="-top-20 md:-top-32.5 left-0 md:left-60 md:-top-20"
      fill="white"
    />
    <div className=" p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Educational <br /> excellence starts here.
      </h1>
      <p className="mt-4 font-normal text-base text-neutral-400 max-w-lg text-center mx-auto">
        Unlocking Your Potential, One Lesson at a Time
      </p>
    </div>
  </div>
    <div className="flex flex-col xl:flex-row justify-between items-center py-8 md:px-28 w-full self-center border-stone-600 gap-8">
      <div className="text-center">
        <h4 className="scroll-m-20 text-xl font-base tracking-tight text-stone-300">Tutors from and Accepted Into</h4><h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-blue-400">Canada&apos;s Top Universities</h4>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 flex-wrap">
        <Image src="/waterloo.png" width={130} height={36} alt="UWaterloo" />
        <Image src="/western.png" width={130} height={52} alt="Western" />
        <Image src="/mac.png" width={80} height={32} alt="McMaster" />
        <Image src="/laurier.png" width={80} height={32} alt="McMaster" />
      </div>
    </div></div>)
}

function About() {
  return (
    <div className="flex flex-col lg:flex-row self-center items-center bg-stone-950 gap-24 md:gap-32 xl:gap-48 w-4/5">
      <div className="flex flex-col gap-4 flex-1">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-white self-center">
          Who are <span className="text-blue-400">we?</span>
        </h2>

        <h4 className="scroll-m-20 text-xl font-normal tracking-tight text-stone-100 text-center">
          We are a group of students - from some of the top universities in the Canada - who noticed a problematic gap in the academic space: a <b>lack of quality</b> tutors, and a <b>shortage of servies</b> to quickly and easily connect students with them.
        </h4>

        <h4 className="scroll-m-20 text-xl font-normal tracking-tight text-stone-100 text-center">
          That is why we started <b>Talim Tutors</b>: a one-stop platform where students can find and connect with their ideal tutor from a list of exceptionally bright individuals belonging to highly prestigious programs from top universities including <span className="text-blue-400 font-bold">University of Waterloo,</span> <span className="text-blue-400"></span> <span className="text-blue-400 font-bold">Western,</span> <span className="text-blue-400 font-bold">McMaster,</span>  <span className="text-blue-400 font-bold">Laurier, and more.</span>
        </h4>
      </div>
      <div className="flex items-center justify-center flex-1 mb-12">
        <CardStack items={CARDS} />
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className="flex pt-6 md:pt-0 flex-col items-center bg-stone-950">
      <h2 className="scroll-m-20 border-b border-stone-600 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-white">
        Contact Us
      </h2>
      <div className="flex flex-col md:flex-row gap-2 md:gap-24 mt-2 md:mt-8 p-6 rounded-3xl">
        <div className="flex flex-row gap-4 items-center scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 text-stone-950 text-center">
          <LuPhoneCall color="white" /><a href="tel:9057490504" className="text-blue-400">+1 (905) 749-0504</a>
        </div>
        <div className="flex flex-row gap-4 items-center scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 text-stone-950 text-center">
          <LuMail color="white" /><a href="mailto:talimtutoring@gmail.com" className="text-blue-400">talimtutoring@gmail.com</a>
        </div>
      </div>
    </div>
  )
}
export default function Home() {

  return (
    <div className="flex flex-col min-h-screen items-center bg-stone-950">
      <Modal />
      <Header />
      <div className="flex flex-col bg-stone-950 w-full xl:w-4/5 min-h-screen gap-12 md:gap-16">
        <Hero />
        <About />
        <FAQ />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
