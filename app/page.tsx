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
    text: "Finalmente ho trovato il colore ideale. Capelli morbidi, idratati e lucenti. Ambiente rilassante, amichevole e persone competenti.",
    service: "Colore e piega",
  },
  {
    name: "Valeria Pernice",
    text: "Professionalità impareggiabile. Riescono a capire le mie esigenze e a creare ogni volta qualcosa di davvero su misura.",
    service: "Cliente da dieci anni",
  },
  {
    name: "Veronica Sala",
    text: "Ho effettuato un massaggio con Tanya ed è stata bravissima. Mi sono sentita a mio agio e davvero rilassata.",
    service: "Massaggio benessere",
  },
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
  image: "https://charmetanya.vercel.app/images/hero-styling.jpg",
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
    reviewCount: "51",
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
          <Image src="/images/logo-compact.png" alt="Charme Tanya" width={150} height={100} priority />
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
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">Acconciature, estetica, benessere</p>
            <h1>La tua bellezza, raccontata su misura.</h1>
            <p className="hero-lead">
              Colore, stile e trattamenti benessere pensati per farti sentire davvero te stessa.
            </p>
            <div className="hero-actions">
              <a className="button button-rose" href={whatsapp} target="_blank" rel="noreferrer">
                Prenota ora <WhatsappLogo size={20} weight="fill" />
              </a>
              <a className="text-link" href="tel:+393939272132">
                Chiama <Phone size={18} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <HeroImage />
            <div className="hero-stamp" aria-label="Attività aperta dal 1987">
              <span>Dal</span>
              <strong>1987</strong>
            </div>
          </div>
        </section>

        <section className="trust-band" aria-label="Dati e recensioni">
          <div className="section-shell trust-grid">
            <div><strong>4,8</strong><span><Star size={16} weight="fill" /> Valutazione Google</span></div>
            <div><strong>51</strong><span>Recensioni pubbliche</span></div>
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

        <section className="gallery section-shell">
          <Reveal className="section-heading gallery-heading">
            <h2>Gesti precisi. Risultati che parlano di te.</h2>
          </Reveal>
          <div className="gallery-grid">
            <Reveal className="gallery-item gallery-a">
              <Image src="/images/precision-cut.jpg" alt="Taglio di precisione" fill sizes="(max-width: 767px) 100vw, 40vw" />
            </Reveal>
            <Reveal className="gallery-item gallery-b" delay={0.06}>
              <Image src="/images/blonde-finish.jpg" alt="Piega morbida su capelli biondi" fill sizes="(max-width: 767px) 100vw, 32vw" />
            </Reveal>
            <Reveal className="gallery-item gallery-c" delay={0.12}>
              <Image src="/images/color-ritual.jpg" alt="Applicazione professionale del colore" fill sizes="(max-width: 767px) 100vw, 28vw" />
            </Reveal>
            <Reveal className="gallery-item gallery-d" delay={0.18}>
              <Image src="/images/blow-dry.jpg" alt="Asciugatura e styling in salone" fill sizes="(max-width: 767px) 100vw, 45vw" />
            </Reveal>
          </div>
        </section>

        <section id="recensioni" className="reviews anchored-section">
          <div className="section-shell">
            <Reveal className="reviews-intro">
              <div className="rating-lockup"><Star size={22} weight="fill" /><strong>4,8 su 5</strong><span>51 recensioni Google</span></div>
              <h2>La fiducia si costruisce, appuntamento dopo appuntamento.</h2>
            </Reveal>

            <div className="review-row">
              {reviews.map((review, index) => (
                <Reveal key={review.name} className="review-card" delay={index * 0.07}>
                  <div className="review-stars" role="img" aria-label="5 stelle">
                    {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={16} weight="fill" />)}
                  </div>
                  <blockquote>“{review.text}”</blockquote>
                  <footer><strong>{review.name}</strong><span>{review.service}</span></footer>
                </Reveal>
              ))}
            </div>

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
            <Image src="/images/logo-compact.png" alt="Charme Tanya" width={180} height={120} />
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
