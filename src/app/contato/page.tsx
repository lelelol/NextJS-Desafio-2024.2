import Card from "@/components/card";

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
  title="Entre em contato"
  text={`Se você tiver alguma dúvida, sugestão ou apenas quiser conversar, estamos à disposição para ajudar.
  
Entre em contato conosco pelo telefone (11) 1234-5678 ou envie um e-mail para contato@exemplo.com.
  
Nossa equipe está pronta para atender às suas necessidades e garantir que você tenha a melhor experiência possível.`}
  id={1}
/>

      </div>
    </>
  );
}
