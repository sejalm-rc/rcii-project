import React from "react";
import {
  Lightbulb,
  ShieldCheck,
  BarChart3,
  Users,
  Globe2,
  Target,
  ArrowRight,
  Search,
  FileSearch,
  FileCheck2,
  BadgeCheck,
  Handshake,
  Rocket,
  Scale,
  ClipboardCheck,
  Settings,
  Award,
  Building2,
  Headphones,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/bgInnovation.png";
import ctaImg from "../../assets/innovation.png";
import avatar1 from "../../assets/blog2.png";
import avatar2 from "../../assets/blog4.png";
import avatar3 from "../../assets/blog6.png";

function InnovationIP() {
  return (
    <main className="bg-[#fbfcff] text-[#071044] pt-[70px]">
      {/* HERO */}
   
  <section className="relative overflow-hidden min-h-[320px] sm:min-h-[420px] lg:min-h-[450px] bg-white">
             {/* Background image only after 768px */}
             <div
               className=" absolute inset-0 bg-cover  bg-no-repeat"
               style={{
                 backgroundImage: `url(${heroBg})`,
               }}
             />
           
             {/* Mobile soft background */}
             <div className=" absolute" />
           
             {/* Optional left readable overlay */}
             <div className="" />
           
             <div className="relative z-20 max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-14 h-full">
               <div className="max-w-[520px] pt-6 sm:pt-8 lg:pt-10 pb-8">
                 <div className="flex flex-wrap items-center gap-3 text-[13px] sm:text-[14px] font-semibold sm:mb-8 mb-5">
                   <Link to="/" className="text-[#6366F1] hover:text-[#4F46E5] transition">
                     Home
                   </Link>
           
                   <span className="text-gray-400">›</span>
           
                  
           
                   <span className="text-gray-500">Innovation & IP</span>
                 </div>
           
                 <h1 className="text-[34px] sm:text-[40px] lg:text-[46px] leading-none font-bold text-[#07113F]">
                     Innovate Today. <span className="bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent">
                      Protect Tomorrow.
                   </span>
                 </h1>
           
                 <p className="text-[#665fe8] text-[15px] sm:text-[16px] font-bold mt-3 leading-6 sm:mt-6">
                    Empowering Ideas. Protecting IP. Creating Impact.
                 </p>
            <div className="mt-4 h-[3px] w-[58px] rounded-full bg-[#13c7d5]" />
                 <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:mt-5 mt-3 max-w-[420px]">
                RCI helps researchers, institutions, and organizations transform
              innovative ideas into protected intellectual property and
              market-ready solutions.
                 </p>
           
                 <div className="flex flex-wrap gap-3 mt-5 sm:mt-9">
                   <button className="bg-[#4F46E5] text-[14px] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#4338CA] transition flex items-center gap-3">
                     Explore Our Services
                     <ArrowRight size={18} />
                   </button>
           
                   <button className="bg-white text-[#573BFF] border border-[#CFCBFF] text-[14px] font-semibold px-5 sm:px-5 py-3 rounded-lg inline-flex items-center gap-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
                    Schedule a Consultation
                     <ArrowRight size={18} />
                   </button>
                 </div>
               </div>
             </div>
           </section>

      <div className="mx-auto max-w-[1440px] px-4 py-7 sm:px-8 lg:px-14">
        <SectionTitle title="Why Innovation & IP Matters" />

        <div className="grid grid-cols-1 overflow-hidden rounded-[12px] border border-[#edf0fa] bg-white shadow-[0_8px_28px_rgba(30,40,90,0.06)] sm:grid-cols-2 lg:grid-cols-6">
          <Why icon={Lightbulb} bg="#f0edff" color="#563BFF" title="Encourage Innovation" />
          <Why icon={ShieldCheck} bg="#eaf8ef" color="#25a85c" title="Protect Your Ideas" />
          <Why icon={BarChart3} bg="#eaf4ff" color="#2478e8" title="Maximize Value" />
          <Why icon={Users} bg="#f0edff" color="#563BFF" title="Attract Collaborations" />
          <Why icon={Globe2} bg="#eaf8ef" color="#25a85c" title="Global Recognition" />
          <Why icon={Target} bg="#f0edff" color="#563BFF" title="Create Impact" />
        </div>

        <SectionTitle title="Our Innovation & IP Services" className="mt-8" />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <Service icon={Search} title="IP Awareness & Capacity Building" />
          <Service icon={FileSearch} title="IP Landscaping & Prior Art Search" />
          <Service icon={FileCheck2} title="Patent Filing & Prosecution" />
          <Service icon={BadgeCheck} title="Trademarks, Copyrights & Design Protection" />
          <Service icon={ClipboardCheck} title="Technology Transfer & Licensing Support" />
          <Service icon={Handshake} title="Innovation Management & Strategy" />
          <Service icon={Rocket} title="Startup & Incubation Support" />
          <Service icon={Scale} title="IP Portfolio Audit & Analytics" />
        </div>

        <SectionTitle title="Our Innovation to Impact Process" className="mt-8" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          <Process icon={Lightbulb} step="1. Discover" text="Identify ideas and innovation potential" />
          <Process icon={ClipboardCheck} step="2. Evaluate" text="Assess novelty, market potential and IP scope" />
          <Process icon={FileCheck2} step="3. Protect" text="File and secure IP through appropriate channels" />
          <Process icon={Settings} step="4. Develop" text="Prototype, validate and refine the innovation" />
          <Process icon={Handshake} step="5. Commercialize" text="License, collaborate or launch to market" />
          <Process icon={Target} step="6. Impact" text="Create value and drive societal impact" />
        </div>

       <section className="mt-8 overflow-hidden rounded-[12px] bg-[linear-gradient(90deg,#0B1464_0%,#1322A6_55%,#0B3CD6_100%)] px-5 py-5 text-white shadow-[0_14px_35px_rgba(10,20,90,0.22)]">
  <h2 className="mb-5 text-center text-[18px] font-bold">
    Our Impact in Numbers
  </h2>

  <div className="grid grid-cols-2 gap-y-6 md:grid-cols-3 lg:flex lg:items-center lg:justify-between">
    <Stat
      icon={FileCheck2}
      value="800+"
      text="IP Filings Supported"
      border
    />

    <Stat
      icon={ShieldCheck}
      value="250+"
      text="Patents Granted"
      border
    />

    <Stat
      icon={Handshake}
      value="150+"
      text="Licensing & Technology Transfer Deals"
      border
    />

    <Stat
      icon={Building2}
      value="200+"
      text="Institutions Supported"
      border
    />

    <Stat
      icon={Users}
      value="1000+"
      text="Researchers Trained"
      border
    />

    <Stat
      icon={Globe2}
      value="25+"
      text="Countries Reached"
    />
  </div>
</section>

        <SectionTitle title="What Our Partners Say" className="mt-8" />

        <div className="grid gap-5 lg:grid-cols-3">
          <Testimonial img={avatar1} name="Dr. Arvind Nair" role="Director – Innovation & Technology Transfer" />
          <Testimonial img={avatar2} name="Prof. Meera Sharma" role="Dean – Research & Innovation" />
          <Testimonial img={avatar3} name="Mr. Rahul Verma" role="CEO, AgriTech Innovations Pvt. Ltd." />
        </div>

        <section className="mt-8 overflow-hidden rounded-[12px] bg-[linear-gradient(90deg,#07135f_0%,#0f1f9b_55%,#032cb7_100%)] px-5 py-6 text-white shadow-[0_14px_35px_rgba(10,20,90,0.22)] sm:px-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="flex items-center gap-2">
              <img src={ctaImg} alt="" className="w-[110px]" />
              <div>
                <h3 className="text-[22px] font-bold">
                  Let’s Turn Your Ideas into Impact.
                </h3>
                <p className="mt-2 max-w-[560px] text-[13px] font-semibold text-white/85">
                  Partner with RCI to protect, promote, and commercialize your
                  innovations for a better tomorrow.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="group h-[40px] rounded-[6px] bg-white px-4 text-[12px] font-bold text-[#321cff] transition-all duration-300 hover:-translate-y-1">
                Schedule a Consultation
                <ArrowRight size={14} className="ml-2 inline transition group-hover:translate-x-1" />
              </button>

              <button className="h-[40px] rounded-[6px] border border-white/40 px-4 text-[12px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                <Headphones size={15} className="mr-2 inline" />
                Talk to Our Expert
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function SectionTitle({ title, className = "" }) {
  return (
    <div className={`mb-5 text-center ${className}`}>
      <h2 className="text-[20px] sm:text-[24px] font-bold text-[#071044]">{title}</h2>
      <div className="mx-auto mt-2 h-[3px] w-[42px] rounded-full bg-[#321cff]" />
    </div>
  );
}

function Why({ icon: Icon, bg, color, title }) {
  return (
    <div className="group border-b border-[#e5e8f4] px-4 py-5 text-center transition-all duration-300 hover:bg-[#fbfaff] sm:border-r lg:border-b-0 last:border-r-0">
      <div
        className="mx-auto flex h-[54px] w-[54px] items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: bg }}
      >
        <Icon size={25} strokeWidth={2.2} style={{ color }} />
      </div>
      <h3 className="mt-4 text-[12px] font-bold text-[#071044]">
        {title}
      </h3>
      <p className="mt-2 text-[10.5px] font-bold leading-[1.65] text-[#303b5d]">
        Build strong IP portfolios and create long-term value.
      </p>
    </div>
  );
}

function Service({ icon: Icon, title }) {
  return (
    <div className="group rounded-[10px] border border-[#e8ebf7] bg-white p-5 shadow-[0_8px_24px_rgba(30,40,90,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_42px_rgba(30,40,90,0.12)]">
      <div className="flex items-start gap-4">
        <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#eaf8ef] transition-transform duration-300 group-hover:scale-110">
          <Icon size={23} className="text-[#25a85c]" />
        </div>

        <div>
          <h3 className="text-[14px] font-bold leading-tight text-[#071044]">
            {title}
          </h3>

          <ul className="mt-3 list-disc space-y-1 pl-4 text-[11px] font-bold leading-[1.55] text-[#303b5d]">
            <li>Expert consultation and filing support</li>
            <li>Strategy development and documentation</li>
            <li>End-to-end assistance</li>
          </ul>

          <button className="group/btn mt-4 text-[11px] font-bold text-[#321cff]">
            Learn More
            <ArrowRight size={13} className="ml-1 inline transition group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Process({ icon: Icon, step, text }) {
  return (
    <div className="group relative rounded-[10px] bg-white p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(30,40,90,0.08)]">
      <div className="mx-auto flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#f0edff] transition-transform duration-300 group-hover:scale-110">
        <Icon size={24} className="text-[#563BFF]" />
      </div>
      <h3 className="mt-3 text-[12px] font-bold text-[#071044]">{step}</h3>
      <p className="mt-2 text-[10.5px] font-bold leading-[1.55] text-[#303b5d]">
        {text}
      </p>
    </div>
  );
}

function Stat({
  icon: Icon,
  value,
  text,
  border = false,
}) {
  return (
    <div
      className={`
        flex
        items-center
        gap-3
        px-4
        lg:px-5
        transition-all
        duration-300
        hover:scale-105
        ${
          border
            ? "lg:border-r lg:border-white/20"
            : ""
        }
      `}
    >
      <Icon
        size={34}
        strokeWidth={1.8}
        className="shrink-0 text-white/80"
      />

      <div>
        <h3 className="text-[20px] leading-none font-semibold text-white">
          {value}
        </h3>

        <p className="mt-1 max-w-[110px] text-[10px] leading-[1.35] font-medium text-white/80">
          {text}
        </p>
      </div>
    </div>
  );
}

function Testimonial({ img, name, role }) {
  return (
    <div className="group rounded-[10px] border border-[#e8ebf7] bg-white p-5 shadow-[0_8px_24px_rgba(30,40,90,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_42px_rgba(30,40,90,0.12)]">
      <Quote size={32} className="mb-3 text-[#321cff]" fill="#321cff" />
      <p className="text-[12px] font-bold leading-[1.8] text-[#303b5d]">
        RCI’s support helped us secure our patent and establish a strong
        foundation for commercialization. Their guidance was invaluable.
      </p>

      <div className="mt-5 flex items-center gap-3">
        <img src={img} alt={name} className="h-[48px] w-[48px] rounded-full object-cover" />
        <div>
          <h4 className="text-[12px] font-bold text-[#071044]">{name}</h4>
          <p className="text-[10.5px] font-bold leading-[1.5] text-[#64708f]">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InnovationIP;
