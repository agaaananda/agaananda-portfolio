import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Something Went Wrong, Please Try Again."));
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 text-[#4A628A] text-center">
            Hubungi Saya
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                required
                placeholder="Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-white/5 border border-[#4A628A] rounded px-4 py-3 text-black/50 transition focus:outline-none focus:border-blue-900 focus:bg-blue-500/10"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={formData.email}
                name="email"
                required
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white/5 border border-[#4A628A] rounded px-4 py-3 text-black/50 transition focus:outline-none focus:border-blue-900 focus:bg-blue-500/10"
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                required
                placeholder="Your Message"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white/5 border border-[#4A628A] rounded px-4 py-3 text-black/50 transition focus:outline-none focus:border-blue-900 focus:bg-blue-500/10"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#7AB2D3] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(50,130,246,0.4)"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
