import { Link } from "react-router-dom";
import React from "react";
import {
  ChevronDown,
  Building2,
  BarChart3,
  Database,
  TrendingUp,
  Award,
  Globe2,
  Target,
  CheckCircle2,
  Search,
  ClipboardList,
  PenLine,
  Send,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Youtube,
  X,
  Star,
  Users,
  PieChart,
  ArrowRight,
} from "lucide-react";

import heroBg from "../../assets/rankingBg.png";
import meetingImg from "../../assets/agrs1.png";
import cardBg from "../../assets/agrs4.png";

const navItems = [
  "Home",
  "Researchers",
  "Institutions",
  "Publishers",
  "Innovation & IP",
  "Technology",
  "Resources",
  "About Us",
];

const features = [
  {
    icon: Target,
    title: "Strategic Guidance",
    desc: "Customized strategies aligned with global ranking and accreditation criteria.",
    color: "text-[#4B22FF]",
    bg: "bg-[#F0EAFF]",
  },
  {
    icon: Database,
    title: "Data Excellence",
    desc: "Robust data systems for accurate, consistent and credible reporting.",
    color: "text-[#16A34A]",
    bg: "bg-[#EAFBF0]",
  },
  {
    icon: TrendingUp,
    title: "Performance Improvement",
    desc: "Identify gaps, set benchmarks and improve performance across key indicators.",
    color: "text-[#FF6A00]",
    bg: "bg-[#FFF1E8]",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    desc: "Strengthen quality frameworks and documentation for accreditation success.",
    color: "text-[#5B21FF]",
    bg: "bg-[#F0EAFF]",
  },
  {
    icon: Globe2,
    title: "Global Recognition",
    desc: "Enhance institutional reputation and visibility on global platforms.",
    color: "text-[#1478FF]",
    bg: "bg-[#EAF4FF]",
  },
];

const rankingCards = [
  {
    title: "QS World University Rankings",
    logo: "QS",
    color: "text-[#FF8A00]",
    border: "border-[#FFB86A]",
    bullets: [
      "Strategy development and gap analysis",
      "Support for 9 key indicators and sub-indicators",
      "Data collection, validation and submission",
      "Narrative writing and evidence curation",
      "Performance monitoring and improvement",
    ],
    btn: "Explore QS Support",
  },
  {
    title: "NIRF Rankings",
    logo: "nirf",
    color: "text-[#1D4ED8]",
    border: "border-[#8DB8FF]",
    bullets: [
      "Complete support for NIRF parameters",
      "Data template preparation and audit",
      "Metric-wise analysis and benchmarking",
      "Documentation and proof validation",
      "Annual submission support and review",
    ],
    btn: "Explore NIRF Support",
  },
  {
    title: "Other Global Rankings",
    logo: <Globe2 size={34} />,
    color: "text-[#5B21FF]",
    border: "border-[#B8A7FF]",
    bullets: [
      "THE (Times Higher Education) Rankings",
      "ARWU (Shanghai Ranking)",
      "US News Best Global Universities",
      "Impact Rankings (SDGs)",
      "Subject-specific and regional rankings",
    ],
    btn: "Explore Other Rankings",
  },
];

const approach = [
  [Search, "Assess", "Assess current performance and identify gaps"],
  [ClipboardList, "Plan", "Develop customized strategy and action plan"],
  [Database, "Collect", "Collect, validate and organize data"],
  [PenLine, "Develop", "Prepare reports, narratives and evidence"],
  [Send, "Submit", "Support submission and quality assurance"],
  [BarChart3, "Improve", "Monitor results and drive continuous improvement"],
];

const impacts = [
  [TrendingUp, "Higher Scores", "Improved ranking and accreditation outcomes"],
  [Star, "Better Reputation", "Stronger global visibility and recognition"],
  [Users, "Stakeholder Confidence", "Increased trust from students, faculty, partners & funders"],
  [PieChart, "Sustainable Growth", "Data-driven decisions for long-term excellence"],
];

export default function AccreditationRankingPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FF] text-[#070B3F] font-sans overflow-x-hidden">

      {/* HERO */}
      <section className="relative overflow-hidden bg-white min-h-[430px] sm:min-h-[480px] lg:min-h-[490px]">
        <img
          src={heroBg}
          alt="Accreditation and Global Ranking Support"
          className="absolute inset-0 w-full h-full object-cover object-[70%_center] sm:object-center"
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-14 pt-6 sm:pt-8 lg:pt-7 pb-8 sm:pb-12 lg:pb-[118px]">
          <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-[12px] font-semibold mb-4 sm:mb-5">
            <Link to="/" className="text-[#6366F1] hover:text-[#4F46E5] transition hover:translate-x-[2px]">
              Home
            </Link>
            <span className="text-[#8B8FA8]">›</span>
            <span className="text-[#4B22FF]">Institutions</span>
            <span className="text-[#8B8FA8]">›</span>
            <span className="text-[#23284A]">
              Accreditation & Global Ranking Support
            </span>
          </div>

          <div className="max-w-[560px]">
            <h1 className="text-[34px] sm:text-[42px] lg:text-[42px] leading-tight lg:leading-none font-bold text-[#07113F]">
              Accreditation &
              <span className="block sm:inline bg-gradient-to-r from-[#563BFF] to-[#02AFC7] bg-clip-text text-transparent sm:ml-3">
                Global Ranking Support
              </span>
            </h1>

            <p className="text-[#665fe8] text-[14px] sm:text-[16px] font-bold mt-4 sm:mt-5">
              Enhance Reputation. Improve Performance. Achieve Global Recognition.
            </p>

            <p className="text-[13px] sm:text-[14px] text-[#242a34] leading-[1.9] sm:leading-[2] mt-3 sm:mt-5 max-w-[430px]">
              RCII provides end-to-end support for QS, NIRF and other global rankings
              and accreditation frameworks. We help institutions build data-driven
              strategies, strengthen quality benchmarks, and showcase impact.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="h-[46px] bg-[#4B22FF] text-[13px] text-white px-6 rounded-[6px] font-bold shadow-[0_12px_28px_rgba(75,34,255,0.25)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3">
                <Building2 size={17} />
                Request a Consultation
              </button>

              <button className="h-[46px] border border-[#4B22FF] bg-white/70 text-[#4B22FF] text-[13px] px-6 rounded-[6px] font-bold hover:bg-indigo-50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-center justify-center gap-3">
                Explore Our Services
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 -mt-0 lg:-mt-[92px]">
        <div className="bg-white rounded-[16px] shadow-[0_10px_35px_rgba(20,40,90,0.08)] px-5 sm:px-8 py-6 sm:py-7">
          <h2 className="text-center text-[20px] sm:text-[24px] font-extrabold mb-7">
            Rank Higher. Stand Out. Lead Globally.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-6">
            {features.map(({ icon: Icon, title, desc, color, bg }, index) => (
              <div
                key={title}
                className={`text-center px-5 py-4 ${
                  index !== features.length - 1 ? "lg:border-r lg:border-[#DDE6FA]" : ""
                } hover:-translate-y-2 hover:shadow-xl rounded-xl transition-all duration-300`}
              >
                <div className={`mx-auto w-[64px] h-[64px] ${bg} ${color} rounded-full flex items-center justify-center mb-4`}>
                  <Icon size={34} />
                </div>
                <h3 className="font-extrabold text-[14px] mb-2">{title}</h3>
                <p className="text-[13px] leading-6 font-medium text-[#1B1D45]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RANKING SUPPORT */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-5">
        <h2 className="text-center text-[22px] sm:text-[26px] font-extrabold mb-5">
          Our Support for Key Rankings
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {rankingCards.map((card) => (
            <div
              key={card.title}
              className={`relative overflow-hidden bg-white rounded-[12px] border ${card.border} p-6 min-h-[280px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
            >
              <img
                src={cardBg}
                alt=""
                className="absolute right-0 bottom-0 w-[58%] h-full object-cover opacity-60 pointer-events-none"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className={`text-[42px] leading-none font-black ${card.color}`}>
                    {card.logo}
                  </div>
                  <h3 className="font-extrabold text-[16px] leading-5">{card.title}</h3>
                </div>

                <ul className="space-y-3 mb-6">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[13px] font-semibold">
                      <CheckCircle2 size={15} className="text-[#245CFF] shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>

                <button className="inline-flex items-center gap-3 px-5 py-3 border border-[#4B22FF] bg-white text-[#4B22FF] rounded-[5px] text-[13px] font-bold hover:bg-[#4B22FF] hover:text-white transition">
                  {card.btn} <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(20,40,90,0.08)] p-7">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold mb-9">
            Our End-to-End Approach
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8">
            {approach.map(([Icon, title, desc], i) => (
              <div key={title} className="relative text-center group">
                {i !== approach.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[65%] w-[70%] border-t-2 border-dashed border-[#98A8E8]" />
                )}

                <div className="mx-auto w-16 h-16 rounded-full bg-[#F0EAFF] text-[#4B22FF] flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Icon size={31} />
                </div>

                <h3 className="font-extrabold">{i + 1}. {title}</h3>
                <p className="text-sm leading-5 mt-2 font-medium">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY + IMPACT */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8 grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-7 shadow-[0_10px_35px_rgba(20,40,90,0.08)]">
          <h2 className="text-2xl font-extrabold mb-5">Why Partner with RCII?</h2>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <ul className="space-y-4">
              {[
                "Expert team with ranking & accreditation expertise",
                "Proven track record with leading institutions",
                "Data-driven insights and actionable strategies",
                "End-to-end support with timely delivery",
                "Confidentiality, integrity and quality assurance",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-bold">
                  <CheckCircle2 size={17} className="text-[#4B22FF] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <img
              src={meetingImg}
              alt="Performance meeting"
              className="rounded-md w-full hover:scale-[1.03] transition"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-7 shadow-[0_10px_35px_rgba(20,40,90,0.08)]">
          <h2 className="text-2xl font-extrabold mb-6">Impact We Deliver</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {impacts.map(([Icon, title, desc]) => (
              <div
                key={title}
                className="text-center p-6 rounded-xl border border-[#E5ECFB] hover:-translate-y-2 hover:shadow-xl transition"
              >
                <Icon size={38} className="mx-auto mb-4 text-[#16A34A]" />
                <h3 className="font-extrabold mb-3">{title}</h3>
                <p className="text-sm leading-6 font-medium">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-8">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold mb-6">
          What Our Partners Say
        </h2>

        <div className="grid lg:grid-cols-3 gap-7">
          {[
            ["Prof. S. Mahadevan", "Pro Vice Chancellor", "SRM Institute of Science and Technology"],
            ["Dr. Pankaj Mittal", "Registrar", "Thapar Institute of Engineering & Technology"],
            ["Dr. R. Subakrishna Rao", "Director", "International Institute of Information Technology"],
          ].map(([name, role, org]) => (
            <div
              key={name}
              className="bg-white rounded-xl p-7 shadow-[0_10px_35px_rgba(20,40,90,0.08)] hover:-translate-y-2 transition"
            >
              <div className="text-[#4B22FF] text-5xl font-black">“</div>
              <p className="text-sm leading-7 font-semibold mb-5">
                RCII's support for QS ranking helped us streamline our data processes and
                significantly improve our overall score.
              </p>
              <h4 className="font-extrabold">{name}</h4>
              <p className="text-sm font-semibold">{role}</p>
              <p className="text-sm text-[#4B22FF] font-bold">{org}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-8">
        <div className="bg-gradient-to-r from-[#4B22FF] via-[#123AD8] to-[#007CA8] rounded-xl p-7 sm:p-9 flex flex-col lg:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h2 className="text-3xl font-extrabold">Let's Achieve Global Excellence Together</h2>
            <p className="mt-2 font-semibold">
              Partner with RCII to reach higher in rankings and accreditations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-[#4B22FF] px-8 py-4 rounded-md font-extrabold hover:-translate-y-1 transition">
              Request a Consultation →
            </button>
            <button className="border border-white px-8 py-4 rounded-md font-extrabold hover:bg-white hover:text-[#071057] transition">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}