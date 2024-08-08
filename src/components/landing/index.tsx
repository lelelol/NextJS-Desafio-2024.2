import Image from "next/image";
import Produto from "../Produto";
export default function Landing() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center gap-10 m-3 w-5/6">
        <div className="flex justify-center">
          <div className="p-10 bg-cinza bg-opacity-45 flex justify-center content-center rounded-bl-[90px] rounded-3xl">
            <p className="text-[82px] -mt-6 leading-[1.1]">
              Encontre a sua próxima leitura.
            </p>
          </div>
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
}
