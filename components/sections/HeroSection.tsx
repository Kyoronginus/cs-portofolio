// components/sections/HeroSection.tsx

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="
        min-h-screen  /* 画面の高さいっぱいに */
        bg-black text-white
        relative      /* ★ 1. 親コンテナを 'relative' に（重要）*/
        overflow-hidden /* はみ出し防止 */
      "
    >
      {/* 1. 背景画像 (奥) */}
      {/* これがセクション全体に広がる画像になります */}
      <Image
        // ★ あなたの写真のパスに変更してください
        src="/images/myphoto_cropped.jpg"
        alt="Hero background image"
        fill
        style={{ objectFit: 'cover' }}
        className="opacity-30" // ★ 2. 画像を少し暗くしてテキストを読みやすく
      />

      {/* 2. テキストコンテンツ (手前) */}
      {/* ★ 3. 'absolute' で画像の上に重ねる */}
      <div className="
        absolute inset-0      /* 親(section)いっぱいに広がる */
        z-10                  /* 画像(z-0)より手前に配置 */
        flex items-center     /* 中身(h2やp)を上下中央に */
        pl-6 md:pl-12         /* 左側の余白 */
      ">
        <div> {/* テキストをまとめるdiv */}
          <h2 className="
            text-[10rem] xl:text-[14rem]
            font-bold text-left
            text-transparent bg-clip-text
            bg-[repeating-linear-gradient(135deg,#ffffff,#ffffff_3px,transparent_3px,transparent_8px)]
            leading-none
          ">
            TOHRU
            <br />
            DJUNAEDI
            <br />
            SATO
          </h2>
          <p className="text-right text-gray-500 max-w-2xl mt-8">
            Computer Science Student | Developer | Creator
          </p>
        </div>
      </div>
    </section>
  );
}