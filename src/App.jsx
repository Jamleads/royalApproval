/* eslint-disable react/no-unescaped-entities */
import { Housekey, NewLogo } from "./assets";
import { faqs, COLORS, reveiews } from "./utils/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import { useState } from "react";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: COLORS.lightGray }} className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2
          style={{ color: COLORS.darkGold }}
          className="text-4xl font-bold text-center mb-12"
        >
          FAQ
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{ backgroundColor: "white" }}
              className="rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center transition-all hover:opacity-80"
              >
                <h3
                  style={{ color: COLORS.darkGray }}
                  className="text-lg font-semibold pr-8"
                >
                  {faq.question}
                </h3>
                <span
                  style={{ color: COLORS.darkGold }}
                  className="text-2xl font-bold flex-shrink-0"
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div
                  style={{
                    color: COLORS.darkGray,
                    backgroundColor: COLORS.lightGray,
                  }}
                  className="px-6 pb-6 pt-2"
                >
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="bg-gray-100">
        {/* <!-- Header Section --> */}
        <header className="bg-white shadow">
          <div className="flex justify-between items-center md:w-[80%] w-[90%] mx-auto">
            <div className="flex items-center gap-5">
              <div className="w-[150px] h-[90px] flex items-center justify-center">
                <img src={NewLogo} alt="" className="w-full h-full" />
              </div>
            </div>

            <nav>
              <ul className="md:flex hidden items-center gap-16">
                <li>
                  <a
                    href="#"
                    className="text-[#7E6374] font-semibold hover:text-gray-800"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-[#7E6374] font-semibold hover:text-gray-800"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-[#7E6374] font-semibold hover:text-gray-800"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-[#7E6374] font-semibold hover:text-gray-800"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#testimones"
                    className="text-[#7E6374] font-semibold hover:text-gray-800"
                  >
                    Testimonies
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* <!-- Hero Section --> */}
        <section className="relative h-[80vh] text-white">
          <video
            autoPlay
            muted
            loop
            className="absolute w-full h-full object-cover"
          >
            <source src="/royal_approvals.mp4" type="video/mp4" />
          </video>
          <div className="relative container mx-auto px-4 flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="md:text-[100px] text-5xl">
                Second-Chance Approvals Made Simple.
              </h2>
              <p className="md:text-xl text-sm mb-8">
                We help you prepare a stronger approval file for apartments and
                auto financing—so you can apply with confidence, not confusion.
              </p>

              <div className="flex item-center justify-center">
                <div className="md:flex gap-5">
                  <a
                    href="tel:+14049516649"
                    target="_blank"
                    className="bg-[#7E6374] text-white font-bold py-3 px-6 rounded items-center gap-3"
                  >
                    <i className="fa-solid fa-phone-volume"></i> Book a
                    Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- About us --> */}
        <section id="about" className="md:my-40 my-20">
          <div className="lg:w-[80%] lg:px-0 px-5 mx-auto flex lg:flex-row flex-col-reverse gap-10 my-20">
            <div className="lg:w-2/5" data-aos="flip-right">
              <img
                src={Housekey}
                alt="housing approvers, car approval"
                className="w-full h-full"
              />
            </div>

            <div className="lg:w-3/5">
              <div
                className="underline py-2 text-[#7E6374] lg:text-[100px] text-[50px]"
                data-aos="fade-down-right"
              >
                About us
              </div>
              <h1
                className="lg:text-[40px] text-[20px] font-bold text-the_yellow"
                data-aos="fade-down-right"
              >
                Royal Approval is dedicated to simplifying the process of
                securing apartments and cars for individuals.
              </h1>
              <p data-aos="fade-down-right">
                We understand the challenges and frustrations that often come
                with finding the right housing and transportation, which is why
                our mission is to provide seamless, efficient solutions. At
                Royal Approval, we offer reliable support and expert guidance to
                ensure our clients experience peace of mind throughout every
                step of their journey. Whether you’re searching for your next
                home or vehicle, we’re here to make the process easier and
                stress-free.
              </p>
              <div className="mt-10 md:flex gap-2">
                <a
                  href="tel:+14049516649"
                  target="_blank"
                  className="bg-[#7E6374] text-white font-bold py-3 px-6 rounded items-center gap-3"
                  data-aos="fade-down-right"
                >
                  <i className="fa-solid fa-phone-volume"></i> Send A Text
                </a>
                {/* <a
                  target="_blank"
                  href="mailto:contact@royalapprovals.com"
                  className="bg-[#70CEE8] text-white font-bold py-3 px-6 rounded items-center gap-3"
                  data-aos="fade-down-right"
                >
                  <i className="fa-regular fa-envelope-open"></i> Send An Email
                </a> */}
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Special Product --> */}
        <section>
          <div id="services" className="md:w-[80%] mx-auto w-[90%] mt-20">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
              <div className="">
                <div className="px-10 bg-[#7E6374] text-white pt-10 pb-20 rounded-3xl">
                  <p className="text-3xl">
                    Elite Apartment Preparation Package
                  </p>
                  <p className="text-5xl font-bold">$1,260</p>
                </div>
                <div className="bg-white md:w-[85%] w-[90%] md:pl-5 mx-auto py-10 px-5 rounded-2xl -mt-10">
                  <div className="my-3 text-xs font-bold">
                    This package is designed for clients who want hands-on,
                    concierge-level support while preparing a strong rental
                    application.
                  </div>

                  <ul className="flex flex-col gap-5">
                    <p>What’s Included:</p>
                    <li>
                      <span className=" font-bold">
                        Personalized Client Profile:
                      </span>{" "}
                      A customized intake profile prepared in your name to
                      organize your application information.
                    </li>
                    <li>
                      <span className=" font-bold">
                        Application Support Letter:
                      </span>{" "}
                      One professionally prepared support letter to strengthen
                      your rental application presentation.
                    </li>
                    <li>
                      <span className=" font-bold">
                        Novelty Identification Record:
                      </span>{" "}
                      A physical novelty SSC card provided for personal records.
                      <br />
                      Physical Novelty SSC (For Records Only) <br />
                      This item is not a government-issued document and should
                      not be used in place of official identification.
                    </li>
                    <li>
                      <span className=" font-bold">
                        Application Readiness Review:
                      </span>{" "}
                      Guidance on income documentation, rental history, and
                      application presentation prior to submission.
                    </li>
                    <li>
                      <span className=" font-bold">
                        Credit-Building Strategy Inclusion:
                      </span>{" "}
                      One credit-building tradeline strategy selected by our
                      team to support overall application readiness.
                    </li>
                    <li>
                      <span className=" font-bold">
                        Guided Application Support:
                      </span>{" "}
                      Step-by-step guidance during the application process to
                      your chosen apartment.
                    </li>
                    <li>
                      <span className=" font-bold">Processing Timeline:</span>{" "}
                      Estimated completion time is 15 business days from the
                      close date of the tradeline, excluding weekends and
                      holidays.
                    </li>
                  </ul>

                  <div className=" mt-3">
                    <p className=" font-semibold">REQUIRED DISCLAIMER:</p>
                    <ul className=" text-sm">
                      <li>
                        Royal Approvals provides application preparation and
                        coaching services. We do not submit applications,
                        guarantee approvals, or represent landlords, property
                        managers, or lenders. Results may vary based on
                        third-party screening criteria.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 flex flex-col gap-3">
                    <a
                      href="tel:+14049516649"
                      target="_blank"
                      className="bg-[#7E6374] text-white font-bold py-3 px-6 rounded items-center gap-3"
                      data-aos="fade-down-right"
                    >
                      <i className="fa-solid fa-phone-volume"></i> Send A Text
                    </a>
                    <a
                      target="_blank"
                      href="mailto:contact@royalapprovals.com"
                      className="bg-[#70CEE8] text-white font-bold py-3 px-6 rounded items-center gap-3"
                      data-aos="fade-down-right"
                    >
                      <i className="fa-regular fa-envelope-open"></i> Send An
                      Email
                    </a>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="px-10 bg-[#7E6374] text-white pt-10 pb-20 rounded-3xl">
                  <p className="text-3xl">Elite Home Preparation Package</p>
                  <p className="text-5xl font-bold">$1,500</p>
                </div>
                <div className="bg-white md:w-[85%] w-[90%] md:pl-5 mx-auto py-10 px-5 rounded-2xl -mt-10">
                  <div className="my-3 text-xs font-bold">
                    Designed for clients seeking guided support while preparing
                    a strong home application file.
                  </div>

                  <ul className="flex flex-col gap-5">
                    <p>What’s Included:</p>
                    <li>
                      <span className=" font-bold">
                        Personalized Client Profile:
                      </span>{" "}
                      A detailed intake profile prepared in your name to
                      organize application-ready information.
                    </li>
                    <li>
                      <span className=" font-bold">
                        Physical Novelty SSC (For Records Only)
                      </span>{" "}
                      A novelty SSC card provided for personal reference and
                      record-keeping purposes only.
                    </li>
                    <li>
                      <span className=" font-bold">
                        Document Readiness Guidance
                      </span>{" "}
                      Guidance on acceptable income documentation and financial
                      presentation for home applications.
                    </li>
                    <li>
                      <span className=" font-bold">
                        Application Strategy Support
                      </span>{" "}
                      Support in preparing and organizing application materials
                      prior to submission.
                    </li>
                    <li>
                      <span className=" font-bold">
                        Multi-Application Coaching
                      </span>{" "}
                      Guidance for up to five (5) home applications, unless
                      otherwise discussed.
                    </li>
                    <li>
                      <span className=" font-bold">
                        Credit-Building Strategy Inclusion
                      </span>{" "}
                      Two credit-building tradeline strategies selected by our
                      team to support application readiness.
                    </li>
                    <li>
                      <span className=" font-bold">Processing Timeline:</span>{" "}
                      Clients must begin at least 30 days in advance. Tradelines
                      typically require 30–45 days to reflect.
                    </li>
                    <li>
                      <span className=" font-bold">
                        Payment Plan Availability:
                      </span>{" "}
                      Payment plans available. A 50% deposit is required to
                      begin.
                    </li>
                  </ul>

                  <div className=" mt-3">
                    <p className=" font-semibold">REQUIRED DISCLAIMER:</p>
                    <ul className=" text-sm">
                      <li>
                        Royal Approvals provides application preparation and
                        coaching services only. We do not submit applications,
                        verify employment, communicate with landlords, or
                        guarantee approvals. Results vary based on third-party
                        screening criteria.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 flex flex-col gap-3">
                    <a
                      href="tel:+14049516649"
                      target="_blank"
                      className="bg-[#7E6374] text-white font-bold py-3 px-6 rounded items-center gap-3"
                      data-aos="fade-down-right"
                    >
                      <i className="fa-solid fa-phone-volume"></i> Send A Text
                    </a>
                    <a
                      target="_blank"
                      href="mailto:contact@royalapprovals.com"
                      className="bg-[#70CEE8] text-white font-bold py-3 px-6 rounded items-center gap-3"
                      data-aos="fade-down-right"
                    >
                      <i className="fa-regular fa-envelope-open"></i> Send An
                      Email
                    </a>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="px-10 bg-[#7E6374] text-white pt-10 pb-20 rounded-3xl">
                  <p className="text-3xl">Application Readiness Package</p>
                  <p className="text-5xl font-bold">$1,450</p>
                </div>
                <div className="bg-white md:w-[85%] w-[90%] md:pl-5 mx-auto py-10 px-5 rounded-2xl -mt-10">
                  <div className="my-3 text-xs font-bold">
                    This package is designed for clients who need structured
                    guidance and organized support before submitting rental or
                    employment-related applications.
                  </div>

                  <ul className="flex flex-col gap-5">
                    <p>What’s Included:</p>
                    <li>
                      <span className=" font-bold">
                        Personalized Client Profile:
                      </span>{" "}
                      A detailed intake profile created using your provided
                      information to support application readiness.
                    </li>
                    <li>
                      <span className=" font-bold">
                        Novelty Digital Identification (For Records Only):
                      </span>{" "}
                      A novelty digital ID provided for personal organization
                      and reference purposes only.
                    </li>
                    <li>
                      <span className=" font-bold">
                        Physical Novelty SSC (For Records Only):
                      </span>{" "}
                      A novelty SSC card provided for record-keeping purposes
                      only. This is not a government-issued document.
                    </li>
                    <li>
                      <span className=" font-bold">
                        Application Support Letter:
                      </span>{" "}
                      One professionally prepared support letter to accompany
                      applications where appropriate.
                    </li>
                    <li>
                      <span className=" font-bold">
                        * Application Preparation Guidance:
                      </span>{" "}
                      Step-by-step guidance on organizing and preparing
                      application materials prior to submission.
                    </li>
                    <li>
                      <span className=" font-bold">
                        Housing Search Guidance:
                      </span>{" "}
                      Assistance identifying housing options aligned with your
                      stated preferences.
                    </li>
                    <li>
                      <span className=" font-bold">
                        Credit-Building Strategy Inclusion:
                      </span>{" "}
                      One credit-building tradeline strategy selected by our
                      team to support overall application readiness.
                    </li>
                    <li>
                      <span className=" font-bold">Processing Timeline:</span>{" "}
                      Estimated completion time is 7–14 business days from the
                      close date of the tradeline, excluding weekends and
                      holidays.
                    </li>
                  </ul>

                  <div className=" mt-3">
                    <p className=" font-semibold">REQUIRED DISCLAIMER:</p>
                    <ul className=" text-sm">
                      <li>
                        Royal Approvals provides application preparation and
                        coaching services only. We do not conceal background
                        information, submit applications, verify employment,
                        communicate with landlords or employers, or guarantee
                        approvals. All novelty items are for personal records
                        only.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 flex flex-col gap-3">
                    <a
                      href="tel:+14049516649"
                      target="_blank"
                      className="bg-[#7E6374] text-white font-bold py-3 px-6 rounded items-center gap-3"
                      data-aos="fade-down-right"
                    >
                      <i className="fa-solid fa-phone-volume"></i> Send A Text
                    </a>
                    <a
                      target="_blank"
                      href="mailto:contact@royalapprovals.com"
                      className="bg-[#70CEE8] text-white font-bold py-3 px-6 rounded items-center gap-3"
                      data-aos="fade-down-right"
                    >
                      <i className="fa-regular fa-envelope-open"></i> Send An
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="md:w-[80%] w-[90%] mx-auto mt-16">
            <div className="">
              <div>
                <div className="underline py-2 text-[#7E6374] lg:text-[50px] text-[25px]">
                  Disclaimer
                </div>
                <p>
                  Royal Approvals provides application preparation,
                  organization, and coaching services only. We do not submit
                  applications, communicate with landlords, employers, lenders,
                  or property management companies, verify employment or rental
                  history, or guarantee approvals. <br /> <br />
                  All services are informational and preparatory in nature.
                  Approval outcomes are determined solely by third-party
                  screening criteria, policies, and decision-makers outside of
                  our control. <br /> <br />
                  Any novelty documents or identification items provided are for
                  personal records and novelty purposes only and are not
                  government-issued or intended for official use. <br /> <br />
                  Clients are responsible for all third-party fees, including
                  but not limited to application fees, administrative fees,
                  deposits, move-in costs, and rent. Results may vary based on
                  individual circumstances. <br /> <br />
                  By purchasing services from Royal Approvals, you acknowledge
                  and agree to these terms. <br /> <br />
                  Services provided are for application preparation and coaching
                  only. Approval outcomes are not guaranteed and are determined
                  by third parties. <br /> <br />
                </p>
              </div>

              <div>
                <div className="underline py-2 text-[#7E6374] lg:text-[50px] text-[25px]">
                  Payment Plans & Processing Policy
                </div>
                <p>
                  To begin any service with Royal Approvals, a 50% deposit is
                  required at the time of purchase. The remaining balance must
                  be paid before services are completed or finalized. <br />{" "}
                  <br />A $50 payment plan administrative fee is added to all
                  payment plan options. This fee covers scheduling, account
                  management, and processing associated with extended payment
                  arrangements. <br /> <br />
                  All services are customized and preparatory in nature. Once
                  work has begun, payment plan balances remain due regardless of
                  outcome, as services cannot be reversed or transferred.
                </p>
              </div>

              <div>
                <div className="underline py-2 text-[#7E6374] lg:text-[50px] text-[25px]">
                  Processing Time Notice
                </div>

                <p>
                  Processing timelines begin after all required information,
                  documentation, and deposits have been received. Estimated
                  timelines are provided for planning purposes only and are not
                  guarantees. <br /> <br />
                  Rush processing is not available. Clients must begin services
                  at least 30 days in advance to allow adequate preparation
                  time, particularly when credit-related strategies are
                  included. <br /> <br />
                  By selecting a payment plan and submitting payment, you
                  acknowledge and agree to these terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Pricing --> */}
        <section id="pricing" className="md:my-20 mt-20">
          <div className="md:w-[80%] w-[90%] mx-auto">
            <div className="text-center underline py-2 lg:my-20 text-[#7E6374] lg:text-[100px] text-[50px]">
              Our Price List
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
              <div className="bg-white shadow-lg rounded-lg">
                <div>
                  <video autoPlay muted loop>
                    <source
                      src="/royal_approvals.mp4"
                      type="video/mp4"
                      className="w-full !h-[60vh]"
                    />
                  </video>
                </div>
                <div className="py-5 px-10">
                  <h3 className="text-lg text-center font-semibold mb-2">
                    NOVELTY DOCS
                  </h3>

                  <div className="flex flex-col gap-10 my-10">
                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-[#7E6374]"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-[#7E6374] the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$75</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Light Bill
                      </div>
                    </div>

                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-[#7E6374]"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-[#7E6374] the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$75</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Doctor Note
                      </div>
                    </div>
                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-[#7E6374]"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-[#7E6374] the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$75</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Lease Agreement
                      </div>
                    </div>
                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-[#7E6374]"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-[#7E6374] the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$85</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Car Insurance
                      </div>
                    </div>

                    {/* <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-[#7E6374]"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-[#7E6374] the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$50</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Any PDF Doc
                      </div>
                    </div> */}

                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-[#7E6374]"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-[#7E6374] the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$270</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        GED/HS Diploma
                      </div>
                    </div>

                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-[#7E6374]"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-[#7E6374] the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$175</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Digital Id
                      </div>
                    </div>
                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-[#7E6374]"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-[#7E6374] the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$380</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Physical Id Overnight Shipping
                      </div>
                    </div>
                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-[#7E6374]"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-[#7E6374] the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$150</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Digital SSC
                      </div>
                    </div>
                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-[#7E6374]"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-[#7E6374] the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$365</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Physical SSC Overnight Shipping
                      </div>
                    </div>

                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-[#7E6374]"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-[#7E6374] the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$85 Each</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Bank Statement
                      </div>
                    </div>

                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-[#7E6374]"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-[#7E6374] the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$70</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Regular Pay Stub
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg">
                <div>
                  <video autoPlay muted loop>
                    <source
                      src="/House.mp4"
                      type="video/mp4"
                      className="w-full !h-[60vh]"
                    />
                  </video>
                </div>

                <div className="py-5 px-10">
                  <div className="flex flex-col gap-10 my-10">
                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-[#7E6374]"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-[#7E6374] the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$75</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Novo Verification
                      </div>
                    </div>

                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-[#7E6374]"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-[#7E6374] the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$85</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Do Your App
                      </div>
                    </div>

                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-[#7E6374] "
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-[#7E6374] the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl"> $100</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Offer Letter
                      </div>
                    </div>
                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-[#7E6374]"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-[#7E6374] the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$135 </p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Offer Letter With Verification
                      </div>
                    </div>

                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-[#7E6374]"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-[#7E6374] the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$85</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Employee or Rental Verification
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- testimones --> */}

        <div id="testimones" className="md:w-[80%] w-[90%] mx-auto ">
          <div className="flex flex-col items-center justify-center mb-3">
            <p className="underline py-2 text-[#7E6374] lg:text-[100px] text-[50px]">
              Testimonials
            </p>
            <h1 className="lg:text-[40px] text-[20px] font-bold text-the_yellow">
              Hear What Our Clients Say
            </h1>
            <p className=" text-center">
              At Royal Approvals, we take pride in supporting individuals
              through the application preparation process with clarity,
              structure, and guidance. Our clients often share how having
              organized support, clear next steps, and a strategic approach
              helped them feel more confident moving forward. <br /> <br />
              Below are real experiences from clients who valued our
              professionalism, communication, and preparation-focused services.
            </p>
          </div>
          <div className="border-2 border-[#7E6374] pt-5">
            <div className="text-center mb-10">
              <p className="text-3xl">See what our customers says about us</p>
              <p className="">Drag left or right to see more</p>
            </div>
            <div className="swiper md:h-auto sm:h-[800px] md:overflow-x-auto overflow-x-hidden">
              <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    // For screens larger than 640px
                    slidesPerView: 4,
                  },
                  0: {
                    // For smaller screens (mobile)
                    slidesPerView: 1,
                  },
                }}
                initialSlide={2}
                modules={[Pagination]}
                className="mySwiper"
              >
                {reveiews.map((item, idx) => (
                  <SwiperSlide key={idx} className="swiper-slide">
                    <img src={item.image} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <section className="md:mb-40 mt-10">
          <div>
            <FAQSection />
          </div>
          {/* <div className="md:w-[80%] w-[90%] mx-auto">
            <div className="flex gap-10 md:flex-row flex-col">
              <div className="">
                <div className="flex flex-col gap-4">
                  <div className="underline py-2 text-[#7E6374] lg:text-[100px] text-[50px]">
                    Disclaimer
                  </div>
                  <p>
                    All clients are responsible for any fees outside of the
                    package that may or may not be limited to Application &
                    Admin fees, Deposits, move in fees, & First months rent. It
                    is also possible to get denied using housing packages, not
                    all places accept profiles. In the event that you are
                    denied, We will continue on with another apartment. The
                    purchasing of another package is not necessary and we will
                    work with you until approved. <br /> <br />
                    Our service works to conceal background information from
                    landlords and property management companies but does not
                    guarantee approval for rental applications. The outcome of
                    your rental application may depend on other factors,
                    including the policies of individual property owners and
                    managers.Some properties can still pull up your background.
                    It’s best to go the route our team has set for you .
                  </p>

                  <div className="">
                    <h1 className="lg:text-[40px] text-[20px] font-bold text-the_yellow">
                      Background Concealment for Apartment Rentals
                    </h1>
                    <p>
                      Our service helps you secure the apartment you deserve,
                      regardless of your past. With our "Background Concealment"
                      package, we discreetly work to hide any criminal history
                      or other negative background information from potential
                      landlords. We understand that everyone deserves a fresh
                      start, and our service ensures your past won’t affect your
                      ability to find a home. Let us help you overcome obstacles
                      and give you the privacy and peace of mind you need to
                      move forward with confidence. <br />
                    </p>
                  </div>

                  <div className="">
                    <h1 className="lg:text-[40px] text-[20px] font-bold text-the_yellow">
                      Refund Policy
                    </h1>
                    <p>
                      We strive to provide high-quality services and ensure
                      customer satisfaction. However, due to the nature of our
                      services, refunds are not available once work has begun or
                      documents have been processed.
                    </p>
                  </div>
                  <div className="">
                    <h1 className="lg:text-[40px] text-[20px] font-bold text-the_yellow">
                      Refund Conditions:
                    </h1>
                    <p>
                      No Refunds: Once work has started or documents have been
                      processed, refunds are not available as these services are
                      customized and cannot be reused or resold. If you have any
                      concerns or issues with your order, please contact us
                      immediately, and we will do our best to resolve them.
                    </p>
                  </div>

                  <div className="mt-10 md:flex gap-2">
                    <a
                      href="tel:+14049516649"
                      target="_blank"
                      className="bg-[#7E6374] text-white font-bold py-3 px-6 rounded items-center gap-3"
                    >
                      <i className="fa-solid fa-phone-volume"></i> Send A Text
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </section>

        {/* <!-- Footer Section --> */}
        <footer className="bg-[#7E6374] text-white py-6 flex items-center justify-center mt-20">
          <div>
            <p className="text-center">
              Project managed by{" "}
              <a
                href="https://jamleads.framer.website/"
                className="text-lg font-bold text-black underline"
                target="_blank"
              >
                Jamleads IT Management
              </a>{" "}
              &copy; 2024. All right reserved
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
