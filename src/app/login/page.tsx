export default function Contato() {
  return (
    <>
      <div className="flex justify-center gap-[10%] m-[7%]">
        <div className="w-1/3 flex-col items-center bg-cinza p-10 h-fit flex rounded-xl justify-center">
          <h1 className="font-semibold text-3xl">Olá novamente!</h1>
          <form className="w-full flex flex-col">
            <h2 className="font-semibold text-xl ml-[5%]">Email</h2>
            <div className="w-full flex justify-center flex-col items-center">
              <input
                type="text"
                name="email"
                className="w-[90%] bg-slate-300 h-14 rounded-lg"
              ></input>
            </div>
            <h2 className="font-semibold text-xl ml-[5%]">Senha</h2>
            <div className="w-full flex justify-center flex-col items-center">
              <input
                type="text"
                name="email"
                className="w-[90%] bg-slate-300 h-14 rounded-lg"
              ></input>
            </div>
            <button
              type="submit"
              className="p-3 w-32 self-center mt-10 bg-slate-300 font-semibold text-xl"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
