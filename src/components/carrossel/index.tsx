import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { MutableRefObject, useRef } from "react";
import Image from "next/image";
import Produto from "../Produto";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

export default function Carrossel() {
  return (
    <div>
      <Splide
        options={{
          type: "loop",
          pagination: true,
          autoplay: true,
          interval: 5000,
          pauseOnHover: true,
        }}
        hasTrack={false}
        className="max-w-[740px] paginacao hidden md:block"
        onMove={(slide) => {
          document.cookie = "linear-gradient(0deg, #FFF 20%, #eb4034 100%)";
          var x = document.cookie;
          console.log(x);
          document.body.style.background = x;
        }}
      >
        <SplideTrack>
          <SplideSlide>
            <div className="flex bg-cinza bg-opacity-45 rounded-3xl p-4 mb-8">
              <Image
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
                  purus vitae nunc placerat sollicitudin. Mauris accumsan feugiat
                  eros eu accumsan. Maecenas scelerisque venenatis nulla eu
                  faucibus. Etiam consectetur nec metus a tempor. In pulvinar
                  vestibulum leo. Ut cursus elit a odio tincidunt rutrum.
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <Produto />
              <Produto />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex w-full bg-cinza bg-opacity-45 rounded-3xl p-4 mb-8">
              <Image
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
                  purus vitae nunc placerat sollicitudin. Mauris accumsan feugiat
                  eros eu accumsan. Maecenas scelerisque venenatis nulla eu
                  faucibus. Etiam consectetur nec metus a tempor. In pulvinar
                  vestibulum leo. Ut cursus elit a odio tincidunt rutrum.
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <Produto />
              <Produto />
            </div>
          </SplideSlide>
        </SplideTrack>
        <div className="splide__arrows flex justify-center gap-40">
          <button className="splide__arrow--prev bg-cinza bg-opacity-45 rounded-3xl p-4 mt-3">
            <ArrowForwardIos />
          </button>
          <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div>
          <button className="splide__arrow--next bg-cinza bg-opacity-45 rounded-3xl p-4 mt-3">
            <ArrowForwardIos />
          </button>
        </div>
      </Splide>


      <Splide
        options={{
          type: "loop",
          pagination: true,
          autoplay: true,
          interval: 5000,
          pauseOnHover: true,
        }}
        hasTrack={false}
        className="max-w-[90vw] paginacao block md:hidden"
        onMove={(slide) => {
          document.cookie = "linear-gradient(0deg, #FFF 20%, #eb4034 100%)";
          var x = document.cookie;
          console.log(x);
          document.body.style.background = x;
        }}
      >
        <SplideTrack>
          <SplideSlide>
            <div className="flex items-center justify-center">
              <Image
                className="rounded-lg -mb-[18px]"
                src="/assets/ex.jpg"
                width={140}
                height={300}
                alt="capa"
              />
            </div>

            <div className="flex  bg-cinza bg-opacity-45 rounded-3xl p-4 mb-8">
              <div className="flex flex-col items-center justify-around">
                <h2 className="font-semibold text-2xl">Bla bla bla</h2>
                <p className="text-cinzatxt text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
                  purus vitae nunc placerat sollicitudin. Mauris accumsan feugiat
                  eros eu accumsan. Maecenas scelerisque venenatis nulla eu
                  faucibus. Etiam consectetur nec metus a tempor. In pulvinar
                  vestibulum leo. Ut cursus elit a odio tincidunt rutrum.
                </p>
              </div>
            </div>
            <div className="flex justify-between">
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex items-center  justify-center">
              <Image
                className="rounded-lg -mb-[18px]"
                src="/assets/ex.jpg"
                width={140}
                height={300}
                alt="capa"
              />
            </div>

            <div className="flex  bg-cinza bg-opacity-45 rounded-3xl p-4 mb-8">
              <div className="flex flex-col items-center justify-around">
                <h2 className="font-semibold text-2xl">Bla bla bla</h2>
                <p className="text-cinzatxt text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
                  purus vitae nunc placerat sollicitudin. Mauris accumsan feugiat
                  eros eu accumsan. Maecenas scelerisque venenatis nulla eu
                  faucibus. Etiam consectetur nec metus a tempor. In pulvinar
                  vestibulum leo. Ut cursus elit a odio tincidunt rutrum.
                </p>
              </div>
            </div>
            <div className="flex justify-between">
            </div>
          </SplideSlide>
        </SplideTrack>
        <div className="splide__arrows flex justify-center gap-[20%]">
          <button className="splide__arrow--prev bg-cinza bg-opacity-45 rounded-3xl p-4 mt-3">
            <ArrowForwardIos />
          </button>
          <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div>
          <button className="splide__arrow--next bg-cinza bg-opacity-45 rounded-3xl p-4 mt-3">
            <ArrowForwardIos />
          </button>
        </div>
      </Splide>
    </div>
  );
}
