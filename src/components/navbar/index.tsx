export default function Navbar() {
    return (
      <div className="flex justify-center items-center h-12 bg-cinza w-full">
        <div className="flex items-center justify-center space-x-5">
          <a >Produtos</a>
          <a >Contato</a>
          <a className="pr-4 pl-4 text-2xl font-semibold">next reading</a>
          <a >Login</a>
          <a >Gerenciamento</a>
        </div>
        <div className="absolute top-0 right-0 mt-1 mr-5 flex flex-col text-sm justify-center items-center">
            <a>Carrinho</a>
            <a className="text-cinzatxt">R$ 0,00</a>
        </div>
      </div> 
           
    );
}

        
