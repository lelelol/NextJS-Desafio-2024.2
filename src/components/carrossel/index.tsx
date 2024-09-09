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
      description: "Mergulhe em aventuras eletrizantes e cheias de adrenalina, onde cada página é uma explosão de emoção. Sinta seu coração disparar enquanto os heróis enfrentam desafios impossíveis e inimigos formidáveis em histórias que te deixarão sem fôlego."
    },
    {
      title: "Romance",
      description: "Explore histórias de amor inesquecíveis, cheias de emoções intensas e reviravoltas que vão aquecer seu coração. De paixões avassaladoras a amores proibidos, cada conto é uma jornada emocional que toca as profundezas do seu ser."
    },
    {
      title: "Fantasia",
      description: "Entre em reinos mágicos e místicos, onde a imaginação não tem limites e o impossível se torna realidade. De épicas batalhas entre o bem e o mal a jornadas em mundos encantados, cada história é uma porta para um universo de maravilhas."
    },
    {
      title: "Mistério",
      description: "Desvende segredos obscuros e enigmas intricados em tramas que vão te prender até a última página. Siga os passos de detetives brilhantes e personagens enigmáticos em histórias onde cada detalhe pode ser a chave para a solução."
    },
    {
      title: "Drama",
      description: "Experimente histórias profundas e impactantes, que exploram as complexidades da vida e das emoções humanas. De conflitos familiares a dilemas existenciais, essas narrativas mergulham nas profundezas da alma e nos desafios do cotidiano."
    },
    {
      title: "Aventura",
      description: "Descubra mundos novos e vivencie jornadas épicas repletas de desafios e descobertas incríveis. A cada passo, enfrente perigos desconhecidos e desvende mistérios antigos, enquanto os protagonistas se lançam em missões que testam sua coragem e determinação."
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
                  <p className="text-cinzatxt text-center p-2">
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
    </div>
  );
}