import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-[#fafafa] px-5 py-20">
      <div className="mx-auto max-w-4xl">
        
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Get In Touch
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Let's work together.
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-500 md:text-lg">
            Have a project, idea, or opportunity in mind? Feel free to
            reach out. I'd love to hear from you.
          </p>
        </div>

        {/* Contact Card */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
          
          {submitted ? (
            <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
              
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <Send size={26} className="text-gray-700" />
              </div>

              <h2 className="text-2xl font-bold text-gray-900">
                Thanks for reaching out!
              </h2>

              <p className="mt-3 max-w-md text-gray-500">
                Thanks, {form.name}. Your message has been received.
                I'll get back to you soon.
              </p>

            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Name
                </label>

                <div className="relative">
                  <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2">
                    <MapPin size={19} className="text-gray-400" />
                  </div>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="h-12 w-full border-0 border-b border-gray-300 bg-transparent pl-8 pr-3 text-base outline-none transition-colors placeholder:text-gray-400 focus:border-black"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Email
                </label>

                <div className="relative">
                  <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2">
                    <Mail size={19} className="text-gray-400" />
                  </div>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="h-12 w-full border-0 border-b border-gray-300 bg-transparent pl-8 pr-3 text-base outline-none transition-colors placeholder:text-gray-400 focus:border-black"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-base leading-6 outline-none transition-colors placeholder:text-gray-400 focus:border-black"
                />
              </div>

              {/* Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black px-7 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg md:w-auto"
                >
                  Submit Message
                </button>
              </div>

            </form>
          )}
        </div>

        {/* Bottom contact info */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Prefer email?
          </p>

          <a
            href="mailto:hello@bilal.com"
            className="mt-1 inline-block text-sm font-medium text-gray-900 underline underline-offset-4 transition-colors hover:text-gray-500"
          >
            hello@bilal.com
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;