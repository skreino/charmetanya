import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  FacebookLogo,
  FlowerLotus,
  InstagramLogo,
  MapPin,
  Phone,
  Scissors,
  Sparkle,
  Star,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { HeroImage } from "@/components/hero-image";
import { Reveal } from "@/components/reveal";
import { TestimonialMarquee } from "@/components/ui/testimonial-marquee";
import { WorksFanCarousel } from "@/components/ui/works-fan-carousel";

const whatsapp =
  "https://wa.me/393939272132?text=Ciao%20Charme%20Tanya%2C%20vorrei%20richiedere%20un%20appuntamento.";
const googleProfile = "https://share.google/pW9ZbTNAYN21A50Dz";

const services = [
  {
    title: "Capelli e colore",
    body: "Taglio, piega, colore, schiariture, Smart Decup e trattamenti di idratazione studiati sulla tua immagine.",
    image: "/images/salon-finish.jpg",
    alt: "Styling professionale con capelli mossi",
    className: "service-hair",
    icon: Scissors,
  },
  {
    title: "Estetica",
    body: "Trattamenti viso, cura di mani e piedi e servizi estetici eseguiti con attenzione e delicatezza.",
    image: "/images/color-care.jpg",
    alt: "Preparazione di un trattamento professionale",
    className: "service-beauty",
    icon: Sparkle,
  },
  {
    title: "Benessere",
    body: "Massaggi rilassanti e trattamenti corpo per rallentare, ritrovare equilibrio e dedicarti tempo di qualità.",
    image: "/images/head-spa.jpg",
    alt: "Trattamento benessere per cute e capelli",
    className: "service-wellness",
    icon: FlowerLotus,
  },
];

const reviews = [
  {
    name: "Federica Schenoni",
    text: "Finalmente posso dire di aver trovato il colore ideale. Capelli morbidi, idratati e lucenti. Ambiente rilassante e persone competenti.",
    date: "10 mesi fa",
  },
  {
    name: "Valeria Pernice",
    text: "Frequento Charme Tanya da dieci anni e posso dire che la loro professionalità è impareggiabile.",
    date: "11 mesi fa",
  },
  {
    name: "veronica sala",
    text: "Mi sono sentita molto a mio agio e dopo la terapia molto rilassata. Tutto il personale sa come prendersi cura dei clienti.",
    date: "1 anno fa",
  },
  {
    name: "Marta Santoro",
    text: "Ambiente accogliente, prezzi onesti, tempi per i trattamenti ottimi. Tanya e le ragazze sono preparate e disponibili.",
    date: "1 anno fa",
  },
  {
    name: "Cinzi",
    text: "Personale gentile e simpatico, servizio perfetto e preciso. Un lavaggio testa degno di un massaggio in una spa.",
    date: "3 anni fa",
  },
  {
    name: "Stephanie Felix",
    text: "Sono rimasta piacevolmente stupita. Che mano leggera!",
    date: "3 anni fa",
  },
  {
    name: "AnnaRita Baldasarre",
    text: "Le pieghe durano per giorni, senza fare una piega. È semplicemente pura verità.",
    date: "8 anni fa",
  },
  {
    name: "liliana litti",
    text: "Tanya è molto brava e competente. Ti fa sentire a tuo agio e ti dà ottimi consigli.",
    date: "8 anni fa",
  },
];

const works = [
  { image: "/images/blonde-finish.jpg", alt: "Piega luminosa su capelli biondi", label: "Piega luminosa" },
  { image: "/images/precision-cut.jpg", alt: "Taglio di precisione in salone", label: "Taglio su misura" },
  { image: "/images/salon-finish.jpg", alt: "Styling professionale con onde morbide", label: "Onde morbide" },
  { image: "/images/blow-dry.jpg", alt: "Asciugatura professionale dei capelli", label: "Styling" },
  { image: "/images/color-ritual.jpg", alt: "Preparazione professionale del colore", label: "Rituale colore" },
  { image: "/images/hair-detail.jpg", alt: "Dettaglio di capelli sani e lucenti", label: "Cura e luminosità" },
  { image: "/images/hero-styling.jpg", alt: "Lavorazione professionale su capelli castani", label: "Finish naturale" },
  { image: "/images/color-care.jpg", alt: "Trattamento colore eseguito in salone", label: "Colore personalizzato" },
];

const hours = [
  ["Martedì", "9:00-12:00 / 14:30-18:30"],
  ["Mercoledì", "9:00-12:00 / 15:30-19:30"],
  ["Giovedì", "9:00-12:00 / 14:30-18:30"],
  ["Venerdì", "9:00-18:30"],
  ["Sabato", "8:30-18:00"],
];

const schemaDays = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Charme Tanya Acconciature estetica e benessere",
  image: "https://charmetanya.vercel.app/images/hero-averie-woodard.jpg",
  url: "https://charmetanya.vercel.app",
  telephone: "+393939272132",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Piave 7",
    addressLocality: "Busnago",
    addressRegion: "MB",
    postalCode: "20874",
    addressCountry: "IT",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "52",
  },
  sameAs: [
    "https://www.facebook.com/charmetanya/",
    "https://www.instagram.com/charmetanyaacconciaturestetica/",
  ],
  openingHoursSpecification: hours.map(([, value], index) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: `https://schema.org/${schemaDays[index]}`,
    description: value,
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="site-header">
        <a href="#top" className="brand" aria-label="Charme Tanya, torna all'inizio">
          <Image src="/images/logo-wordmark-fixed.png" alt="Charme Tanya" width={720} height={214} priority unoptimized />
        </a>

        <nav className="desktop-nav" aria-label="Navigazione principale">
          <a href="#servizi">Servizi</a>
          <a href="#storia">La storia</a>
          <a href="#recensioni">Recensioni</a>
          <a href="#contatti">Contatti</a>
        </nav>

        <a className="button button-dark header-cta" href={whatsapp} target="_blank" rel="noreferrer">
          Prenota ora <WhatsappLogo size={18} weight="fill" />
        </a>

        <details className="mobile-nav">
          <summary>Menu</summary>
          <div className="mobile-nav-panel">
            <a href="#servizi">Servizi</a>
            <a href="#storia">La storia</a>
            <a href="#recensioni">Recensioni</a>
            <a href="#contatti">Contatti</a>
          </div>
        </details>
      </header>

      <main id="top">
        <section className="hero">
          <HeroImage />
          <div className="hero-shade" />
          <div className="hero-copy section-shell">
            <p className="eyebrow">Il tuo salone a Busnago dal 1987</p>
            <h1>
              <span>Capelli da sogno,</span>
              <span><em>stile su misura.</em></span>
            </h1>
            <div className="hero-bottom">
              <p className="hero-lead">
                Colore, piega e trattamenti pensati per valorizzare la tua bellezza.
              </p>
              <div className="hero-actions">
                <a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">
                  Prenota ora <WhatsappLogo size={20} weight="fill" />
                </a>
                <a className="text-link text-link-light" href="tel:+393939272132">
                  Chiama <Phone size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-band" aria-label="Dati e recensioni">
          <div className="section-shell trust-grid">
            <div><strong>4,8</strong><span><Star size={16} weight="fill" /> Valutazione Google</span></div>
            <div><strong>52</strong><span>Recensioni pubbliche</span></div>
            <div><strong>1987</strong><span>Il primo giorno a Busnago</span></div>
            <a href={googleProfile} target="_blank" rel="noreferrer">
              Leggi le recensioni <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        <section className="manifesto section-shell">
          <Reveal>
            <p className="manifesto-kicker">Il tuo tempo. Il tuo stile.</p>
            <h2>La tecnica conta. Sentirti capita, ancora di più.</h2>
            <p>
              Ogni servizio nasce dall'ascolto. Studiamo linee, colore e trattamenti che rispettano i tuoi capelli, la tua pelle e il modo in cui vuoi sentirti.
            </p>
          </Reveal>
        </section>

        <section id="servizi" className="services section-shell anchored-section">
          <Reveal className="section-heading">
            <h2>Un unico luogo, tre modi di prenderti cura di te.</h2>
          </Reveal>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} className={`service-panel ${service.className}`} delay={index * 0.07}>
                  <Image src={service.image} alt={service.alt} fill sizes="(max-width: 767px) 100vw, 50vw" />
                  <div className="service-scrim" />
                  <div className="service-content">
                    <Icon size={28} weight="light" />
                    <h3>{service.title}</h3>
                    <p>{service.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="care-interlude" aria-label="La filosofia di Charme Tanya">
          <div className="section-shell care-interlude-inner">
            <FlowerLotus size={42} weight="light" aria-hidden="true" />
            <p>Ogni gesto racconta <em>qualcosa di te.</em></p>
            <span>Ascolto, tecnica, cura.</span>
          </div>
        </section>

        <section id="storia" className="story anchored-section">
          <div className="section-shell story-grid">
            <div className="story-images" aria-label="Momenti di cura nel salone">
              <Reveal className="story-image story-image-main">
                <Image
                  src="/images/hair-wash.jpg"
                  alt="Momento di relax al lavatesta"
                  fill
                  sizes="(max-width: 767px) 78vw, 34vw"
                />
              </Reveal>
              <Reveal className="story-image story-image-detail" delay={0.1}>
                <Image
                  src="/images/color-tools.jpg"
                  alt="Strumenti per il colore professionale"
                  fill
                  sizes="(max-width: 767px) 46vw, 20vw"
                />
              </Reveal>
            </div>

            <Reveal className="story-copy">
              <p className="eyebrow">Una passione iniziata presto</p>
              <h2>Dal 1987, Tanya continua a scegliere la formazione.</h2>
              <p>
                La passione nasce a undici anni, aiutando una parrucchiera durante le vacanze. Dopo gli studi e la specializzazione colore presso l'Accademia L'Oréal, Tanya apre il salone a Busnago il 2 novembre 1987.
              </p>
              <p>
                L'aggiornamento continuo ha trasformato Charme Tanya in un luogo completo, dove capelli, estetica e benessere dialogano davvero.
              </p>
              <a className="text-link" href="#contatti">
                Vieni a conoscerci <ArrowRight size={18} />
              </a>
            </Reveal>
          </div>
        </section>

        <section id="galleria" className="gallery anchored-section">
          <div className="section-shell works-intro">
            <Reveal>
              <h2>Il nostro lavoro, <em>da vicino.</em></h2>
              <p>Tagli, colore e styling costruiti sulla persona. Sfoglia una selezione dei risultati firmati Charme Tanya.</p>
            </Reveal>
          </div>
          <WorksFanCarousel items={works} />
        </section>

        <section id="recensioni" className="reviews anchored-section">
          <div className="section-shell">
            <Reveal className="reviews-intro">
              <div className="rating-lockup"><Star size={22} weight="fill" /><strong>4,8 su 5</strong><span>52 recensioni Google</span></div>
              <h2>La fiducia si costruisce, appuntamento dopo appuntamento.</h2>
            </Reveal>
          </div>
          <TestimonialMarquee items={reviews} />
          <div className="section-shell">
            <a className="text-link reviews-link" href={googleProfile} target="_blank" rel="noreferrer">
              Tutte le recensioni <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        <section id="contatti" className="contact section-shell anchored-section">
          <Reveal className="contact-copy">
            <p className="eyebrow">Via Piave 7, Busnago</p>
            <h2>Il tuo prossimo momento di bellezza inizia qui.</h2>
            <div className="contact-actions">
              <a className="button button-rose" href={whatsapp} target="_blank" rel="noreferrer">
                Prenota ora <WhatsappLogo size={20} weight="fill" />
              </a>
              <a className="button button-outline" href="tel:+393939272132">
                Chiama <Phone size={19} />
              </a>
            </div>

            <div className="contact-numbers">
              <a href="tel:+393939272132">Cellulare: 393 927 2132</a>
              <a href="tel:+390396956806">Fisso: 039 695 6806</a>
            </div>
          </Reveal>

          <Reveal className="hours" delay={0.08}>
            <h3>Orari di apertura</h3>
            <dl>
              {hours.map(([day, time]) => (
                <div key={day}><dt>{day}</dt><dd>{time}</dd></div>
              ))}
            </dl>
            <small>Orari indicativi da confermare con il salone.</small>
          </Reveal>

          <Reveal className="map" delay={0.12}>
            <iframe
              title="Mappa di Charme Tanya a Busnago"
              src="https://www.google.com/maps?q=Via%20Piave%207%2C%2020874%20Busnago%20MB&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a href="https://maps.app.goo.gl/oT4W6p6Sr12bLPG5A" target="_blank" rel="noreferrer">
              <MapPin size={19} weight="fill" /> Apri in Google Maps <ArrowUpRight size={17} />
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <div className="section-shell footer-grid">
          <div className="footer-brand">
            <Image src="/images/logo-wordmark-fixed.png" alt="Charme Tanya" width={720} height={214} unoptimized />
            <p>Acconciature, estetica e benessere a Busnago dal 1987.</p>
          </div>
          <div className="footer-social">
            <a href="https://www.instagram.com/charmetanyaacconciaturestetica/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramLogo size={24} />
            </a>
            <a href="https://www.facebook.com/charmetanya/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookLogo size={24} />
            </a>
          </div>
          <div className="footer-wordmark" aria-hidden="true">Charme Tanya</div>
          <p className="footer-copy">© {new Date().getFullYear()} Charme Tanya. Tutti i diritti riservati.</p>
        </div>
      </footer>

      <nav className="mobile-booking" aria-label="Prenotazione rapida">
        <a href={whatsapp} target="_blank" rel="noreferrer"><WhatsappLogo size={21} weight="fill" /> Prenota ora</a>
        <a href="tel:+393939272132"><Phone size={20} weight="fill" /> Chiama</a>
      </nav>
    </>
  );
}
