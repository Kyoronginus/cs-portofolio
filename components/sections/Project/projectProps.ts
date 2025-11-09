import type { ComponentType } from "react";
import { Model as chibiModel } from "../../3d/jsxModels/chibi";
import { Model as fibonacciModel} from "../../3d/jsxModels/fibonacci";
import { Model as mimuchiModel } from "../../3d/jsxModels/mimuchi";



export type ProjectProps = {
    id: number;
    title: string;
    videoId: string;
    mascotVideo: {
        src: string;
        width: number;
        height: number;
        className: string;
    };
    mascotTitle?: {
        src: string;
        width: number;
        height: number;
        className: string;
    };
    description: string;
    techstacks: string[];
    // modelComponentName: string; //not used anymore since it's changed to pass the componenttype instead
    ModelComponent: ComponentType | null;
    liveSiteUrl: string;
};

export const projectsData: ProjectProps[] = [
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
        techstacks: ["Three.js", "Cannon.es", "React Three Fiber", "HTML", "Netlify", "Blender", "Photoshop"],
        // modelComponentName: "InteractiveModel",
        ModelComponent : chibiModel,  
        liveSiteUrl: "https://uchinokokawaii.netlify.app/",
    },

    {
        id: 2,
        title: "Fibonacci Spiral Detection",
        videoId: "V0SFSW5l_6s",
        mascotVideo: {
            src: "/images/github_cat.png",
            width: 500,
            height: 500,
            className: "absolute -z-10 -mt-100 top-0 right-0 animate-slide-horizontal pointer-events-none"
        },
        // mascotTitle: {
        //     src: "/images/venna_chibi.png",
        //     width: 300,
        //     height: 300,
        //     className: "z-0 mr-5 animate-rotate-stepped pointer-events-none"
        // },
        description: "A web application that analyzes images to detect and visualize Fibonacci spirals in compositions. The app identifies key points in an image using contour detection by OpenCV, clusters them, and fits a logarithmic spiral that approximates the golden ratio. ",
        techstacks: ["Rust Axum", "Python Flask", "GCP", "Docker", "Monte Carlo analysis model"],
        // modelComponentName: "FibonacciModel",
        ModelComponent : fibonacciModel,
        liveSiteUrl: "https://fibonacci-spiral-detecti-bf743.web.app/",
    },

    {
        id: 3,
        title: "ColorAnalyzer",
        videoId: "3C9SHhFAqSw",
        mascotVideo: {
            src: "/images/github_cat.png",
            width: 500,
            height: 500,
            className: "absolute -z-10 -mt-100 top-0 right-0 animate-slide-horizontal pointer-events-none"
        },
        mascotTitle: {
            src: "/images/venna_chibi_akuma.png",
            width: 300,
            height: 300,
            className: "z-0 mr-5 animate-rotate-stepped pointer-events-none"
        },
        description: "A web application built to optimize the color palettes within my illustration workflow. This tool provides visual data analysis of colors from any uploaded image, allowing me, as a part-time illustrator, to generate harmonious color schemes and deliver higher-quality, visually consistent artwork to clients.",
        techstacks: ["Python Flask", "GCP", "Docker", "Three.js", "PyQt"],
        // modelComponentName: "MimuchiModel",
        ModelComponent : mimuchiModel,
        liveSiteUrl: "https://coloranalyzer-648561351861.us-central1.run.app/",
    },

    {
        id: 4,
        title: "SchedulingApp",
        videoId: "hpGjd8psILc",
        mascotVideo: {
            src: "/images/github_cat.png",
            width: 500,
            height: 500,
            className: "absolute -z-10 -mt-100 top-0 right-0 animate-slide-horizontal pointer-events-none"
        },
        // mascotTitle: {
        //     src: "/images/venna_chibi_akuma.png",
        //     width: 300,
        //     height: 300,
        //     className: "z-0 mr-5 animate-rotate-stepped pointer-events-none"
        // },
        description: "SchedulingApp is a Collaborative Calendar platform designed to streamline team schedule management by leveraging advanced AWS serverless architecture. Built on AWS Amplify, the application integrates core AWS services to deliver a seamless, efficient, and real-time scheduling experience. Key features include Real-Time Schedule Synchronization via AWS AppSync and a GraphQL API, ensuring instant updates across all team members. Integrated Authentication managed by Amazon Cognito provides secure user registration and identity management. All scheduling data is stored in the highly scalable, non-relational Amazon DynamoDB, while user assets and multimedia files are managed by Static Storage in Amazon S3. Business Logic is handled by serverless AWS Lambda functions, which act as linked providers for complex tasks and notifications. Finally, all system activities are logged and monitored in Amazon CloudWatch, enabling efficient debugging and operational health checks.",
        techstacks: ["Flutter", "AWS", "AWS S3", "AWS DynamoDB",  "AWS Cognito", "AWS Amplify", "GraphQL",],
        // modelComponentName: "MimuchiModel",
        ModelComponent : mimuchiModel,
        liveSiteUrl: "https://github.com/Kyoronginus/schedulingapp",
    },
];