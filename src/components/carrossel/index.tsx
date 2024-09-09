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
  const sections = [
    {
      title: "Ação",
      description: "Mergulhe em aventuras eletrizantes e cheias de adrenalina, onde cada página é uma explosão de emoção."
    },
    {
      title: "Romance",
      description: "Explore histórias de amor inesquecíveis, cheias de emoções e reviravoltas que vão aquecer seu coração."
    },
    {
      title: "Fantasia",
      description: "Entre em reinos mágicos, onde a imaginação não tem limites e o impossível se torna realidade."
    },
    {
      title: "Mistério",
      description: "Desvende segredos e enigmas em tramas que vão te prender até a última página."
    },
    {
      title: "Drama",
      description: "Experimente histórias profundas e impactantes, que exploram as complexidades da vida e das emoções humanas."
    },
    {
      title: "Aventura",
      description: "Descubra mundos novos e vivencie jornadas épicas repletas de desafios e descobertas incríveis."
    }
  ];

  const handleSlideChange = (splide: any) => {
    const newActiveSlide = splide.index;
    setActiveSlide(newActiveSlide);
    const activeSlideInfo = slides[newActiveSlide];
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
        className="md:max-w-[740px] paginacao max-w-[100vw]"
        onMove={handleSlideChange}
      >
        <SplideTrack>
          {slides.map((slide, index) => (
            <SplideSlide key={index}>
              <div className="flex md:flex-row flex-col md:bg-cinza md:bg-opacity-45 rounded-3xl md:p-4 md:mb-8 items-center justify-center">
                <Image
                  className="rounded-lg -mb-[60px] z-10 md:mb-0"
                  src="/assets/ex.jpg"
                  width={140}
                  height={300}
                  alt="capa"
                />
                <div className="flex flex-col bg-cinza bg-opacity-45 md:bg-opacity-0 m-3 rounded-3xl items-center justify-around md:pl-8">
                  <h2 className="font-semibold text-2xl md:mt-0 mt-14">{slide.genre[0].genero.charAt(0).toUpperCase() + slide.genre[0].genero.slice(1)}</h2>
                  <p className="text-cinzatxt text-center">
                    {sections[index].description}
                  </p>
                </div>
              </div>
              <div className="justify-between hidden md:flex">
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
          
          <button className="splide__arrow--next bg-cinza bg-opacity-45 rounded-3xl p-4 mt-3">
            <ArrowForwardIos />
          </button>
        </div>
      </Splide>

      {/* <Splide
        options={{
          type: "loop",
          pagination: true,
          autoplay: true,
          interval: 4000,
          pauseOnHover: true,
        }}
        hasTrack={false}
        className="max-w-[100vw] paginacao block md:hidden"
        onMove={handleSlideChange}
      >
        <SplideTrack>
          {slides.map((slide, index) => (
            <SplideSlide key={index}>
              <div className="flex items-center justify-center">
                <Image
                  className="rounded-lg -mb-[55px]"
                  src="/assets/ex.jpg"
                  width={140}
                  height={300}
                  alt="capa"
                />
              </div>

              <div className="flex  bg-cinza bg-opacity-45 max-w-[100vw] rounded-3xl p-4 mb-3">
                <div className="flex flex-col items-center justify-around">
                  <h2 className="font-semibold text-2xl mt-10">{slide.genre[0].genero.charAt(0).toUpperCase() + slide.genre[0].genero.slice(1)}</h2>
                  <p className="text-cinzatxt text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
                    purus vitae nunc placerat sollicitudin. Mauris accumsan feugiat
                    eros eu accumsan. Maecenas scelerisque venenatis nulla eu
                    faucibus. Etiam consectetur nec metus a tempor. In pulvinar
                    vestibulum leo. Ut cursus elit a odio tincidunt rutrum.
                  </p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
        <div className="splide__arrows flex justify-center gap-40">
          <button className="splide__arrow--prev bg-cinza bg-opacity-45 rounded-3xl p-4 mt-3">
            <ArrowForwardIos />
          </button>

          <button className="splide__arrow--next bg-cinza bg-opacity-45 rounded-3xl p-4 mt-3">
            <ArrowForwardIos />
          </button>
        </div>
      </Splide> */}
    </div>
  );
}
