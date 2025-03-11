import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "Typescript",
    "TailwindCSS",
    "HTML",
    "CSS",
    "GIT Version Control",
    "Nuxt",
  ];

  const uiuxSkill = ["Figma", "Interactive Design", "Responsive Design"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#4A628A] text-center">
            About Me
          </h2>
          <div className="text-[#4A628A] mb-6 font-semibold text-lg text-center flex flex-col gap-4">
            <div>
              Saya seorang Frontend Web Developer dengan pengalaman dalam
              membangun aplikasi berbasis JavaScript, Vue, dan React, terutama
              untuk proyek pemerintahan. Saya memiliki keahlian dalam membangun
              single-page applications (SPA) serta mengembangkan dan merombak
              sistem berbasis web untuk meningkatkan efisiensi dan user
              experience. Selain itu, saya juga berpengalaman dalam integrasi
              API untuk menghubungkan frontend dengan berbagai layanan backend,
              termasuk RESTful API dan GraphQL.
            </div>
            <div>
              Saya pernah mengembangkan ECOBMS (Economic Boarding Management
              System) untuk pengelolaan aset dan logistik di pesantren Gorontalo
              serta berkontribusi dalam proyek seperti ELHKPN, website SDP, dan
              website Lelang DJKN. Selain itu, saya juga mengerjakan proyek
              website profil company Pantonpile dengan model single-page
              application (SPA), yang dirancang untuk menampilkan informasi
              perusahaan dengan tampilan yang modern dan responsif.
            </div>
            <div>
              Saat ini, saya sedang menempuh studi S2, dengan fokus penelitian
              di bidang DevOps dan autonomous driving (level 2 - partial
              automation), khususnya dalam prediksi perilaku pengambilalihan
              pengemudi menggunakan data multimodal. Saya juga sedang melakukan
              systematic literature review (SLR) tentang DevOps, dengan fokus
              pada otomatisasi dalam Continuous Integration dan Continuous
              Delivery (CI/CD).
            </div>
          </div>
          <div className="rounded-xl p-8 border-[#4A628A]/50 border hover:-translate-y-1 transition-all mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-[#4A628A]">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-700 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-[#4A628A]">UI/UX</h3>
                <div className="flex flex-wrap gap-2">
                  {uiuxSkill.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-700 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-[#4A628A] border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[#4A628A]">
                Pendidikan
              </h3>
              <ul className="list-disc list-inside text-[#4A628A] space-y-2">
                <li>
                  <strong>Universitas Telkom</strong> - Sarjana Rekayasa
                  Perangkat Lunak (2019 - 2023)
                </li>
                <li>
                  <strong>Universitas Telkom</strong> - Magister Informatika
                  (2024 - Sekarang)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-[#4A628A] border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[#4A628A] ">
                Pengalaman Pekerjaan
              </h3>
              <div className="space-y-4 text-[#4A628A]">
                <div>
                  <h4 className="font-semibold">
                    Frontend Web Developer di Torche Indonesia (2023 - Sekarang)
                  </h4>
                  <p>
                    Saya bertanggung jawab merancang dan mengembangkan antarmuka
                    pengguna dengan JavaScript, Vue.js, React, TypeScript, dan
                    TailwindCSS. Saya bekerja sama dengan tim backend untuk
                    integrasi API serta tim UI/UX untuk memastikan pengalaman
                    pengguna yang optimal. Selain itu, Anda menerapkan CI/CD,
                    memastikan keamanan aplikasi sesuai regulasi, serta
                    melakukan debugging dan optimasi
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    UI Designer di PT Batulicin Enamsembilan (Juni 2022 -
                    Agustus 2022)
                  </h4>
                  <p>
                    Bertanggung jawab atas desain dan rebuild aplikasi mobile
                    HIPMINet
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Freelance Web Developer (Oktober 2024 - Januari 2025)
                  </h4>
                  <p>
                    Membangun website profil perusahaan menggunakan model SPA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
