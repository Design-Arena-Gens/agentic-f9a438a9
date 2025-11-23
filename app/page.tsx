import Image from "next/image";

const features = [
  {
    title: "Handpicked Harvest",
    description:
      "Each makhana is carefully selected by Mithila artisans to ensure perfect shape, uniform size, and rich ivory sheen."
  },
  {
    title: "Slow-Roasted Crunch",
    description:
      "Traditional clay-pot roasting locks in a buttery crunch, finished with micro-batches of Himalayan pink salt."
  },
  {
    title: "Naturally Nutritious",
    description:
      "Packed with plant protein, calcium, and antioxidants, with zero cholesterol and low glycemic index."
  },
  {
    title: "Farm-to-Table Traceability",
    description:
      "Track the journey of every pouch—from Mithila’s serene ponds to your snack bowl—using our QR code story cards."
  }
];

const process = [
  {
    step: "1",
    title: "Dawn Harvest",
    detail:
      "Local fisher families gather fox nuts at sunrise, preserving aquatic ecosystems through regenerative practices."
  },
  {
    step: "2",
    title: "Sun-Dry Ritual",
    detail:
      "Seeds are sun-dried on bamboo mats, slowly revealing their signature pearly hue and light airy core."
  },
  {
    step: "3",
    title: "Artisanal Roasting",
    detail:
      "Master roasters pop the kernels in earthen pots over wood-fired heat, nurturing flavor through patience."
  },
  {
    step: "4",
    title: "Flavor Infusions",
    detail:
      "Curated seasonings—Classic Mithila, Jaggery Caramel, and Mustard Chillie—kiss each batch before air-sealed freshness."
  }
];

const testimonials = [
  {
    quote:
      "This is not the makhana I grew up with—it’s softer, more aromatic, and honestly addictive. Perfect with masala chai!",
    name: "Ananya Sharma",
    role: "Culinary Stylist, Mumbai"
  },
  {
    quote:
      "Knowing the farmers and stories behind every pouch makes it a brand I gift proudly. The traceability cards are genius.",
    name: "Raghav S.",
    role: "Sustainable Investor"
  },
  {
    quote:
      "Our wellness studio retails Mithila Makhana after yoga classes. Clients love that it’s gluten-free yet indulgent.",
    name: "Maya Sen",
    role: "Founder, Prana Circle"
  }
];

const faqs = [
  {
    question: "What makes Mithila Makhana different from regular fox nuts?",
    answer:
      "We work exclusively with heritage ponds in the Mithila region, follow slow sun-drying, and roast in small batches for crisp texture. Every pouch has a QR card sharing the farmer’s story and nutritional breakdown."
  },
  {
    question: "How should I store the makhana after opening?",
    answer:
      "Keep it in the resealable pouch away from moisture. For best crunch, finish within 20 days or store in an airtight glass jar."
  },
  {
    question: "Do you offer wholesale or gifting options?",
    answer:
      "Yes! We craft bespoke gifting boxes and provide wholesale trays for cafes, gyms, and gourmet stores. Reach us via hello@mithilamakhana.in."
  }
];

export default function Home() {
  return (
    <main>
      <section className="page hero">
        <div className="hero__glass">
          <div className="hero__preheading">
            <span className="pulse-dot" />
            From the heart of Mithila
          </div>
          <h1>
            Heritage lotus seeds,
            <span className="highlight"> slow-roasted</span> for modern tastes.
          </h1>
          <p className="hero__body">
            Discover gourmet Mithila Makhana: sustainably harvested fox nuts
            roasted with ancestral wisdom, layered with contemporary flavors, and
            crafted for mindful snacking.
          </p>
          <div className="hero__cta">
            <a className="cta-primary" href="#shop">
              Shop Signature Trio
            </a>
            <a className="cta-secondary" href="#story">
              Explore Our Story
            </a>
          </div>
          <div className="hero__metrics">
            <div>
              <span>15+</span>
              Artisanal Pond Clusters
            </div>
            <div>
              <span>84%</span>
              Return Customer Rate
            </div>
            <div>
              <span>0%</span>
              Additives & Preservatives
            </div>
          </div>
        </div>
        <div className="hero__product-card">
          <div className="product-badge">Nutrient-Dense</div>
          <div className="product-image">
            <Image
              src="https://images.unsplash.com/photo-1513611300561-0092fdbd6005?auto=format&fit=crop&w=900&q=80"
              alt="Bowl of roasted Mithila Makhana"
              fill
              sizes="(max-width: 1100px) 100vw, 380px"
              className="media-cover"
              priority
            />
          </div>
          <div className="product-info">
            <h3>Signature Mithila Roast</h3>
            <p>Classic • Jaggery Caramel • Mustard Chillie</p>
            <div className="product-price">
              <span>₹599</span>
              <small>per 3-pack</small>
            </div>
            <a className="cta-full" href="#shop">
              Add to Cart
            </a>
          </div>
        </div>
      </section>

      <section id="shop" className="page feature-grid">
        <div className="section-heading">
          <span className="label">Why it matters</span>
          <h2>Cherish every handful of Mithila’s harvest.</h2>
          <p>
            More than a snack—our makhana celebrates the rituals of Maithil
            households, supporting women-led cooperatives and regenerative
            aquaculture.
          </p>
        </div>
        <div className="grid">
          {features.map((feature) => (
            <article key={feature.title} className="glow-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="page story">
        <div className="story__image">
          <Image
            src="https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1200&q=80"
            alt="Traditional Mithila harvest scene"
            fill
            sizes="(max-width: 1100px) 100vw, 520px"
            className="media-cover"
          />
          <div className="story__tag">
            <span>Community Impact</span>
            <p>Every pouch funds pond restoration & artisan skilling.</p>
          </div>
        </div>
        <div className="story__content">
          <span className="label">Our ritual</span>
          <h2>Rooted in Mithila heritage, crafted for conscious palates.</h2>
          <p>
            Mithila Makhana is born from generations of Maithil women who
            mastered the slow alchemy of transforming fox nuts into celebratory
            delicacies. Today, we honor their practice with fair wages,
            traceable sourcing, and contemporary packaging that preserves
            freshness without compromising tradition.
          </p>
          <ul>
            <li>Partnered with 120+ women-led co-ops across Darbhanga & Madhubani</li>
            <li>Solar-powered roasting hubs reducing carbon output by 32%</li>
            <li>Reusable tins and compostable refills designed for zero waste</li>
          </ul>
          <div className="story__cta">
            <a className="cta-primary" href="#process">
              See the craft
            </a>
            <a className="cta-secondary" href="#contact">
              Partner with us
            </a>
          </div>
        </div>
      </section>

      <section id="process" className="page process">
        <div className="section-heading">
          <span className="label">Slow craft</span>
          <h2>Every batch narrates a four-step heritage process.</h2>
          <p>
            From the lotus ponds to your pantry, our makhana journeys through
            mindful hands and time-honored rituals for unmatched purity.
          </p>
        </div>
        <div className="process__grid">
          {process.map((stage) => (
            <div key={stage.title} className="process__card">
              <div className="process__step">{stage.step}</div>
              <div>
                <h3>{stage.title}</h3>
                <p>{stage.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page tasting">
        <div className="tasting__wrap">
          <div className="tasting__content">
            <span className="label">Tasting notes</span>
            <h2>A trio crafted to delight every session.</h2>
            <p>
              Curated pairings inspired by Mithila’s festive spreads and modern
              mindful snacking rituals.
            </p>
            <div className="tasting__flavors">
              <div>
                <h3>Classic Mithila</h3>
                <p>Golden ghee glaze, smoked salt, coriander seed dust.</p>
              </div>
              <div>
                <h3>Jaggery Caramel</h3>
                <p>Wild forest jaggery, toasted sesame, whisper of cardamom.</p>
              </div>
              <div>
                <h3>Mustard Chillie</h3>
                <p>Bengal mustard oil, sun-dried chilli, pops of amchur.</p>
              </div>
            </div>
          </div>
          <div className="tasting__plate">
            <Image
              src="https://images.unsplash.com/photo-1604908177079-84f9f87b2bb1?auto=format&fit=crop&w=1200&q=80"
              alt="Serving platter with assorted flavored makhana"
              fill
              sizes="(max-width: 1100px) 100vw, 520px"
              className="media-cover"
            />
          </div>
        </div>
      </section>

      <section className="page testimonials">
        <div className="section-heading">
          <span className="label">Loved by connoisseurs</span>
          <h2>Chefs, wellness coaches, and heritage lovers swear by us.</h2>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="testimonial">
              <p>{item.quote}</p>
              <footer>
                <span>{item.name}</span>
                <small>{item.role}</small>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="page faq">
        <div className="section-heading">
          <span className="label">FAQ</span>
          <h2>Answers for your mindful snacking journey.</h2>
        </div>
        <div className="faq__list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="page final-cta">
        <div className="final-cta__inner">
          <span className="label">Ready to savor?</span>
          <h2>Stock Mithila Makhana at your café, studio, or store.</h2>
          <p>
            Let’s co-create curated snack experiences, bespoke gifting, and
            wellness collaborations rooted in Mithila’s legacy.
          </p>
          <div className="final-cta__actions">
            <a className="cta-primary" href="mailto:hello@mithilamakhana.in">
              hello@mithilamakhana.in
            </a>
            <a className="cta-secondary" href="tel:+919431234567">
              +91 94312 34567
            </a>
          </div>
          <p className="final-note">
            Bulk orders dispatched within 48 hours • Craft tastings on request
          </p>
        </div>
      </section>

      <footer className="page footer">
        <div className="footer__brand">
          <span className="footer__logo">M</span>
          <div>
            <strong>Mithila Makhana</strong>
            <p>Artisanal lotus seeds from Bihar, India.</p>
          </div>
        </div>
        <div className="footer__links">
          <a href="#shop">Shop</a>
          <a href="#story">Our Story</a>
          <a href="#process">Craft</a>
          <a href="#contact">Partner</a>
        </div>
        <div className="footer__legal">
          © {new Date().getFullYear()} Mithila Makhana. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
