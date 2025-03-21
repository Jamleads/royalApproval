/* eslint-disable react/no-unescaped-entities */
import { CarSide, Housekey, HouseSignal, Warehouse } from "./assets";
import { packages, reveiews } from "./utils/data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

function App() {
  const toPayment = (paymentUrl) => {
    window.location.href = paymentUrl;
  };
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
              {/* <h1 className="text-2xl leading-10">Royal Oasis</h1> */}
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
                Royal Oasis specializes in helping individuals navigate the
                process of securing apartments and cars.
              </h1>
              <p data-aos="fade-down-right">
                At Royal Oasis, we recognize the difficulties and frustrations
                involved in securing housing and transportation. Our mission is
                to ensure a smooth, efficient process, providing our clients
                with reliable support and peace of mind every step of the way.
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

        {/* <!-- Services Section --> */}
        <section id="services" className="md:my-40 md:pt-40">
          <div className="text-center underline py-2 lg:my-20 text-theDarkGold lg:text-[100px] text-[50px]">
            Our Services
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
          </div>
        </section>

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
                    <ul className="flex flex-col gap-5">
                      {pkg.benefits.map((benefit, idx) => (
                        <li key={idx}>
                          <span className=" font-bold">{benefit.title}</span>{" "}
                          {benefit.description}.
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3">
                      Payments plans available text{" "}
                      <a
                        href="tel:+14049516649"
                        target="_blank"
                        className="text-theDarkGold cursor-pointer"
                      >
                        404-951-6649
                      </a>{" "}
                      to inquire about getting started
                    </div>
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

        {/* <!-- Pricing --> */}
        <section id="pricing" className="md:my-40 md:pt-40 mt-20">
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
                        <p className="text-xl">$45</p>
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
                        <p className="text-xl">$45</p>
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

                    <div
                      className="bg-the_gray flex items-center h-[100px] border-r-[1px] border-theDarkGold"
                      data-aos="fade-down-right"
                    >
                      <div className="w-2/5 h-[120px] mb-5 bg-theDarkGold the-path rounded-l-3xl flex flex-col items-center justify-center text-white">
                        <p className="text-xl">$50</p>
                      </div>
                      <div className="w-3/5 h-full flex items-center justify-center text-base text-white">
                        Any PDF Doc
                      </div>
                    </div>

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
                        <p className="text-xl">$95</p>
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
                        <p className="text-xl">$65</p>
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
                        <p className="text-xl">$85</p>
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
                        <p className="text-xl">$105</p>
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
        <section id="testimones" className="md:my-40 md:pt-40 mt-20">
          <div className="md:w-[80%] w-[90%] mx-auto">
            <div className="flex gap-10 md:flex-row flex-col">
              <div className="lg:w-1/2">
                <div>
                  <div className="underline py-2 text-theDarkGold lg:text-[100px] text-[50px]">
                    Testimonials
                  </div>
                  <h1 className="lg:text-[40px] text-[20px] font-bold text-the_yellow">
                    Hear What Our Customers Say About Us
                  </h1>
                  <p>
                    At Royal Oasis, we pride ourselves on putting smiles on the
                    faces of countless individuals by helping them secure
                    approvals for their dream homes and cars. Our clients
                    consistently express their gratitude for our efficient,
                    supportive, and seamless approval process. We understand the
                    emotional and financial significance of owning a home or
                    car, and we are dedicated to making these dreams a reality.
                    Read below to see the heartfelt stories of how we've
                    transformed lives and provided peace of mind through our
                    exceptional services.
                  </p>
                </div>

                <div className="flex flex-col gap-4 mt-5">
                  <h1 className="lg:text-[40px] text-[20px] font-bold text-the_yellow">
                    Disclaimer
                  </h1>
                  <p>
                    All clients are responsible for any fees outside of the
                    package that may or may not be limited to Application &
                    Admin fees, Deposits, move in fees, & First months rent. It
                    is also possible to get denied using housing packages, not
                    all places accept profiles. In the event that you are
                    denied, We will continue on with another apartment. The
                    purchasing of another package is not necessary and we will
                    work with you until approved.
                  </p>
                  <div className="mt3">
                    To purchase a package, please contact{" "}
                    <a
                      href="tel:+14049516649"
                      target="_blank"
                      className="text-theDarkGold cursor-pointer"
                    >
                      404-951-6649
                    </a>{" "}
                    for any help
                  </div>

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

              <div className="lg:w-1/2 border-2 border-theDarkGold pt-5">
                <div className="text-center mb-10">
                  <p className="text-3xl">
                    See what our customers says about us
                  </p>
                  <p className="">Drag left or right to see more</p>
                </div>

                <div className="swiper mySwiper md:h-[800px] md:overflow-x-auto overflow-x-hidden">
                  <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                  >
                    {reveiews.map((item, idx) => (
                      <SwiperSlide key={idx}>
                        <img src={item.image} alt="" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Footer Section --> */}
        <footer className="bg-theDarkGold text-white py-6 flex items-center justify-center">
          <div>
            <p className="text-center">
              Project outsourced to
              <a
                href="https://jamleads.netlify.app/"
                className="text-lg font-bold text-black underline"
                target="_blank"
              >
                Jamleads
              </a>
              and Managed by
              <a
                href="https://icontinenttech.com/"
                className="text-lg font-bold text-black underline"
                target="_blank"
              >
                iContinent
              </a>
              Solution Ltd &copy; 2024. All right reserved
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
