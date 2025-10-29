// components/sections/HeroSection.tsx
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-black text-white"
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="
        text-6xl md:text-8xl font-bold mb-6

        ">
          TOHRU DJUNAEDI SATO
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
          Computer Science Student | Developer | Creator
        </p>
      </div>
    </section>
  );
}
