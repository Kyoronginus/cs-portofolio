import type { ComponentType } from "react";

export type CertificationProps = {
    id: number;
    title: String;
    date: String;
    subtitle: String;
    description: String;
}


export const certificationData: CertificationProps[] = [
    {
        id: 1,
        title: "ICORIS 2025 Author and Presenter",
        date: "2025",
        subtitle: "The 7th International Conference on Cybernetics and Intelligent Systems",
        description: "Developed research and authored a paper titled: \"Artificial Intelligence Synthetic Image Detection Using Ensemble Convolutional Neural Network Model.\" Paper was accepted for presentation and publication."
    },
    {
        id: 2,
        title: "Pesta Data Nasional FINALIST",
        date: "2024",
        subtitle: "Data Science Competition featuring Time Series Forecasting",
        description: "Finalist in a competitive Data Science competition. Developed and implemented a time-series forecasting model to solve a real-world problem."
    },
    {
        id: 3,
        title: "JLPT N1",
        date: "2024",
        subtitle: "Japanese Language Proficiency Test",
        description: "Passed the highest level exam on the Japanese Language Proficiency Test with full score."
    },
    {
        id: 4,
        title: "TOEIC L&R 920",
        date: "2021",
        subtitle: "the Test of English for International Communication",
        description: "Achieved the score of 485 on listening section with 94% percentile, and the score of 435 on reading section with 92% percentile among all the examinees."
    }
]

