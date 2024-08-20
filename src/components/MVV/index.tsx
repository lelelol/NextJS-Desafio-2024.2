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
    <div className="flex justify-center m-10 gap-[10%]">
      {cards.map((card) => (
        // eslint-disable-next-line react/jsx-key
        <Card id={card.id} title={card.title} text={card.text} />
      ))}
    </div>
  );
}
