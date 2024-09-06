"use client";
import Image from "next/image";
import Script from "next/script";
import React, { useEffect } from "react";
import Produto from "../Produto";

type ProdutoProps = {
  filtro: string;
  indice: string;
};

export default function ListaProdutos({ filtro, indice }: ProdutoProps) {
  useEffect(() => {
    console.log(indice);
    var subtitulo = document.getElementById("subtitulo" + indice);
    if (subtitulo) {
      subtitulo.innerHTML = "O melhor em " + filtro;
    }
  });
  return (
    <div className="m-10">
      <div className="pl-6 mt-10 mb-[2%]">
        <h1 className="font-semibold text-2xl mb-0">
          Embarque a sua próxima aventura
        </h1>
        <h3
          id={`subtitulo${indice}`}
          className="font-normal text-cinzatxt mt-0 text-xl"
        >
          oi
        </h3>
      </div>
      <div className="flex gap-6 justify-center flex-col items-center">
        <div className="flex justify-center items-center flex-wrap gap-14">
          <Produto />
          <Produto />
          <Produto />
          <Produto />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-14">
          <Produto />
          <Produto />
          <Produto />
          <Produto />
        </div>
      </div>
    </div>
  );
}
