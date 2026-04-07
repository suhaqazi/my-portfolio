"use client";

import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        console.error("Web3Forms error:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#2B124C]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#DFB6B2]">
          Get In Touch
        </h2>
        <p className="text-[#FBE4D8]/60 text-center mb-12">
          Looking for internship opportunities. Reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <div className="p-6 rounded-xl bg-[#522B5B] border border-[#854F6C]">
            <h3 className="text-xl font-semibold mb-4 text-[#DFB6B2]">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[#FBE4D8]/60">Email</p>
                <a
                  href="mailto:suha.m.qazi@gmail.com"
                  className="text-[#DFB6B2] hover:text-[#FBE4D8] transition"
                >
                  suha.m.qazi@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-[#FBE4D8]/60">GitHub</p>
                <a
                  href="https://github.com/suhaqazi"
                  target="_blank"
                  className="text-[#DFB6B2] hover:text-[#FBE4D8] transition"
                >
                  github.com/suhaqazi
                </a>
              </div>
              <div>
                <p className="text-sm text-[#FBE4D8]/60">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/suha-qazi"
                  target="_blank"
                  className="text-[#DFB6B2] hover:text-[#FBE4D8] transition"
                >
                  linkedin.com/in/suha-qazi
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-xl bg-[#522B5B] border border-[#854F6C] space-y-4"
          >
            <div>
              <label className="block text-sm font-medium mb-1 text-[#FBE4D8]/80">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-[#190019]/50 border border-[#854F6C] focus:border-[#DFB6B2] focus:ring-1 focus:ring-[#DFB6B2] text-[#FBE4D8] placeholder-[#FBE4D8]/40 transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-[#FBE4D8]/80">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-[#190019]/50 border border-[#854F6C] focus:border-[#DFB6B2] focus:ring-1 focus:ring-[#DFB6B2] text-[#FBE4D8] placeholder-[#FBE4D8]/40 transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-[#FBE4D8]/80">
                Message
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-[#190019]/50 border border-[#854F6C] focus:border-[#DFB6B2] focus:ring-1 focus:ring-[#DFB6B2] text-[#FBE4D8] placeholder-[#FBE4D8]/40 transition"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-4 py-2 rounded-lg bg-[#DFB6B2] text-[#190019] font-medium hover:bg-[#854F6C] hover:text-[#FBE4D8] disabled:opacity-50 transition"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-green-400 text-sm text-center">
                ✓ Message sent! I'll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                ✗ Failed to send. Try emailing directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
