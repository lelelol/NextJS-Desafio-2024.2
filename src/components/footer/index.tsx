import Link from 'next/link';

export default function Footer() {
    return (
        <div className="pt-2 pb-2 min-h-[150px] flex justify-center items-center flex-col bg-cinza px-5 m-0 p-0">
            <p className="text-2xl md:text-4xl font-bold">next reading</p>
            <p className="text-xs md:text-sm">Seu portal para outros mundos</p>
            <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-y-2 md:gap-x-9 text-cinzatxt text-xs md:text-sm">
                <div><Link href="/">@nextreading</Link></div>
                <div><Link href="/">@nextreading</Link></div>
                <div><Link href="/">@nextreading</Link></div>
            </div>
        </div>
    );
}
