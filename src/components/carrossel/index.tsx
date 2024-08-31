import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { MutableRefObject, useRef } from "react";
import Image from "next/image";
import Produto from "../Produto";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import Cookies from "js-cookie";

interface CarrosselProps {
  divMaeRef: MutableRefObject<HTMLDivElement | null>;
}

export default function Carrossel({ divMaeRef }: CarrosselProps) {
  const paginacaoRef = useRef<HTMLDivElement>(null);

  return (
    <Splide
      options={{
        type: "loop",
        pagination: true,
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
      }}
      hasTrack={false}
      className="max-w-[800px] paginacao"
      onMove={(slide) => {
        const divMae = divMaeRef.current;
        document.body.style.backgroundColor = "red";
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
                Lorem ipsum dolor sit amet,
                ectetur adipiscing elit. Nam non
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
  );
}
