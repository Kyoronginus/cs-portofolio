import YouTubeFacade from "../YoutubeFacade";
import InteractiveModel from "../3d/InteractiveModel";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="
        min-h-screen w-full                 
        flex                                
        text-black
        -mt-24             // Negative margin to pull up against hero section
      "
    >
      {/* 1. 左側のサイドバー (黄色の領域) */}
      <div className="
        w-20 lg:w-32                      // 幅を固定 (スマホでは狭く、PCでは広く)
        bg-[#fdfd1f]                 // 背景色を黄色に
        flex-shrink-0                     // メインコンテンツが幅を広げても縮まないように
        relative overflow-hidden          // 文字のクリップと配置のため
      ">
        {/* "PORTOFOLIO" の文字を上半分だけ表示 */}
        <h2 className="
          text-[12rem] font-bold text-[#bfbf17]
          transform -translate-x-1/5
          rotate-90                       
          whitespace-nowrap             
        ">
          PORTFOLIO
        </h2>
      </div>

      {/* 2. 右側のメインコンテンツ領域 */}
      <div className="
        flex-grow                         // 左サイドバー以外で残った幅を全て使う
        overflow-hidden                   // 横スクロールするカルーセルがはみ出さないように
        pb-10                    // 上下のパディング
      ">
        {/* "PROJECTS" のタイトル */}
        <h2 className="
          text-[14rem] font-bold text-left mb-10
          px-6 md:px-12                     // 左右のパディングでフチから離す
          text-transparent bg-clip-text
          bg-[repeating-linear-gradient(135deg,#808080_0px,#808080_3px,transparent_3px,transparent_12px)]
          -mt-4
        ">
          PROJECTS
        </h2>




        {/* Dummy project card - will be replaced with carousel in Step 2 */}
        {/* ラフ画のデザインを適用したプロジェクトカード
          このブロックを <ProjectsSection> のメインコンテンツ領域に配置します。
        */}
        <div className="w-full p-6">
          {/* ★これが「透明なコンテナ」です
          - bg-black/30: 背景を30%の黒（半透明）に
          - backdrop-blur-md: 背景（テクスチャ画像）をぼかす (すりガラス効果)
          - border border-white/20: 20%の白いボーダーで輪郭を定義
        */}
          <div className="
          p-0 md:p-8
          "
          >
            {/* 2c. VIDEO PREVIEW (プレースホルダー) */}
            <div className="aspect-video bg-black/50 rounded-lg mb-8 overflow-hidden">
              <YouTubeFacade
                videoId="XtBh7hxNGUM" // ★ 2. videoId を渡す
                title="UCHINOKO KAWAII"  // ★ 3. title を渡す
              ></YouTubeFacade>
            </div>
            {/* 2. メインコンテンツ (Gridレイアウト)
              - md:grid-cols-3: PCでは3カラムのグリッド
            */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* 2a. タイトルと説明 (左側2カラム分) */}
              <div className="md:col-span-2">
                <h3 className="text-9xl font-bold mb-4 text-[#000000]">
                  UCHINOKO KAWAII
                </h3>
                <p className="text-3xl text-gray-900 mb-8 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nobis ratione labore qui! Ea necessitatibus expedita sunt dolorum natus sit deleniti obcaecati tempore placeat, modi alias corrupti. Nihil, provident accusantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla veritatis illo dignissimos, eum sit eos voluptatem ullam tempore quia dolorum incidunt nemo provident tempora. Quae doloribus debitis facilis impedit reiciendis.
                </p>

                {/* Techstacks */}
                <div>
                  <h4 className="text-2xl font-semibold mb-4 text-black-200">Techstacks</h4>
                  <div className="flex flex-wrap gap-4">
                    {/* (ここは将来的にアイコンやロゴに置き換えます) */}
                    <div className="bg-[#fdfd1f]/90 px-4 py-2 rounded-lg text-sm font-mono">
                      Three.js
                    </div>
                    <div className="bg-[#fdfd1f]/90 px-4 py-2 rounded-lg text-sm font-mono">
                      Cannon.es
                    </div>
                    <div className="bg-gray-700/50 px-4 py-2 rounded-lg text-sm font-mono">
                      React Three Fiber
                    </div>
                    <div className="bg-gray-700/50 px-4 py-2 rounded-lg text-sm font-mono">
                      HTML
                    </div>
                    <div className="bg-gray-700/50 px-4 py-2 rounded-lg text-sm font-mono">
                      Blender
                    </div>
                    <div className="bg-gray-700/50 px-4 py-2 rounded-lg text-sm font-mono">
                      Photoshop
                    </div>
                  </div>
                </div>
              </div>

              {/* 3Dモデルのコンテナ */}
              <div className="w-full aspect-square rounded-lg overflow-hidden relative"> {/* ★ overflow-hidden を追加 */}

                {/* ★ 2. プレースホルダーをコンポーネントに差し替え */}
                <InteractiveModel />

                {/* ラフ画の「傾いた赤い枠」を表現 */}
                {/* ★ 3. pointer-events-none を追加 */}
                <div className="absolute inset-3 rounded-lg rotate-6 pointer-events-none"></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">
              </p>


            </div>

            {/* VISIT ボタン */}
            <div className="mt-10">

              <a href="https://uchinokokawaii.netlify.app/" target="_blank" rel="noopener noreferrer">
                <button className="
              
              bg-yellow-400 text-black px-10 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">
                  VISIT
                </button>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
