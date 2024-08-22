type Card = {
  id: number;
  title: string;
  text: string;
};

export default function Card({ id, title, text }: Card) {
  return (
    <div className="flex flex-col bg-cinza rounded-[30px] w-1/4 justify-center round items-center gap-4 p-4">
      <h1 className="font-semibold text-2xl">{title}</h1>
      <p className="text-base text-cinzatxt">{text}</p>
    </div>
  );
}
