/* eslint-disable react/no-unescaped-entities */
import { Housekey } from "./assets";
import { packages, reveiews } from "./utils/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

function App() {
  return (
    <>
      <div className="bg-gray-100">
        {/* <!-- Header Section --> */}
        <header className="bg-white shadow">
          <div className="flex justify-between items-center md:w-[80%] w-[90%] mx-auto">
            <div className="flex items-center gap-5">
              <div className="w-[150px] h-[80px] flex items-center justify-center">
                <img src="/logo_white.jpg" alt="" />
              </div>
            </div>

            <nav>
              <ul className="md:flex hidden items-center gap-16">
                <li>
                  <a
                    href="#"
                    className="text-[#1C76BC] font-semibold hover:text-gray-800"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-[#1C76BC] font-semibold hover:text-gray-800"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-[#1C76BC] font-semibold hover:text-gray-800"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-[#1C76BC] font-semibold hover:text-gray-800"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#testimones"
                    className="text-[#1C76BC] font-semibold hover:text-gray-800"
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
              <h2 className="md:text-[100px] text-5xl">ROYAL OASIS</h2>
              <p className="md:text-xl text-sm mb-8">
                We specializes in helping individuals navigate the process of
                securing apartments and cars
              </p>

              <div className="flex item-center justify-center">
                <div className="md:flex gap-5">
                  <a
                    href="tel:+14049516649"
                    target="_blank"
                    className="bg-theDarkGold text-white font-bold py-3 px-6 rounded items-center gap-3"
                  >
                    <i className="fa-solid fa-phone-volume"></i> Send A Text
                  </a>
                  <a
                    target="_blank"
                    href="mailto:contact@royalapprovals.com"
                    className="bg-[#70CEE8] text-white font-bold py-3 px-6 rounded items-center gap-3"
                  >
                    <i className="fa-regular fa-envelope-open"></i> Send An
                    Email
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
                className="underline py-2 text-theDarkGold lg:text-[100px] text-[50px]"
                data-aos="fade-down-right"
              >
                About us
              </div>
              <h1
                className="lg:text-[40px] text-[20px] font-bold text-the_yellow"
                data-aos="fade-down-right"
              >
                Royal Oasis is dedicated to simplifying the process of securing
                apartments and cars for individuals.
              </h1>
              <p data-aos="fade-down-right">
                We understand the challenges and frustrations that often come
                with finding the right housing and transportation, which is why
                our mission is to provide seamless, efficient solutions. At
                Royal Oasis, we offer reliable support and expert guidance to
                ensure our clients experience peace of mind throughout every
                step of their journey. Whether you’re searching for your next
                home or vehicle, we’re here to make the process easier and
                stress-free.
              </p>
              <div className="mt-10 md:flex gap-2">
                <a
                  href="tel:+14049516649"
                  target="_blank"
                  className="bg-theDarkGold text-white font-bold py-3 px-6 rounded items-center gap-3"
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
                  <i className="fa-regular fa-envelope-open"></i> Send An Email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="services" className="md:my-40">
          <div className="text-center underline py-2 lg:my-20 text-theDarkGold lg:text-[100px] text-[50px]">
            Extra Benefits
          </div>
          <div className="lg:w-[80%] lg:px-0 px-5 mx-auto lg:grid grid-cols-3 flex flex-col gap-10">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="cursor-pointer p-10 flex items-center justify-center rounded-3xl bg-the_gray shadow-xl"
            >
              <div className="flex flex-col items-center justify-center gap-10 text-center text-white">
                <div className="flex items-center gap-5">
                  <div className="w-[50px] h-[50px] flex items-center justify-center">
                    <img src={HouseSignal} alt="" className="w-full" />
                  </div>

                  <p className="text-the_yellow text-2xl font-bold">
                    House Package
                  </p>
                </div>

                <div>
                  <p className="text_text">
                    We simplify the house approval process, guiding you every
                    step of the way. Our expert team ensures you overcome any
                    hurdles quickly and efficiently, turning your dream of
                    homeownership into a reality.
                  </p>

                  <div className="mt-3 font-bold">
                    Payments plans available <br /> text{" "}
                    <a
                      href="tel:+14049516649"
                      target="_blank"
                      className="text-red-300 cursor-pointer"
                    >
                      404-951-6649
                    </a>{" "}
                    to inquire about getting started
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="cursor-pointer p-10 flex items-center justify-center rounded-3xl bg-the_gray shadow-xl"
            >
              <div className="flex flex-col items-center justify-center gap-10 text-center text-white">
                <div className="flex items-center gap-5">
                  <div className="w-[50px] h-[50px] flex items-center justify-center">
                    <img src={CarSide} alt="" className="w-full" />
                  </div>

                  <p className="text-the_yellow text-2xl font-bold">
                    Car Package
                  </p>
                </div>

                <div>
                  <p className="text_text">
                    Whether you're buying your first car or upgrading, we
                    streamline the car approval process. With our tailored
                    approach and industry expertise, we help you secure the
                    vehicle you need without the stress
                  </p>

                  <div className="mt-3 font-bold">
                    Payments plans available <br /> text{" "}
                    <a
                      href="tel:+14049516649"
                      target="_blank"
                      className="text-red-300 cursor-pointer"
                    >
                      404-951-6649
                    </a>{" "}
                    to inquire about getting started
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="cursor-pointer p-10 flex items-center justify-center rounded-3xl bg-the_gray shadow-xl"
            >
              <div className="flex flex-col items-center justify-center gap-10 text-center text-white">
                <div className="flex items-center gap-5">
                  <div className="w-[50px] h-[50px] flex items-center justify-center">
                    <img src={Warehouse} alt="" className="w-full" />
                  </div>

                  <p className="text-the_yellow text-2xl font-bold">
                    Apartment Package
                  </p>
                </div>

                <div>
                  <p className="text_text">
                    Experience the convenience of securing apartment approvals
                    through our comprehensive service. We coordinate both
                    processes seamlessly, saving you time and effort while
                    delivering exceptional results.
                  </p>

                  <div className="mt-3 font-bold">
                    Payments plans available <br /> text{" "}
                    <a
                      href="tel:+14049516649"
                      target="_blank"
                      className="text-red-300 cursor-pointer"
                    >
                      404-951-6649
                    </a>{" "}
                    to inquire about getting started
                  </div>
                </div>
              </div>
            </div> 

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="cursor-pointer p-10 flex items-center justify-center rounded-3xl bg-the_gray shadow-xl"
            >
              <div className="flex flex-col items-center justify-center gap-10 text-center text-white">
                <div className="flex items-center gap-5">
                  <div className="w-[50px] h-[50px] flex items-center justify-center">
                    <img src={Warehouse} alt="" className="w-full" />
                  </div>

                  <p className="text-the_yellow text-2xl font-bold">
                    Rush order available
                  </p>
                </div>

                <p className="text_text">
                  $200 Profile will be sent to you in 24 business hours
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="cursor-pointer p-10 flex items-center justify-center rounded-3xl bg-the_gray shadow-xl"
            >
              <div className="flex flex-col items-center justify-center gap-10 text-center text-white">
                <div className="flex items-center gap-5">
                  <div className="w-[50px] h-[50px] flex items-center justify-center">
                    <img src={Warehouse} alt="" className="w-full" />
                  </div>

                  <p className="text-the_yellow text-2xl font-bold">
                    Payment plan description
                  </p>
                </div>

                <p className="text_text">
                  Hey love 💝 payment plan goes as follows You pay half up front
                  for me to start the process and I don’t finish the process
                  until paid in full There is also a payment plan fee of $50
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* <!-- Special Product --> */}
        <section>
          <div className="md:w-[80%] mx-auto w-[90%] mt-20">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
              {packages.map((pkg, index) => (
                <div key={index} className="">
                  <div className="px-10 bg-theDarkGold text-white pt-10 pb-20 rounded-3xl">
                    <p className="text-3xl">{pkg.name}</p>
                    <p className="text-5xl font-bold">{pkg.price}</p>
                  </div>
                  <div className="bg-white md:w-[85%] w-[90%] md:pl-5 mx-auto py-10 px-5 rounded-2xl -mt-10">
                    {pkg?.subhead && (
                      <div className="my-3 text-xs font-bold">
                        {pkg.subhead}
                      </div>
                    )}
                    <ul className="flex flex-col gap-5">
                      {pkg.benefits.map((benefit, idx) => (
                        <li key={idx}>
                          <span className=" font-bold">{benefit.title}</span>{" "}
                          {benefit.description}.
                        </li>
                      ))}
                    </ul>
                    {pkg?.action && (
                      <div className="mt-3 text-xs font-bold">{pkg.action}</div>
                    )}
                    {/* <div className="mt-3">
                      Payment plans are available. To inquire or get started,
                      text{" "}
                      <a
                        href="tel:+14049516649"
                        target="_blank"
                        className="text-theDarkGold cursor-pointer"
                      >
                        404-951-6649
                      </a>{" "}
                    </div> */}
                    <div className="mt-10 flex flex-col gap-3">
                      <a
                        href="tel:+14049516649"
                        target="_blank"
                        className="bg-theDarkGold text-white font-bold py-3 px-6 rounded items-center gap-3"
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
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="md:w-[80%] w-[90%] mx-auto mt-16">
            <div className="">
              <div>
                <div className="underline py-2 text-theDarkGold lg:text-[50px] text-[25px]">
                  Payment Plan, Rush Orders & Processing Time
                </div>
                <h1 className="lg:text-[40px] text-[20px] font-bold text-the_yellow">
                  Payment Plan Details
                </h1>
                <p>
                  To begin the process, a 50% deposit is required upfront. The
                  remaining balance will be due before the project is completed.
                  Please note that a $50 payment plan fee will be added to the
                  total cost. This ensures that we can proceed smoothly while
                  maintaining flexibility for both parties.
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-5">
                <h1 className="lg:text-[40px] text-[20px] font-bold text-the_yellow">
                  {/* Rush Orders & Processing Time */}
                  📣 Important Update on Processing Times
                </h1>
                <p>
                  We understand how important timely service is, and we
                  appreciate your trust in us. In the past, we offered both
                  standard and rush processing options to accommodate urgent
                  requests. <br /> <br />
                  Effective immediately, all processing times are now 7–14
                  business days (excluding weekends and holidays). We are no
                  longer offering rush processing services. <br /> <br />
                  This change allows us to better manage volume while continuing
                  to provide the quality and accuracy you deserve. Thank you so
                  much for your understanding and continued support 💛
                </p>
                {/* <div className="mt3">
                  To purchase a package, please contact{" "}
                  <a
                    href="tel:+14049516649"
                    target="_blank"
                    className="text-theDarkGold cursor-pointer"
                  >
                    404-951-6649
                  </a>{" "}
                  for any help
                </div> */}

                <div className="mt-10 md:flex gap-2">
                  <a
                    href="tel:+14049516649"
                    target="_blank"
                    className="bg-theDarkGold text-white font-bold py-3 px-6 rounded items-center gap-3"
                  >
                    <i className="fa-solid fa-phone-volume"></i> Send A Text
                  </a>
                  <a
                    target="_blank"
                    href="mailto:contact@royalapprovals.com"
                    className="bg-[#70CEE8] text-white font-bold py-3 px-6 rounded items-center gap-3"
                  >
                    <i className="fa-regular fa-envelope-open"></i> Send An
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Pricing --> */}
        <section id="pricing" className="md:my-20 mt-20">
          <div className="md:w-[80%] w-[90%] mx-auto">
            <div className="text-center underline py-2 lg:my-20 text-theDarkGold lg:text-[100px] text-[50px]">
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
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-theDarkGold"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-theDarkGold the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$75</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Light Bill
                      </div>
                    </div>

                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-theDarkGold"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-theDarkGold the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$75</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Doctor Note
                      </div>
                    </div>
                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-theDarkGold"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-theDarkGold the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$75</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Lease Agreement
                      </div>
                    </div>
                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-theDarkGold"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-theDarkGold the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$85</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Car Insurance
                      </div>
                    </div>

                    {/* <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-theDarkGold"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-theDarkGold the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$50</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Any PDF Doc
                      </div>
                    </div> */}

                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-theDarkGold"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-theDarkGold the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$270</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        GED/HS Diploma
                      </div>
                    </div>

                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-theDarkGold"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-theDarkGold the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$175</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Digital Id
                      </div>
                    </div>
                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-theDarkGold"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-theDarkGold the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$380</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Physical Id Overnight Shipping
                      </div>
                    </div>
                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-theDarkGold"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-theDarkGold the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$150</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Digital SSC
                      </div>
                    </div>
                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-theDarkGold"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-theDarkGold the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$365</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Physical SSC Overnight Shipping
                      </div>
                    </div>

                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-theDarkGold"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-theDarkGold the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$85 Each</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Bank Statement
                      </div>
                    </div>

                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-theDarkGold"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-theDarkGold the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
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
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-theDarkGold"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-theDarkGold the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$75</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Novo Verification
                      </div>
                    </div>

                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-theDarkGold"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-theDarkGold the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$85</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Do Your App
                      </div>
                    </div>

                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-theDarkGold"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-theDarkGold the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl"> $100</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Offer Letter
                      </div>
                    </div>
                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-theDarkGold"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-theDarkGold the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$135 </p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Offer Letter With Verification
                      </div>
                    </div>

                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-theDarkGold"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-theDarkGold the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
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
            <p className="underline py-2 text-theDarkGold lg:text-[100px] text-[50px]">
              Testimonials
            </p>
            <h1 className="lg:text-[40px] text-[20px] font-bold text-the_yellow">
              Hear What Our Customers Say About Us
            </h1>
            <p className=" text-center">
              At Royal Oasis, we pride ourselves on putting smiles on the faces
              of countless individuals by helping them secure approvals for
              their dream homes and cars. Our clients consistently express their
              gratitude for our efficient, supportive, and seamless approval
              process. We understand the emotional and financial significance of
              owning a home or car, and we are dedicated to making these dreams
              a reality. Read below to see the heartfelt stories of how we've
              transformed lives and provided peace of mind through our
              exceptional services.
            </p>
          </div>
          <div className="border-2 border-theDarkGold pt-5">
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
          <div className="md:w-[80%] w-[90%] mx-auto">
            <div className="flex gap-10 md:flex-row flex-col">
              <div className="">
                <div className="flex flex-col gap-4">
                  <div className="underline py-2 text-theDarkGold lg:text-[100px] text-[50px]">
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

                  {/* <div className="mt3">
                    To purchase a package, please contact{" "}
                    <a
                      href="tel:+14049516649"
                      target="_blank"
                      className="text-theDarkGold cursor-pointer"
                    >
                      404-951-6649
                    </a>{" "}
                    for any help
                  </div> */}

                  <div className="mt-10 md:flex gap-2">
                    <a
                      href="tel:+14049516649"
                      target="_blank"
                      className="bg-theDarkGold text-white font-bold py-3 px-6 rounded items-center gap-3"
                    >
                      <i className="fa-solid fa-phone-volume"></i> Send A Text
                    </a>
                    <a
                      target="_blank"
                      href="mailto:contact@royalapprovals.com"
                      className="bg-[#70CEE8] text-white font-bold py-3 px-6 rounded items-center gap-3"
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

        {/* <!-- Footer Section --> */}
        <footer className="bg-theDarkGold text-white py-6 flex items-center justify-center mt-20">
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
