import Pesquisa from "@/components/pesquisa";
import Produto from "@/components/Produto";

export default function Produtos() {
  return (
    <>
      <Pesquisa />
      <div className="m-10">
        <div className="pl-6 mt-10 mb-[2%]">
          <h1 className="font-semibold text-2xl mb-0">
            Encontre a sua próxima obsessão
          </h1>
          <h3 className="font-normal text-cinzatxt mt-0 text-xl">
            Nossos livros
          </h3>
        </div>
        <div className="flex gap-6 justify-center flex-col items-center">
          <div className="flex gap-14 flex-wrap items-center justify-center">
            <Produto titulo={"O processo"} autor={"Franz Kafka"} valor={"R$ 25,00"} img={"/assets/ex.jpg"} />
            <Produto titulo={"O processo"} autor={"Franz Kafka"} valor={"R$ 25,00"} img={"/assets/ex.jpg"} />
            <Produto titulo={"O processo"} autor={"Franz Kafka"} valor={"R$ 25,00"} img={"/assets/ex.jpg"} />
            <Produto titulo={"O processo"} autor={"Franz Kafka"} valor={"R$ 25,00"} img={"/assets/ex.jpg"} />
            <Produto titulo={"O processo"} autor={"Franz Kafka"} valor={"R$ 25,00"} img={"/assets/ex.jpg"} />
            <Produto titulo={"O processo"} autor={"Franz Kafka"} valor={"R$ 25,00"} img={"/assets/ex.jpg"} />
            <Produto titulo={"O processo"} autor={"Franz Kafka"} valor={"R$ 25,00"} img={"/assets/ex.jpg"} />
            <Produto titulo={"O processo"} autor={"Franz Kafka"} valor={"R$ 25,00"} img={"/assets/ex.jpg"} />
            <Produto titulo={"O processo"} autor={"Franz Kafka"} valor={"R$ 25,00"} img={"/assets/ex.jpg"} />
            <Produto titulo={"O processo"} autor={"Franz Kafka"} valor={"R$ 25,00"} img={"/assets/ex.jpg"} />
            <Produto titulo={"O processo"} autor={"Franz Kafka"} valor={"R$ 25,00"} img={"/assets/ex.jpg"} />
            <Produto titulo={"O processo"} autor={"Franz Kafka"} valor={"R$ 25,00"} img={"/assets/ex.jpg"} />
            <Produto titulo={"O processo"} autor={"Franz Kafka"} valor={"R$ 25,00"} img={"/assets/ex.jpg"} />
            <Produto titulo={"O processo"} autor={"Franz Kafka"} valor={"R$ 25,00"} img={"/assets/ex.jpg"} />
            <Produto titulo={"O processo"} autor={"Franz Kafka"} valor={"R$ 25,00"} img={"/assets/ex.jpg"} />
          </div>
        </div>
      </div>
    </>
  );
}
