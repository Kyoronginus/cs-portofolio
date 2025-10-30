// components/YouTubeFacade.tsx

"use client"; 

import { useState } from "react";
import Image from "next/image";

type Props = {
  videoId: string;
  title: string;
};

export default function YouTubeFacade({ videoId, title }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  if (isClicked) {
    return (
      // ★ aspect-[21:9] を削除し、h-full を追加
      <div className="w-full h-full bg-black/50 rounded-lg overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsClicked(true)}
      // ★ aspect-[21:9] を削除し、h-full を追加
      className="w-full h-full bg-black/50 rounded-lg overflow-hidden relative group cursor-pointer"
      aria-label={`Play video: ${title}`}
    >
      <Image
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        fill
        style={{ objectFit: 'cover' }}
        className="transition-transform duration-300 group-hover:scale-105"
        unoptimized
      />

      {/* カスタムの再生ボタン */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/10">
        <div className="w-16 h-16 rounded-full bg-[#fdfd1f]/80 flex items-center justify-center transition-all duration-300 group-hover:bg-[#fdfd1f]/80 group-hover:scale-110">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5V19L19 12L8 5Z" fill="white" />
          </svg>
        </div>
      </div>
    </button>
  );
}