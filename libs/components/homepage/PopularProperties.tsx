import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import PopularPropertyCard from "./PopularPropertyCard";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

SwiperCore.use([Navigation, Pagination]);

const PopularProperties = ({
  initialInput = [1, 2, 3, 4, 5, 6, 7],
}: {
  initialInput?: number[];
}) => {
  const [popularProperties, setPopularProperties] =
    useState<number[]>(initialInput);

  return (
    <Stack className="popular-properties">
      <Stack className="container">
        <Stack className="info-box">
          <Box className="left">
            <span>Popular properties</span>
            <p>Popularity is based on views</p>
          </Box>
          <Box className="right">
            <div className="more-box">
              <Link href="/property">
                <span>See All Categories</span>
              </Link>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>
        <Stack className="card-box">
          <Swiper
            className="popular-property-swiper"
            modules={[Navigation, Pagination]} // <-- added
            slidesPerView="auto"
            spaceBetween={25}
            navigation={{
              nextEl: ".swiper-popular-next",
              prevEl: ".swiper-popular-prev",
            }}
            pagination={{
              el: ".swiper-popular-pagination",
              clickable: true, // Allows clicking on pagination bullets to navigate
              type: "bullets", // Shows dots as pagination (default)
            }}
          >
            {popularProperties.map((property, index) => {
              return (
                <SwiperSlide key={index} className="popular-property-slide">
                  <PopularPropertyCard />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
        <div className="pagination-box">
          <WestIcon className="swiper-popular-prev" />
          <div className="swiper-popular-pagination"></div>
          <EastIcon className="swiper-popular-next" />
        </div>
      </Stack>
    </Stack>
  );
};

export default PopularProperties;
