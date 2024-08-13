"use client";
import Image from "next/image";
import Produto from "../Produto";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Carrossel() {
  return (
    <div>
      <div className="flex w-full bg-cinza bg-opacity-45 rounded-3xl p-4 mb-8">
        <Image
          style={{ width: "210px", height: "300px" }}
          className="rounded-lg"
          src="/assets/ex.jpg"
          width={140}
          height={300}
          alt="capa"
        />
        <div className="flex flex-col items-center justify-around pl-8">
          <h2 className="font-semibold text-2xl">Bla bla bla</h2>
          <p className="text-cinzatxt text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
            purus vitae nunc placerat sollicitudin. Mauris accumsan feugiat eros
            eu accumsan. Maecenas scelerisque venenatis nulla eu faucibus. Etiam
            consectetur nec metus a tempor. In pulvinar vestibulum leo. Ut
            cursus elit a odio tincidunt rutrum.
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <Produto />
        <Produto />
      </div>
    </div>
  );
}
