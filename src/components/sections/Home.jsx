import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 ">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#4A628A] loading-right">
            Hai, Saya Muhammad Aga Ananda
          </h1>
          <p className="text-[#4A628A] font-semibold text-lg mb-8 max-w-4xl mx-auto">
            Saya Seorang Frontend web developer dengan pengalaman dalam
            membangun dan mengelola aplikasi web interaktif berbasis JavaScript
            menggunakan framework seperti Vue dan React. Mahir dalam
            mengimplementasikan desain antarmuka pengguna yang responsif dan
            ramah pengguna, berfokus pada optimalisasi performa aplikasi, serta
            mengintegrasikan API untuk memastikan kelancaran komunikasi antara
            frontend dan backend
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#project"
              className="bg-[#7AB2D3] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              Lihat Project
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-[#4A628A] py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Hubungi
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
