"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hidden md:flex justify-center items-center h-12 bg-cinza">
        <div className="flex items-center justify-end space-x-5 w-full">
          <Link href={"/produtos"}>Produtos</Link>
          <Link href={"/contato"}>Contato</Link>
        </div>
        <Link
          href={"/"}
          className="w-fit text-2xl font-semibold whitespace-nowrap pl-4 pr-4"
        >
          next reading
        </Link>
        <div className="w-full flex items-center justify-between space-x-5">
          <div className="space-x-5">
            <Link href={"/login"}>Login</Link>
            <Link href={"/gerenciamento"}>Gerenciamento</Link>
          </div>

          <div className="flex flex-col text-sm justify-center items-center pr-4">
            <a>Carrinho</a>
            <a className="text-cinzatxt">R$ 0,00</a>
          </div>
        </div>
      </div>

      <div className="flex md:hidden justify-between items-center h-12 bg-cinza px-4">
        <button
          onClick={handleClick}
          className="flex flex-col justify-center items-center"
        >
          <span
            className={`bg-black block transition-all duration-300 ease-out 
              h-0.5 w-6 rounded-sm ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-100 ease-out 
              h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
              h-0.5 w-6 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
          ></span>
        </button>
        <Link
          href={"/"}
          className="w-fit text-2xl font-semibold whitespace-nowrap"
        >
          next reading
        </Link>
        <div className="flex flex-col items-center text-sm">
          <a>Carrinho</a>
          <a className="text-cinzatxt">R$ 0,00</a>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col  items-center bg-cinza w-full p-4 transition-all ease-in-out">
          <Link href={"/produtos"} className="py-2">
            Produtos
          </Link>
          <Link href={"/contato"} className="py-2">
            Contato
          </Link>
          <Link href={"/login"} className="py-2">
            Login
          </Link>
          <Link href={"/gerenciamento"} className="py-2">
            Gerenciamento
          </Link>
        </div>
      )}
    </>
  );
}
