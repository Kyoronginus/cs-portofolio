// components/sections/ProjectsSection.tsx

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="
        min-h-screen w-full                 // 画面いっぱいの高さと幅
        flex                                // Flexboxコンテナとして機能
        bg-gray-100 text-black              // 背景と文字色
      "
    >
      {/* 1. 左側のサイドバー (黄色の領域) */}
      <div className="
        w-20 lg:w-32                      // 幅を固定 (スマホでは狭く、PCでは広く)
        bg-yellow-400                     // 背景色を黄色に
        flex-shrink-0                     // メインコンテンツが幅を広げても縮まないように
        relative overflow-hidden          // 文字のクリップと配置のため
      ">
        {/* "PORTOFOLIO" の文字を上半分だけ表示 */}
        <h2 className="
          absolute -left-1/2 top-1/2       // 親要素のど真ん中に配置
          text-2xl
          rotate-90                       // 90度回転
          whitespace-nowrap               // 改行させない
        ">
          PORTOFOLIO
        </h2>
      </div>

      {/* 2. 右側のメインコンテンツ領域 */}
      <div className="
        flex-grow                         // 左サイドバー以外で残った幅を全て使う
        overflow-hidden                   // 横スクロールするカルーセルがはみ出さないように
        py-20 md:py-32                    // 上下のパディング
      ">
        {/* "PROJECTS" のタイトル */}
        <h2 className="
          text-5xl md:text-6xl font-bold text-left mb-16
          px-6 md:px-12                     // 左右のパディングでフチから離す
          text-transparent bg-clip-text
          bg-[repeating-linear-gradient(135deg,#333333_0px,#333333_2px,transparent_2px,transparent_4px)]
        ">
          PROJECTS
        </h2>

        {/* Dummy project card - will be replaced with carousel in Step 2 */}
        {/* ここはcontainerやmax-wを使わず、画面いっぱいに広がるようにする */}
        <div className="w-full px-6 md:px-12"> {/* ここも左右のパディングだけ確保 */}
          <div className="bg-gray-200 rounded-lg p-4 border border-gray-300"> {/* 背景色を少し変えた */}
            <div className="aspect-video bg-gray-300 rounded-lg mb-6 flex items-center justify-center">
              <p className="text-gray-600 text-xl">3D Model Placeholder</p>
            </div>

            <h3 className="text-3xl font-bold mb-4">PROJECT 1</h3>
            <p className="text-gray-700 mb-6">
              This is a placeholder for your first project. In Step 2, we'll add a carousel
              to slide between multiple projects horizontally.
            </p>

            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              VISIT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}