// 各プロジェクトの型を定義
export type Project = {
  id: number;
  title: string;
  videoId: string;
  mascotVideo: {
    src: string;
    width: number;
    height: number;
    className: string;
  };
  mascotTitle: {
    src: string;
    width: number;
    height: number;
    className: string;
  };
  description: string;
  techstacks: string[];
  modelComponentName: string; // 3Dモデルのコンポーネント名を文字列で指定
  liveSiteUrl: string;
};

// プロジェクトの全データ
export const projectsData: Project[] = [
  // --- プロジェクト 1 (UCHINOKO KAWAII) ---
  {
    id: 1,
    title: "UCHINOKO KAWAII",
    videoId: "XtBh7hxNGUM",
    mascotVideo: {
      src: "/images/github_cat.png",
      width: 500,
      height: 500,
      className: "absolute -z-10 -mt-100 top-0 right-0 animate-slide-horizontal pointer-events-none"
    },
    mascotTitle: {
      src: "/images/venna_chibi.png",
      width: 300,
      height: 300,
      className: "z-0 mr-10 animate-rotate-stepped pointer-events-none"
    },
    description: "This project is an interactive website built to showcase the charm of my Original Character, Venna. It combines the retro aesthetic of 2D pixel art with modern 3D graphics and physics to create immersive visuals. All assets in this project were created by myself. Three.js is the core of this project, demonstrates a deep understanding of scene setup, lighting, shadows, materials, and managing 3D objects. Additional technologies such as draco-compression extraction and the usage of .webp to shorten the page loading time are applied.",
    techstacks: ["Three.js", "Cannon.es", "React Three Fiber", "HTML", "Blender", "Photoshop"],
    modelComponentName: "InteractiveModel",
    liveSiteUrl: "https://uchinokokawaii.netlify.app/",
  },

  {
    id: 2,
    title: "Fibonacci Detection",
    videoId: "V0SFSW5l_6s", // プレースホルダー
    mascotVideo: { // このプロジェクトには不要なら null にしてもOK
      src: "/images/github_cat.png",
      width: 500,
      height: 500,
      className: "absolute -z-10 -mt-100 top-0 right-0 animate-slide-horizontal pointer-events-none"
    },
    mascotTitle: {
      src: "/images/venna_chibi.png",
      width: 300,
      height: 300,
      className: "z-0 mr-5 animate-rotate-stepped pointer-events-none"
    },
    description: "A web application that analyzes images to detect and visualize Fibonacci spirals in compositions. The app identifies key points in an image using contour detection by OpenCV, clusters them, and fits a logarithmic spiral that approximates the golden ratio. ",
    techstacks: ["Rust Axum", "Python Flask", "GCP", "Docker", "Monte Carlo analysis model"],
    modelComponentName: "FibonacciModel",
    liveSiteUrl: "https://fibonacci-spiral-detecti-bf743.web.app/",
  },
  // ... 他のプロジェクトもここに追加
];