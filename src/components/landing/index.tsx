"use client";

import "@splidejs/splide/css";
import React from "react";
import Carrossel from "../carrossel";

export default function Landing() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center gap-10 m-3 max-w-[1250px]">
        <div className="flex gap-5 justify-center">
          <div className="p-10 bg-cinza bg-opacity-45 justify-center content-center rounded-bl-[90px] rounded-3xl hidden lg:flex">
            <p className="text-[90px] self-center font-semibold -mt-6 leading-[1.1]">
              Encontre a sua próxima leitura.
            </p>
          </div>

          <Carrossel />
        </div>
      </div>
    </div>
  );
}
