<div className="lg:w-1/2 border-2 border-theDarkGold pt-5">
  <div className="text-center mb-10">
    <p className="text-3xl">See what our customers says about us</p>
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
</div>;
