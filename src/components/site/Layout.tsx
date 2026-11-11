import { NAV, SITE, whatsappLink } from "@/lib/site";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, Globe, Mail, MapPin, Menu, MessageCircle, Phone, PlayCircle, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { PageCurtain, Splash } from "./Transitions";

function Logo({ light }: { light: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className={`whitespace-nowrap font-serif text-xl leading-none sm:text-2xl ${light ? "text-ivory" : "text-forest"}`}>Vrindavan</span>
      <span className="eyebrow hidden text-gold min-[400px]:inline">Vatika</span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [path]);
  const light = !scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-3 py-2.5 transition-all sm:px-5 sm:py-3 duration-500 ${
          scrolled ? "bg-ivory/90 shadow-soft backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <Logo light={light} />
        <nav className="hidden items-center gap-5 xl:flex">
          {NAV.slice(1, 10).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`text-[13px] font-medium transition-colors ${light ? "text-ivory text-legible hover:text-gold" : "text-charcoal/70 hover:text-forest"}`}
              activeProps={{ className: "!text-gold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/plan-your-event" className={`hidden rounded-full border px-4 py-2.5 text-[13px] font-semibold md:inline-block ${light ? "border-ivory/50 text-ivory" : "border-forest/30 text-forest"}`}>
            Plan Your Event
          </Link>
          <Link
            to="/contact"
            className="whitespace-nowrap rounded-full bg-gold px-4 py-2 text-xs font-semibold sm:px-5 sm:py-2.5 sm:text-[13px] text-charcoal transition-transform hover:scale-[1.03]"
          >
            Enquire Now
          </Link>
          <button aria-label="Open menu" onClick={() => setOpen(true)} className={`rounded-full p-2 xl:hidden ${light ? "text-ivory" : "text-forest"}`}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-forest p-8 text-ivory"
          >
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="self-end p-2">
              <X className="h-6 w-6" />
            </button>
            <nav className="mt-4 flex flex-col gap-3 overflow-y-auto">
              {NAV.map((n, i) => (
                <motion.div key={n.to} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link to={n.to} className="font-serif text-3xl">{n.label}</Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-forest text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 md:py-20 lg:grid-cols-4">
        <div>
          <p className="font-serif text-4xl">Vrindavan <span className="text-gold">Vatika</span></p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/70">
            A banquet hall, wedding lawn and guest stay — crafted for celebrations that families remember for a lifetime.
          </p>
          <div className="mt-6 flex gap-3">
            {[Camera, Globe, PlayCircle].map((I, i) => (
              <a key={i} href="#" aria-label="Social link" className="rounded-full border border-ivory/20 p-2.5 transition-colors hover:border-gold hover:text-gold">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow mb-5 text-gold">Explore</p>
          <div className="flex flex-wrap gap-x-8 gap-y-6">
            {[
              { label: "Venue", links: ["/banquet-hall", "/lawn", "/rooms"] },
              { label: "Celebrations", links: ["/weddings", "/decor", "/menu"] },
              { label: "More", links: ["/", "/gallery", "/facilities", "/about", "/contact", "/plan-your-event"] },
            ].map((category) => (
              <div key={category.label} className="min-w-[7rem]">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ivory/45">{category.label}</p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-ivory/75">
                  {category.links.map((to) => {
                    const item = NAV.find((n) => n.to === to);
                    return item ? <li key={item.to}><Link to={item.to} className="hover:text-gold">{item.label}</Link></li> : null;
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow mb-5 text-gold">Visit</p>
          <ul className="space-y-3 text-sm text-ivory/75">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{SITE.address}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-gold" />{SITE.phone}</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-gold" />{SITE.email}</li>
            <li><a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-gold">Open in Google Maps</a></li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 font-semibold text-charcoal">
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5 text-gold">Credits</p>
          <p className="text-xs leading-relaxed text-ivory/50">
            <span className="block">All service rights reserved by Vrindavan Vatika</span>
            <span className="mt-2 block">
              All management rights reserved by{" "}
              <a href="https://www.loopax.online/" target="_blank" rel="noreferrer" className="text-ivory/75 underline underline-offset-4 hover:text-gold">
                Loopax Org
              </a>
            </span>
            <span className="mt-2 block">Made with love by</span>
            <a href="https://www.mohammadramiz.in/" target="_blank" rel="noreferrer" className="mt-1 inline-block text-ivory/75 underline underline-offset-4 hover:text-gold">
              Mohammad Ramiz
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-ivory/10 px-6 py-6 text-center text-xs text-ivory/50">
        © {new Date().getFullYear()} Vrindavan Vatika. All rights reserved.
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-forest p-3.5 text-ivory shadow-soft transition-all hover:-translate-y-1 hover:bg-gold hover:text-charcoal md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 group-hover:max-w-[120px] md:inline">Chat with us</span>
    </a>
  );
}

export function PageHero({ image, eyebrow, title, subtitle }: { image: string; eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative flex h-[70svh] min-h-[460px] md:h-[78vh] items-end overflow-hidden">
      <motion.img
        src={image}
        alt=""
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-shade" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="eyebrow text-gold">{eyebrow}</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 1 }} className="mt-4 max-w-3xl text-4xl leading-[0.95] text-ivory text-legible sm:text-5xl md:text-7xl">{title}</motion.h1>
        {subtitle && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-5 max-w-xl text-ivory text-legible">{subtitle}</motion.p>}
      </div>
    </section>
  );
}

export function CTASection({ image, title = "Let's Make Your Celebration Extraordinary." }: { image: string; title?: string }) {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <img src={image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-forest/70" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="eyebrow text-gold">Begin planning</p>
        <h2 className="mt-5 text-4xl leading-none text-ivory text-legible sm:text-5xl md:text-7xl">{title}</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-charcoal transition-transform hover:scale-105">Enquire Now</Link>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ivory/40 px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-ivory hover:text-forest">
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isLandingPage = path === "/";
  return (
    <>
      <Splash />
      <PageCurtain path={path} />
      <Navbar />
      <motion.main key={path} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
        {isLandingPage ? children : <ScrollAnimatedPage path={path}>{children}</ScrollAnimatedPage>}
      </motion.main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function ScrollAnimatedPage({ children, path }: { children: ReactNode; path: string }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > div > section"));
    if (!sections.length) return;

    sections.forEach((section) => section.classList.add("scroll-reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [path]);

  return <div>{children}</div>;
}
