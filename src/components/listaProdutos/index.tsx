"use client";

import React, { useEffect } from "react";
import Produto from "../Produto";
import { Livros } from "../../../types/home/home";


type LivrosProps = {
  posts: Livros[];
}

export default function ListaProdutos({ posts }: LivrosProps) {
  console.log(posts[1])
  return (
    <div className="xs:m-10 m-[1px]">
      <div className="pl-6 mt-10 mb-[2%]">
        <h1 className="font-semibold text-2xl mb-0">
          Embarque em um novo mundo de {posts[1].genero}
        </h1>
        <h3
          className="font-normal text-cinzatxt mt-0 text-xl"
        >
          O melhor em {posts[1].genero}
        </h3>
      </div>
      <div className="flex gap-6 justify-center flex-col items-center">
        <div className="flex justify-center items-center flex-wrap xs:gap-14 gap-2">
          {posts.slice(0, 5).map((post) => (
            <Produto key={post.id} post={post} />
          ))}

        </div>

      </div>
    </div>
  );
}
