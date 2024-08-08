import Image from "next/image";
export default function Produto() {
  return (
    <div>
      <Image
        className="ml-5 rounded-lg"
        src="/assets/ex.jpg"
        width={100}
        height={270}
        alt="capa"
      />
      <div className="flex -mt-24 h-28 w-[280px] flex-col bg-cinza bg-opacity-45 rounded-3xl p-4">
        <div className="flex flex-col flex-wrap justify-end pl-[120px]">
          <h2 className="font-semibold text-lg">O processo</h2>
          <h3 className="font-medium -mt-[6px] text-cinzatxt text-sm">
            Franz Kafka
          </h3>
          <p className="self-end mt-4">R$ 25,00</p>
        </div>
      </div>
    </div>
  );
}
