type CardProps = {
  id: number;
  title: string;
  text: string;
};

export default function Card({ id, title, text }: CardProps) {
  return (
    <div className="whitespace-pre-line flex flex-col bg-cinza rounded-xl w-full sm:w-80 md:w-96 lg:w-1/4 xl:w-1/5 justify-center items-center gap-4 p-4">
      <h1 className="font-semibold text-lg sm:text-xl md:text-2xl">{title}</h1>
      <p className="text-sm sm:text-base md:text-lg text-cinzatxt text-center">
        {text}
      </p>
    </div>
  );
}
