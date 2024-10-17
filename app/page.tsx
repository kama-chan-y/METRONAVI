import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[200px_8fr_200px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-bold text-red-500 size-10">METRO NAVI</h1>
      <div className="min-h-40 bg-/images/S__117825549.jpg">

      </div>

      <div>
      <Image
        src="/images/S__117825549.jpg"
        width={500}
        height={500}
        alt="a"
      />
      </div>
     
      <p>ポータルサイトMETRO NAVI にようこそ</p>
    </div>
  );
}