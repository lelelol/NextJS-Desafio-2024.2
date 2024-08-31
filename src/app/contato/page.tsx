'use client'
import Card from "@/components/card";
import Cookies from "js-cookie";

export default function Contato() {
  return (
    <>
      <div className="flex justify-center gap-[10%] m-[7%]">
        <Card
          title="Sobre nós"
          text="Nossa missão é proporcionar serviços e produtos de qualidade, buscando sempre a satisfação dos nossos clientes. Comprometemo-nos a agir com responsabilidade, integridade e inovação, garantindo um impacto positivo na vida das pessoas e na sociedade."
          id={0}
        />
        <Card
          title="Sobre nós"
          text="Nossa missão é proporcionar serviços e produtos de qualidade, buscando sempre a satisfação dos nossos clientes. Comprometemo-nos a agir com responsabilidade, integridade e inovação, garantindo um impacto positivo na vida das pessoas e na sociedade."
          id={0}
        />

        <button onClick={() => Cookies.set('name', '12')}>oie</button>
        <button onClick={() => console.log(Cookies.get('name'))}>oie</button>
      </div>
    </>
  );
}
