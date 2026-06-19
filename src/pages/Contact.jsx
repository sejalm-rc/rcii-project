import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  CalendarDays,
  Headphones,
  FileText,
  ArrowRight,
  Send,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Link as LinkIcon,
  ChevronDown,
  Quote,
} from "lucide-react";

import templeImg from "../assets/contact1.png";
import cityImg from "../assets/contact2.png";
import bannerBg from "../assets/contact.png";
import bgImg from "../assets/contact3.png";


export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    regarding: "",
    message: "",
    agree: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message || !form.agree) {
      alert("Please fill required fields and accept Privacy Policy.");
      return;
    }

    alert("Message sent successfully!");
    setForm({
      name: "",
      email: "",
      org: "",
      regarding: "",
      message: "",
      agree: false,
    });
  };

  return (
    <main className="min-h-screen bg-[#fbfcff] font-sans text-[#080f3d]">
      <section className="mx-auto max-w-[1420px] px-4 py-8 sm:px-6 lg:px-10">
        {/* TOP */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
          {/* LEFT */}
          <div className="pt-2">
            <div className="mb-5 flex items-center gap-2 text-[12px] font-bold text-[#523bff]">
              <span>Home</span>
              <span>›</span>
              <span className="text-[#1e2550]">Contact Us</span>
            </div>

            <h1 className="text-[38px] font-extrabold leading-tight sm:text-[46px]">
              Contact Us
            </h1>

            <h2 className="mt-3 text-[22px] font-extrabold text-[#2f19ff] sm:text-[26px]">
              We’re Here to Help You Make an Impact.
            </h2>

            <div className="mt-5 h-[3px] w-[54px] rounded-full bg-[#13c7d5]" />

            <p className="mt-6 max-w-[610px] text-[14px] font-bold leading-[1.9] text-[#273153]">
              Have a question, need assistance, or want to explore how we can
              support your research, publishing, or innovation goals? Our team
              is ready to connect with you.
            </p>

            <div className="mt-8 space-y-7">
              <ContactInfo
                icon={Mail}
                bg="#f0edff"
                color="#563BFF"
                title="Email Us"
                lines={["info@researcherconnect.co.in"]}
              />
              <ContactInfo
                icon={Phone}
                bg="#eaf8ef"
                color="#3abe69"
                title="Call Us"
                lines={["+91 44 4211 4863", "Mon – Fri, 9:30 AM – 6:30 PM IST"]}
              />
              <ContactInfo
                icon={MapPin}
                bg="#fff0e8"
                color="#ff7a33"
                title="Visit Us"
                lines={[
                  "No. 1, 3rd Floor, Eldams Road, Alwarpet,",
                  "Chennai – 600018, Tamil Nadu, India",
                ]}
              />
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[12px] border border-[#e8eaf7] bg-white p-5 shadow-[0_12px_35px_rgba(30,40,90,0.08)] sm:p-7"
          >
            <h3 className="text-[20px] font-extrabold">Send Us a Message</h3>
            <p className="mt-2 text-[12px] font-bold text-[#303a5d]">
              Fill out the form below and we’ll get back to you as soon as
              possible.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Input
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <Input
                placeholder="Email Address"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <Input
              className="mt-4"
              placeholder="Organization / Institution"
              value={form.org}
              onChange={(e) => setForm({ ...form, org: e.target.value })}
            />

            <div className="relative mt-4">
              <select
                value={form.regarding}
                onChange={(e) =>
                  setForm({ ...form, regarding: e.target.value })
                }
                className="h-[52px] w-full appearance-none rounded-[6px] border border-[#dbe0ee] bg-white px-4 text-[12px] font-semibold text-[#67708c] outline-none transition focus:border-[#563BFF] focus:ring-4 focus:ring-[#563BFF]/10"
              >
                <option value="">I am contacting regarding...</option>
                <option>Research Support</option>
                <option>Publication Support</option>
                <option>Patent Assistance</option>
                <option>Partnership</option>
              </select>
              <ChevronDown
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#563BFF]"
              />
            </div>

            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-4 h-[145px] w-full resize-none rounded-[6px] border border-[#dbe0ee] px-4 py-4 text-[12px] font-semibold text-[#1d2545] outline-none transition placeholder:text-[#77809a] focus:border-[#563BFF] focus:ring-4 focus:ring-[#563BFF]/10"
            />

            <label className="mt-4 flex items-center gap-2 text-[12px] font-semibold text-[#39435f]">
              <input
                type="checkbox"
                checked={form.agree}
                onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                className="accent-[#563BFF]"
              />
              I agree to the{" "}
              <span className="font-extrabold text-[#563BFF] underline">
                Privacy Policy
              </span>
            </label>

            <button
              type="submit"
              className="group mt-5 flex h-[55px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#3f16f5] text-[13px] font-extrabold text-white shadow-[0_12px_25px_rgba(63,22,245,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2f0fd1]"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>

        {/* OTHER WAYS */}
        <SectionTitle title="Other Ways to Connect" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ConnectCard
            icon={MessageCircle}
            color="#36c273"
            title="Live Chat"
            text="Chat with our experts in real-time for quick answers to your queries."
            action="Start Chat"
          />
          <ConnectCard
            icon={CalendarDays}
            color="#563BFF"
            title="Schedule a Meeting"
            text="Book a consultation with our team to discuss your requirements."
            action="Schedule Now"
          />
          <ConnectCard
            icon={Headphones}
            color="#ff8a32"
            title="Support"
            text="For existing clients, reach out to our support team."
            action="Get Support"
          />
          <ConnectCard
            icon={FileText}
            color="#168eea"
            title="Request a Proposal"
            text="Tell us about your project and we’ll send you a customized proposal."
            action="Request Now"
          />
        </div>

        {/* BOTTOM GRID */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_1fr_.85fr]">
          {/* OFFICES */}
          <Box>
            <h3 className="mb-5 text-[18px] font-extrabold">Our Offices</h3>

            <OfficeCard
              img={templeImg}
              title="India – Head Office"
              lines={[
                "No. 1, 3rd Floor, Eldams Road,",
                "Alwarpet, Chennai – 600018,",
                "Tamil Nadu, India",
              ]}
            />

            <OfficeCard
              img={cityImg}
              title="Global Office"
              lines={["8 The Green, Suite A, Dover,", "Delaware 19901, USA"]}
            />
          </Box>

          {/* FAQ */}
          <Box>
            <h3 className="mb-5 text-[18px] font-extrabold">
              Frequently Asked Questions
            </h3>

            {[
              "What services does RCI offer?",
              "Who can benefit from RCI’s services?",
              "How can I get started with RCI?",
              "Do you offer customized solutions?",
              "Where can I find your terms of service?",
            ].map((q, i) => (
              <details
                key={i}
                className="group mb-3 rounded-[8px] border border-[#e6e9f4] bg-white px-4 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-[13px] font-extrabold text-[#18214a]">
                  {q}
                  <ChevronDown
                    size={17}
                    className="text-[#563BFF] transition group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 text-[12px] font-medium leading-[1.7] text-[#5a647d]">
                  Our team provides complete research, publishing, innovation
                  and technology support based on your needs.
                </p>
              </details>
            ))}

            <button className="mt-2 flex items-center gap-2 text-[13px] font-extrabold text-[#563BFF]">
              View All FAQs <ArrowRight size={15} />
            </button>
          </Box>

          {/* FOLLOW */}
          <Box>
            <h3 className="mb-4 text-[18px] font-extrabold">Follow Us</h3>
            <div className="mb-4 h-[3px] w-[38px] rounded-full bg-[#563BFF]" />

            <p className="text-[12px] font-bold leading-[1.8] text-[#3d4665]">
              Stay connected with us for the latest updates, insights, and
              resources.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Social icon={Linkedin} bg="#0a66c2" />
              <Social icon={Twitter} bg="#1da1f2" />
              <Social icon={Facebook} bg="#1877f2" />
              <Social icon={Youtube} bg="#ff0000" />
              <Social icon={LinkIcon} bg="#f0edff" color="#563BFF" />
            </div>

            <div className="mt-7 rounded-[10px] bg-[#eefafa] p-5">
              <Quote size={34} className="mb-3 text-[#7ed7e4]" />
              <p className="text-[12px] font-bold leading-[1.8] text-[#31405f]">
                RCI has been a valuable partner in amplifying the reach and
                impact of our research. Their team is responsive,
                knowledgeable, and truly invested in our success.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="h-[42px] w-[42px] rounded-full bg-gradient-to-br from-[#563BFF] to-[#16c7d4]" />
                <div>
                  <h4 className="text-[13px] font-extrabold">Dr. Arvind Nair</h4>
                  <p className="text-[11px] font-semibold text-[#5e6680]">
                    Director – Research,
                    <br />
                    IIT Hyderabad
                  </p>
                </div>
              </div>
            </div>
          </Box>
        </div>

        {/* CTA */}
        <section
          className="mt-8 overflow-hidden rounded-[14px] bg-cover bg-center shadow-[0_10px_25px_rgba(25,30,80,0.12)]"
          style={{ backgroundImage: `url(${bannerBg})` }}
        >
          <div className="flex min-h-[145px] flex-col items-center justify-between gap-5 px-6 py-7 text-white sm:flex-row sm:px-10 lg:px-14">
            <div className="max-w-[600px] text-center sm:text-left">
              <h2 className="text-[26px] font-extrabold">
                Let’s Start a Conversation
              </h2>
              <p className="mt-3 text-[14px] font-semibold leading-[1.7]">
                Whether you have a question or want to explore a partnership,
                we’d love to hear from you.
              </p>
            </div>

            <button className="group flex h-[54px] min-w-[230px] items-center justify-center gap-3 rounded-[6px] bg-white text-[13px] font-extrabold text-[#3f16f5] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              Get in Touch Today
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}

/* Components */

function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`h-[52px] w-full rounded-[6px] border border-[#dbe0ee] px-4 text-[12px] font-semibold text-[#1d2545] outline-none transition placeholder:text-[#77809a] focus:border-[#563BFF] focus:ring-4 focus:ring-[#563BFF]/10 ${className}`}
    />
  );
}

function ContactInfo({ icon: Icon, bg, color, title, lines }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: bg, color }}
      >
        <Icon size={23} />
      </div>
      <div>
        <h4 className="text-[14px] font-extrabold">{title}</h4>
        {lines.map((line, i) => (
          <p
            key={i}
            className={`text-[12px] font-bold leading-[1.7] ${
              i === 0 ? "text-[#2200d8]" : "text-[#424b68]"
            }`}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="my-8 text-center">
      <h2 className="text-[18px] font-extrabold">{title}</h2>
      <div className="mx-auto mt-2 h-[3px] w-[38px] rounded-full bg-[#13c7d5]" />
    </div>
  );
}

function ConnectCard({ icon: Icon, color, title, text, action }) {
  return (
    <div className="group rounded-[12px] border border-[#e8eaf7] bg-white p-6 shadow-[0_8px_25px_rgba(30,40,90,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_38px_rgba(86,59,255,0.14)]">
      <div className="flex items-start gap-4">
        <div
          className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: `${color}18`, color }}
        >
          <Icon size={25} />
        </div>
        <div>
          <h3 className="text-[14px] font-extrabold">{title}</h3>
          <p className="mt-3 text-[11px] font-semibold leading-[1.7] text-[#505a74]">
            {text}
          </p>
          <button className="mt-4 flex items-center gap-2 text-[12px] font-extrabold text-[#3f16f5]">
            {action}
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

function Box({ children }) {
  return (
    <div className="rounded-[12px] border border-[#e8eaf7] bg-white p-6 shadow-[0_8px_25px_rgba(30,40,90,0.06)]">
      {children}
    </div>
  );
}

function OfficeCard({ img, title, lines }) {
  return (
    <div className="mb-7 flex gap-4">
      <img
        src={img}
        alt={title}
        className="h-[120px] w-[150px] shrink-0 rounded-[8px] object-cover"
      />
      <div>
        <h4 className="text-[14px] font-extrabold">{title}</h4>
        {lines.map((line, i) => (
          <p
            key={i}
            className="text-[12px] font-bold leading-[1.7] text-[#3d4665]"
          >
            {line}
          </p>
        ))}
        <button className="mt-3 flex items-center gap-2 text-[12px] font-extrabold text-[#563BFF]">
          View on Map <MapPin size={14} />
        </button>
      </div>
    </div>
  );
}

function Social({ icon: Icon, bg, color = "white" }) {
  return (
    <button
      className="flex h-[38px] w-[38px] items-center justify-center rounded-full transition hover:-translate-y-1"
      style={{ backgroundColor: bg, color }}
    >
      <Icon size={18} />
    </button>
  );
}