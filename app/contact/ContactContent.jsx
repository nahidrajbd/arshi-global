'use client';

import { useState } from 'react';

const services = [
  'Study Abroad Guidance',
  'China Treatment Package',
  'Student Visa Application',
  'Work Visa & Mobility',
  'Immigration Support',
  'Career Counseling'
];

function Logo({ white = false }) {
  return (
    <a href="/" className="flex items-center" aria-label="Arshi Global Care home">
      <img
        src="/logo.svg"
        alt="Arshi Global Care"
        className="h-10 w-auto"
        style={white ? { filter: 'brightness(0) invert(1)' } : {}}
      />
    </a>
  );
}

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function ContactContent() {
  const [menu, setMenu] = useState(false);

  return (
    <main className="min-h-screen bg-white text-arshi-ink">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-stone-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            <a href="/" className="hover:text-arshi-red">Home</a>
            <a href="/#services" className="hover:text-arshi-red">Services</a>
            <a href="/#process" className="hover:text-arshi-red">How it works</a>
            <a href="/#destinations" className="hover:text-arshi-red">Destinations</a>
            <a href="/contact" className="text-arshi-red font-bold">Contact Us</a>
            <a href="#consultation-form" className="rounded-lg bg-arshi-red px-5 py-3 text-white transition hover:bg-arshi-wine">
              Free Consultation
            </a>
          </nav>
          <button
            className="rounded-lg border border-stone-200 p-2 lg:hidden"
            onClick={() => setMenu(!menu)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
        {menu && (
          <nav className="border-t bg-white px-5 pb-5 pt-2 lg:hidden">
            <div className="grid gap-3 text-sm font-semibold">
              <a href="/" onClick={() => setMenu(false)}>Home</a>
              <a href="/#services" onClick={() => setMenu(false)}>Services</a>
              <a href="/#process" onClick={() => setMenu(false)}>How it works</a>
              <a href="/#destinations" onClick={() => setMenu(false)}>Destinations</a>
              <a href="/contact" onClick={() => setMenu(false)} className="text-arshi-red">Contact Us</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Header */}
      <section className="hero-glow relative overflow-hidden bg-[#f0fafc] py-16 lg:py-20">
        <div className="grid-dots absolute left-0 top-0 h-full w-1/3 opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#046f81]/15 bg-white px-4 py-2 text-xs font-bold text-arshi-red">
            <span className="h-2 w-2 rounded-full bg-arshi-red" />
            WE ARE HERE TO HELP
          </div>
          <h1 className="serif text-4xl font-bold leading-tight text-arshi-ink sm:text-5xl lg:text-6xl">
            Get in touch with <em className="text-arshi-red not-italic">Arshi Global Care</em>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#2a5560]">
            Whether you are planning to study abroad, require coordinated medical treatment in China, or need visa and immigration support, our expert team is ready to guide you.
          </p>
        </div>
      </section>

      {/* Contact Cards & Form Grid */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          
          {/* Left Column: Direct Contact Information */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-bold tracking-[.18em] text-arshi-red">DIRECT CONTACT</p>
              <h2 className="serif mt-2 text-3xl font-bold text-arshi-ink sm:text-4xl">
                Reach out directly
              </h2>
              <p className="mt-3 text-[#2a5a65]">
                We welcome phone calls, emails, and visits to our office in Rajshahi.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {/* Phone Card */}
              <div className="rounded-xl border border-stone-200 bg-white p-6 transition hover:border-arshi-red hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-[#f0fafc] text-2xl text-arshi-red">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-arshi-ink">Phone & WhatsApp</h3>
                    <a href="tel:+8801818758882" className="mt-1 block font-semibold text-arshi-red hover:underline">
                      +880 1818-758882
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="rounded-xl border border-stone-200 bg-white p-6 transition hover:border-arshi-red hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-[#f0fafc] text-2xl text-arshi-red">
                    ✉
                  </div>
                  <div>
                    <h3 className="font-bold text-arshi-ink">Email Addresses</h3>
                    <a href="mailto:info@arshiglobalcare.com" className="mt-1 block text-sm font-medium text-[#2a5a65] hover:text-arshi-red">
                      info@arshiglobalcare.com
                    </a>
                    <a href="mailto:arshiglobalcare@gmail.com" className="block text-sm font-medium text-[#2a5a65] hover:text-arshi-red">
                      arshiglobalcare@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="rounded-xl border border-stone-200 bg-white p-6 transition hover:border-arshi-red hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[#f0fafc] text-2xl text-arshi-red">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-arshi-ink">Office Location</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#2a5a65]">
                      Rajshahi Chamber of Commerce Building,<br />
                      Alokar More, Rajshahi, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="rounded-xl border border-stone-200 bg-white p-6 transition hover:border-arshi-red hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-[#f0fafc] text-2xl text-arshi-red">
                    ⏰
                  </div>
                  <div>
                    <h3 className="font-bold text-arshi-ink">Office Hours</h3>
                    <p className="mt-1 text-sm text-[#2a5a65]">Saturday – Thursday: 9:00 AM – 7:00 PM</p>
                    <p className="text-xs text-stone-500">Friday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-xl bg-[#0d2d35] p-6 text-white">
              <h3 className="font-bold text-lg">Connect with us on Social Media</h3>
              <p className="mt-1 text-xs text-[#a8d8e2]">Follow our official pages for updates, success stories & announcements.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://www.facebook.com/arshiglobalcare" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold hover:bg-white hover:text-arshi-ink transition">
                  Facebook
                </a>
                <a href="https://www.youtube.com/@ArshiGlobalCare" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold hover:bg-white hover:text-arshi-ink transition">
                  YouTube
                </a>
                <a href="https://www.linkedin.com/company/arshi-global-care" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold hover:bg-white hover:text-arshi-ink transition">
                  LinkedIn
                </a>
                <a href="https://www.tiktok.com/@arshiglobalcare" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold hover:bg-white hover:text-arshi-ink transition">
                  TikTok
                </a>
                <a href="https://x.com/arshiglobalcare" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold hover:bg-white hover:text-arshi-ink transition">
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div id="consultation-form" className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xl shadow-[#046f81]/5 sm:p-10">
            <p className="text-sm font-bold tracking-[.18em] text-arshi-red">ONLINE INQUIRY</p>
            <h2 className="serif mt-2 text-3xl font-bold text-arshi-ink">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-stone-500">
              Fill out the form below and our counseling team will respond promptly.
            </p>

            <form
              action="https://formsubmit.co/arshiglobalcare@gmail.com"
              method="POST"
              className="mt-8 space-y-4"
            >
              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-arshi-ink mb-1">
                  Full Name <span className="text-arshi-red">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none focus:border-arshi-red focus:ring-2 focus:ring-[#046f81]/15"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-arshi-ink mb-1">
                    Email Address <span className="text-arshi-red">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    className="w-full rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none focus:border-arshi-red focus:ring-2 focus:ring-[#046f81]/15"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-arshi-ink mb-1">
                    Phone Number <span className="text-arshi-red">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="+880 1800-000000"
                    className="w-full rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none focus:border-arshi-red focus:ring-2 focus:ring-[#046f81]/15"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-arshi-ink mb-1">
                  Service Interested In
                </label>
                <select
                  id="contact-service"
                  name="service"
                  className="w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 outline-none focus:border-arshi-red focus:ring-2 focus:ring-[#046f81]/15"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-arshi-ink mb-1">
                  How can we help? <span className="text-arshi-red">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your educational background, medical care needs, or visa goals..."
                  className="w-full rounded-lg border border-stone-200 px-4 py-3 text-sm outline-none focus:border-arshi-red focus:ring-2 focus:ring-[#046f81]/15"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-arshi-ink px-6 py-4 font-bold text-white transition hover:bg-arshi-wine shadow-lg shadow-[#046f81]/15"
              >
                Send Message <Arrow />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Map / Directions Section */}
      <section className="bg-[#f0fafc] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-sm font-bold tracking-[.18em] text-arshi-red">LOCATION</p>
            <h2 className="serif mt-2 text-3xl font-bold text-arshi-ink sm:text-4xl">Visit our Rajshahi Office</h2>
            <p className="mt-3 text-[#2a5a65]">Located at Chamber of Commerce Building, Alokar More, Rajshahi.</p>
          </div>
          
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg">
            <iframe
              title="Arshi Global Care Office Location"
              src="https://maps.google.com/maps?q=Alokar%20More,%20Rajshahi,%20Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#092028] py-14 text-[#a8d8e2]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <Logo white={true} />
            <p className="mt-5 max-w-xs text-sm leading-6">
              Thoughtful support for the global journeys that matter most.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white">Explore</h3>
            <div className="mt-4 grid gap-2 text-sm">
              <a href="/">Home</a>
              <a href="/#services">Our services</a>
              <a href="/#process">How it works</a>
              <a href="/#destinations">Destinations</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white">Services</h3>
            <div className="mt-4 grid gap-2 text-sm">
              <a href="/#services">Study abroad</a>
              <a href="/#services">China treatment package</a>
              <a href="/#services">Visa & immigration</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white">Contact Info</h3>
            <div className="mt-4 space-y-2 text-sm text-[#a8d8e2]">
              <p>📞 +880 1818-758882</p>
              <p>✉ info@arshiglobalcare.com</p>
              <p>✉ arshiglobalcare@gmail.com</p>
              <p>📍 Alokar More, Rajshahi</p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-[#a8d8e2]/60 px-5">
          © {new Date().getFullYear()} Arshi Global Care. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
