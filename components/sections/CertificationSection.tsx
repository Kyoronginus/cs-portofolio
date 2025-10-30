// components/sections/CertificationSection.tsx
export default function CertificationSection() {
  return (
    <section
      id="certification"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          Certification
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Certification Item 1 */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-bold">Bina Nusantara University</h3>
              <span className="text-gray-400">2023 - 2027</span>
            </div>
            <p className="text-xl text-gray-300 mb-2">Bachelor of Computer Science</p>
            <p className="text-gray-400">
              Current GPA : 3.96
            </p>
          </div>

          {/* Certification Item 2 - Add more as needed */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-bold">SMAK 1 BPK Penabur Bandung</h3>
              <span className="text-gray-400">2020 - 2023</span>
            </div>
            <p className="text-xl text-gray-300 mb-2">Life Skill Program Course</p>
            <p className="text-gray-400">
              Focused on Graphic Design and Informatics in majoring LSP diploma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
