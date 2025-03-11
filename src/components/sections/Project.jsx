import { RevealOnScroll } from "../RevealOnScroll";

export const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#4A628A] text-center">
            Project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-[#4A628A] hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 text-[#4A628A]">ELHKPN</h3>
              <p className="text-gray-400 mb-4 font-semibold">
                Mei 2023 - Februari 2024
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Primevue",
                  "Vue",
                  "TailwindCSS",
                  "Typescript",
                  "API Integration",
                  "GIT",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-700 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Projects{" "}
                </a>
              </div> */}
            </div>

            <div className="p-6 rounded-xl border border-[#4A628A] hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 text-[#4A628A]">
                Sistem Database Permasyarakatan (SDP)
              </h3>
              <p className="text-gray-400 mb-4 font-semibold">
                Maret 2024 - Agustus 2024
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Vue",
                  "TailwindCSS",
                  "Bug Fixing",
                  "API Integration",
                  "Material UI",
                  "GIT",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Projects{" "}
                </a>
              </div> */}
            </div>

            <div className="p-6 rounded-xl border border-[#4A628A] hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 text-[#4A628A]">
                Portal Lelang DJKN
              </h3>
              <p className="text-gray-400 mb-4 font-semibold">
                Agustus 2024 - Sekarang
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "TailwindCSS",
                  "Primereact",
                  "API Integration",
                  "GIT",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Projects{" "}
                </a>
              </div> */}
            </div>

            <div className="p-6 rounded-xl border border-[#4A628A] hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 text-[#4A628A]">
                Pantonpile
              </h3>
              <p className="text-gray-400 mb-4 font-semibold">
                OKtober 2024 - Januari 2025
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Vue", "TailwindCSS", "Primevue", "GIT"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Projects{" "}
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
