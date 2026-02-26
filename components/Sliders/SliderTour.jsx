"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./SliderTour.module.scss";
import Link from "next/link";

const dataBrands = [
  {
    id: 1,
    logo: "/banmedica-logo.png",
    url: "https://www.banmedica.cl",
  },
  {
    id: 2,
    logo: "/Consalud_logo.png",
    url: "https://www.consalud.cl",
  },
  {
    id: 3,
    logo: "/esencial-logo.png",
    url: "https://www.somosesencial.cl",
  },
  {
    id: 4,
    logo: "/isa_nueva_mas.webp",
    url: "https://www.nuevamasvida.cl",
  },
  {
    id: 5,
    logo: "/logo_vida_tres.png",
    url: "https://www.vidatres.cl",
  },
  {
    id: 6,
    logo: "/logos-col.png",
    url: "https://www.colmena.cl",
  },
];

const SliderTour = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20} // Ajuste del espacio entre los slides
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1, // Muestra 1.3 slides en móviles
          spaceBetween: 10, // Ajuste del espacio entre los slides en móviles
        },
        600: {
          slidesPerView: 3, // Muestra 3 slides en pantallas grandes
          spaceBetween: 20, // Ajuste del espacio entre los slides en pantallas grandes
        },
      }}
      className={styles.swiperContainer}
      style={{
        "--swiper-pagination-color": "#24b9cc",
        "--swiper-navigation-color": "#24b9cc",
        "--swiper-navigation-hover-color": "#24b9cc",
      }}
    >
      {dataBrands.map((brand, index) => (
        <SwiperSlide
          key={index}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <a href={brand.url} target="_blank" rel="noopener noreferrer">
            <img
              src={brand.logo}
              alt={`Logo ${index + 1}`}
              className={styles.slideImage}
            />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderTour;
