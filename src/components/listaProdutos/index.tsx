"use client";

import React, { useEffect } from "react";
import Produto from "../Produto";
import { Livros } from "../../../types/home/home";


type LivrosProps = {
  posts: Livros[];
}

export default function ListaProdutos({ posts }: LivrosProps) {
  return (
    <div className="m-10">
      <div className="pl-6 mt-10 mb-[2%]">
        <h1 className="font-semibold text-2xl mb-0">
          Embarque a sua próxima aventura
        </h1>
        <h3
          className="font-normal text-cinzatxt mt-0 text-xl"
        >
          O melhor em {posts[0].genero}
        </h3>
      </div>
      <div className="flex gap-6 justify-center flex-col items-center">
        <div className="flex justify-center items-center flex-wrap gap-14">
          {posts.map((post) => (
            <Produto key={post.id} post={post} />
          ))}

        </div>

      </div>
    </div>
  );
}
