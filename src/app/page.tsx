import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Landing from "@/components/landing";
import Generos from "@/components/generos/indes";

export default function Home() {
  return (
    <>
      <Landing />
      <Generos />
    </>
  );
}
