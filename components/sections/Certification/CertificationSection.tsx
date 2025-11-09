// components/sections/CertificationSection.tsx
import { certificationData, CertificationProps } from "./CertificationProps";

function CertificationItem({ certification, index }: { certification: CertificationProps, index: number }) {
  return (
    <div className="rounded-lg p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h3 className="text-2xl font-bold">{certification.title}</h3>
        <span className="text-gray-400">{certification.date}</span>
      </div>
      <p className="text-xl text-gray-300 mb-2">{certification.subtitle}</p>
      <p className="text-gray-400">{certification.description}</p>
    </div>
  )
}



export default function CertificationSection() {
  return (
    <section
      id="certification"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-[7rem] xl:text-[7rem]
              font-bold text-center
              text-transparent bg-clip-text
              bg-[repeating-linear-gradient(135deg,#ffffff,#ffffff_3px,transparent_3px,transparent_8px)]">
          CERTIFICATIONS
        </h2>

        <div className="max-w-4xl mx-auto">
          {certificationData.map((cert, index) => (
            <CertificationItem key = {cert.id} certification={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
