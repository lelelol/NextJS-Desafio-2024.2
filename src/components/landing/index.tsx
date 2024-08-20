"use client";
import Image from "next/image";
import Produto from "../Produto";
import { Open_Sans } from "next/font/google";
import { useRef } from "react";
import "@splidejs/splide/css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React from "react";
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Carrossel from "../carrossel";

export default function Landing() {
  const divMaeRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divMaeRef} id="divmae" className="flex justify-center bg-degrade">
      <div className="flex justify-center gap-10 m-3 max-w-[1250px]">
        <div className="flex gap-5 justify-center">
          <div className="p-10 bg-cinza bg-opacity-45 flex justify-center content-center rounded-bl-[90px] rounded-3xl">
            <p className="text-[90px] font-semibold -mt-6 leading-[1.1]">
              Encontre a sua próxima leitura.
            </p>
          </div>

          <Carrossel divMaeRef={divMaeRef} />
        </div>
      </div>
    </div>
  );
}
