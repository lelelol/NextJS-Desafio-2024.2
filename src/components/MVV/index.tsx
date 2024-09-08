"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";
import getApi from "@/api/get-secao";
import Card from "../card";

type MVVProps = {
  id: number;
  title: string;
  text: string;
};

export default function MVV() {
  const [cards, setCards] = useState<MVVProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { identities } = await getApi();
        setCards(identities);
      } catch {
        console.error("deu bigode");
      }
    };
    fetchData();
  });

  return (
    <div>
      <div className="hidden md:flex justify-center m-10 gap-[10%]">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} title={card.title} text={card.text} />
        ))}
      </div>
      <div className="flex flex-col items-center md:hidden justify-center m-10 gap-y-[20px]">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} title={card.title} text={card.text} />
        ))}
      </div>
    </div>


  );
}
