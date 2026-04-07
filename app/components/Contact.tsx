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
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
          Looking for internship opportunities. Reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href="mailto:suha.m.qazi@gmail.com"
                  className="text-blue-600 dark:text-blue-400"
                >
                  suha.m.qazi@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <a
                  href="https://github.com/suhaqazi"
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400"
                >
                  github.com/suhaqazi
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/suha-qazi"
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400"
                >
                  linkedin.com/in/suha-qazi
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-green-600 text-sm text-center">
                ✓ Message sent! I'll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm text-center">
                ✗ Failed to send. Try emailing directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
