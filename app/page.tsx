import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black ">
      <h1 className="text-3xl font-bold text-red-300">Welcome to Alxn787's Portfolio</h1>
      <Image src="/alxn1.svg" alt="Logo" width={500} height={500} />
    </div>  
  );
}
