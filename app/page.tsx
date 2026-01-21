import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-san bg-black">
      <main className="min-h-screen w-full max-w-3xl grid place-items-center text-center items-center justify-between py-32 px-16 bg-black sm:items-start">
        <div className="w-full mr-auto ml-auto">
          <div className="grid place-items-center text-5xl mb-12 font-morris-roman">
            JeffLane.Rocks
          </div>
          <div className="grid place-items-center mb-12">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dUajr1NJ3fI?si=I84qyh2GokWBmbOl"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid place-items-center mb-12">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1pIWePrZepU?si=13SKwkXLeOfSThf-"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
