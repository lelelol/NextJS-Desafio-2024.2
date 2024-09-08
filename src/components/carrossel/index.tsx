import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import Produto from "../Produto";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { Livros } from "../../../types/home/home";
import { useState } from "react";

type LivrosProps = {
  posts: Livros[];
}

export default function Carrossel({ posts }: LivrosProps) {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const romance = posts.filter((post) => post.genero === "romance");
  const acao = posts.filter((post) => post.genero === "ação");
  const fantasia = posts.filter((post) => post.genero === "fantasia");
  const misterio = posts.filter((post) => post.genero === "mistério");
  const drama = posts.filter((post) => post.genero === "drama");
  const aventura = posts.filter((post) => post.genero === "aventura");

  const slides = [
    { genre: acao, color: "linear-gradient(0deg, #FFF 20%, #3498db 100%)" },
    { genre: romance, color: "linear-gradient(0deg, #FFF 20%, #eb4034 100%)" },
    { genre: fantasia, color: "linear-gradient(0deg, #FFF 20%, #2ecc71 100%)" },
    { genre: misterio, color: "linear-gradient(0deg, #FFF 20%, #9b59b6 100%)" },
    { genre: drama, color: "linear-gradient(0deg, #FFF 20%, #f39c12 100%)" },
    { genre: aventura, color: "linear-gradient(0deg, #FFF 20%, #e67e22 100%)" }
  ];

  const handleSlideChange = (splide: any) => {
    const newActiveSlide = splide.index;
    setActiveSlide(newActiveSlide);
    const activeSlideInfo = slides[newActiveSlide];
    document.cookie = activeSlideInfo.color;
    document.body.style.background = activeSlideInfo.color;
  };

  return (
    <div>
      <Splide
        options={{
          type: "loop",
          pagination: true,
          autoplay: true,
          interval: 4000,
          pauseOnHover: true,
        }}
        hasTrack={false}
        className="max-w-[740px] paginacao hidden md:block"
        onMove={handleSlideChange}
      >
        <SplideTrack>
          {slides.map((slide, index) => (
            <SplideSlide key={index}>
              <div className="flex bg-cinza bg-opacity-45 rounded-3xl p-4 mb-8">
                <Image
                  className="rounded-lg"
                  src="/assets/ex.jpg"
                  width={140}
                  height={300}
                  alt="capa"
                />
                <div className="flex flex-col items-center justify-around pl-8">
                  <h2 className="font-semibold text-2xl">{slide.genre[0].genero.charAt(0).toUpperCase() + slide.genre[0].genero.slice(1)}</h2>
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
                {slide.genre.slice(0, 2).map(post => (
                  <Produto key={post.id} post={post} />
                ))}
              </div>
            </SplideSlide>
          ))}
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
    </div>
  );
}
