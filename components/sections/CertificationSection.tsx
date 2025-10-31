// components/sections/CertificationSection.tsx
export default function CertificationSection() {
  return (
    <section
      id="certification"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-[10rem] xl:text-[10rem]
              font-bold text-center
              text-transparent bg-clip-text
              bg-[repeating-linear-gradient(135deg,#ffffff,#ffffff_3px,transparent_3px,transparent_8px)]">
          CERTIFICATIONS
        </h2>



        <div className="max-w-4xl mx-auto">
          <div className=" rounded-lg p-8 ">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-bold">ICORIS 2025 Author and Presenter</h3>
              <span className="text-gray-400">2025</span>
            </div>
            <p className="text-xl text-gray-300 mb-2">The 7th International Conference on Cybernetics and Intelligent Systems</p>
            <p className="text-gray-400">
              Developed research and authored a paper titled: "Artificial Intelligence Synthetic Image Detection Using Ensemble Convolutional Neural Network Model." Paper was accepted for presentation and publication. 
            </p>
          </div>
          {/* Certification Item 0 - Add more as needed */}
          <div className=" rounded-lg p-8 ">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-bold">Pesta Data Nasional FINALIST</h3>
              <span className="text-gray-400">2024</span>
            </div>
            <p className="text-xl text-gray-300 mb-2">Data Science Competition featuring Time Series Forecasting</p>
            <p className="text-gray-400">
              Finalist in a competitive Data Science competition. Developed and implemented a time-series forecasting model to solve a real-world problem.
            </p>
          </div>

          {/* Certification Item 1 */}
          <div className=" rounded-lg p-8 ">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-bold">JLPT N1</h3>
              <span className="text-gray-400">2024</span>
            </div>
            <p className="text-xl text-gray-300 mb-2">Japanese Language Proficiency Test</p>
            <p className="text-gray-400">
              Passed the highest level exam on the Japanese Language Proficiency Test with full score.
            </p>
          </div>

          {/* Certification Item 2 - Add more as needed */}
          <div className=" rounded-lg p-8 ">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-bold">TOEIC L&R 920</h3>
              <span className="text-gray-400">2021</span>
            </div>
            <p className="text-xl text-gray-300 mb-2">the Test of English for International Communication</p>
            <p className="text-gray-400">
              Achieved the score of 485 on listening section with 94% percentile, and the score of 435 on reading section with 92% percentile among all the examinees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
