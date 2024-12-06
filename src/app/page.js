import Image from "next/image";

export default function Home() {
  return (
    <div className="container">   
        <div className="title1">
          Ayy Derdooooo
        </div>
        <div className="title2">
          Doğum günün kutlu yeni yaşın fit mutlu huzurlu geçsin
        </div>
        {/* Yerel bir resim */}
        <Image 
          src="/dg.jpeg" 
          alt="Doğum günü kutlaması" 
          width={500} 
          height={300} 
        />
    </div>
  );
}
