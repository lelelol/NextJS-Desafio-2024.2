import Landing from "@/components/landing";
import Generos from "@/components/generos/indes";
import ListaProdutos from "@/components/listaProdutos";
import MVV from "@/components/MVV";

export default function Home() {
  return (
    <>
      <Landing />
      <Generos />
      <MVV />
    </>
  );
}
