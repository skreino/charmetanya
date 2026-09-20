import { Star } from "@phosphor-icons/react/dist/ssr";

export type Testimonial = {
  name: string;
  text: string;
  date: string;
};

type TestimonialMarqueeProps = {
  items: Testimonial[];
};

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <li className="testimonial-card">
      <div className="testimonial-card-top">
        <div className="testimonial-stars" role="img" aria-label="5 stelle su 5">
          {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={15} weight="fill" aria-hidden="true" />)}
        </div>
        <span>Google</span>
      </div>
      <blockquote>“{item.text}”</blockquote>
      <footer>
        <strong>{item.name}</strong>
        <span>{item.date}</span>
      </footer>
    </li>
  );
}

export function TestimonialMarquee({ items }: TestimonialMarqueeProps) {
  return (
    <div className="testimonial-marquee" aria-label="Recensioni Google selezionate">
      <div className="testimonial-track">
        <ul className="testimonial-list">
          {items.map((item) => <TestimonialCard key={item.name} item={item} />)}
        </ul>
        <ul className="testimonial-list testimonial-list-copy" aria-hidden="true">
          {items.map((item) => <TestimonialCard key={`copy-${item.name}`} item={item} />)}
        </ul>
      </div>
    </div>
  );
}
