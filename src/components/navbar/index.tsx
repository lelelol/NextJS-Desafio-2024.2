export default function Navbar() {
    return (
      <div className="flex justify-center place-items-center h-12 bg-customGray">
        <a className="pr-5 pl-5">Produtos</a>
        <a className="pr-5 pl-5">Contato</a>
        <a className="pr-5 pl-5 text-2xl font-semibold ">next reading</a>
        <a className="pr-5 pl-5">Login</a>
        <a className="pr-5 pl-5">Gerenciamento</a>
      </div>
    );
  }