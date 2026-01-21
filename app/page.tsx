import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-screen place-items-center justify-center font-sans bg-black-transparent">
      <main className="min-h-screen w-full max-w-3xl grid place-items-center text-center items-center justify-between py-8 px-4 bg-black sm:items-start">
        <div className="w-full mr-auto ml-auto">
          <div className="grid place-items-center text-5xl mb-12 font-morris-roman">
            JeffLane.Rocks
          </div>
          <div className="grid opacity-100! mb-12 place-items-center">
            <Image
              src="/JeffLaneHomeStudio.jpeg"
              alt="Jeff Lane"
              width={448}
              height={540.528974739970282}
              priority
              className="rounded-lg"
            />
          </div>
          <div className="grid text-justify w-md inline-block mb-12">
            I&apos;m a composer, songwriter, lyricist, guitarist and singer. I
            also do mix engineering and production. Below are some samples of my
            work with my projects{" "}
            <a
              href="https://www.heartofcygnus.com"
              className="font-bold"
              target="_blank"
            >
              Heart of Cygnus
            </a>{" "}
            and{" "}
            <a
              href="https://burningdown.bandcamp.com"
              className="font-bold"
              target="_blank"
            >
              Burningdown
            </a>
            . Let&apos;s work together! Feel free to contact me at{" "}
            <a href="mailto:jeff@jefflane.rocks" className="font-bold">
              jeff@jefflane.rocks
            </a>{" "}
            or call me +1 (323) 452-3616.
          </div>
          <div className="grid place-items-center mb-12 opacity-100!">
            <iframe
              width="448"
              height="252"
              src="https://www.youtube.com/embed/dUajr1NJ3fI?si=I84qyh2GokWBmbOl"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="bg-black opacity-100! backdrop-opacity-100!"
            ></iframe>
          </div>
          <div className="grid place-items-center mb-12 opacity-100!">
            <iframe
              width="448"
              height="252"
              src="https://www.youtube.com/embed/_Al0AtXGxfY?si=pjFN-wg5xjgyt4SA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid place-items-center mb-12">
            <iframe
              width="448"
              height="252"
              src="https://www.youtube.com/embed/1pIWePrZepU?si=13SKwkXLeOfSThf-"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid place-items-center mb-12">
            <iframe
              width="448"
              height="252"
              src="https://www.youtube.com/embed/Dg58uBSxCes?si=A75ZsfuiaNwSA9vB"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid place-items-center mb-12">
            <iframe
              width="448"
              height="252"
              src="https://www.youtube.com/embed/S1rEiO__PL0?si=fmRVVRTld8chLDyd"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid place-items-center mb-12">
            {/*               src="https://www.youtube.com/embed/YsVS-n6cVKo?si=k2hxOqqx1oI4o5aa" */}
            <iframe
              width="448"
              height="252"
              src="https://www.youtube.com/embed/YsVS-n6cVKo?si=k2hxOqqx1oI4o5aa"
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
