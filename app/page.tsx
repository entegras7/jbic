import Image from 'next/image';
import styles from './page.module.css';
import QuoteFormModal from './_components/getQuoteForm';

export default function HomePage() {
  return (
    <>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Your protection, our priority</h1>
            <p className={styles.subtitle}>
              Comprehensive coverage and capital solutions tailored to your
              personal and business needs.
            </p>
            <a href="#products" className={styles.primaryCta}>
              Explore coverage
            </a>
            <QuoteFormModal variant="secondary" />
          </div>

          <div className={styles.heroImageWrapper}>
            <Image
              src="/protection.jpg"
              alt="Insurance advisors discussing coverage plans"
              fill
              priority
              className={styles.heroImage}
              sizes="(min-width: 900px) 40vw, 100vw"
            />
          </div>
        </section>

        <section id="services" className={styles.services} aria-label="Core services">
          <div className={styles.serviceCard}>
            <span aria-hidden="true" className={styles.serviceIcon}>
              🛡️
            </span>
            <h2>Insurance</h2>
            <p>Motor, health, life, and home insurance with flexible coverage options.</p>
          </div>
          <div className={styles.serviceCard}>
            <span aria-hidden="true" className={styles.serviceIcon}>
              📈
            </span>
            <h2>Capital</h2>
            <p>Capital planning and investment products to grow your wealth.</p>
          </div>
          <div className={styles.serviceCard}>
            <span aria-hidden="true" className={styles.serviceIcon}>
              🤝
            </span>
            <h2>Partnership</h2>
            <p>Advisory partnerships for businesses and professionals.</p>
          </div>
        </section>

        <section id="products" className={styles.products}>
          <div className={styles.productsHeader}>
            <h2>Our products</h2>
            <p>
              Tailored insurance and capital solutions for individuals, families, and growing businesses.
            </p>
          </div>

          <div className={styles.productTileGrid}>
            <article className={styles.productTile}>
              <div className={styles.productImageWrapper}>
                <Image
                  src="/products/carInsurance.jpg"
                  alt="Motor insurance coverage"
                  fill
                  className={styles.productImage}
                />
              </div>
              <h3>Motor insurance</h3>
              <p>Protect your car or fleet with cashless repairs, roadside assistance, and fast claims.</p>
            </article>

            <article className={styles.productTile}>
              <div className={styles.productImageWrapper}>
                <Image
                  src="/products/healthInsurance.jpg"
                  alt="Health insurance coverage"
                  fill
                  className={styles.productImage}
                />
              </div>
              <h3>Health insurance</h3>
              <p>Comprehensive health plans for individuals, families, and employees.</p>
            </article>

            <article className={styles.productTile}>
              <div className={styles.productImageWrapper}>
                <Image
                  src="/products/familyInsurance.jpg"
                  alt="Life insurance coverage"
                  fill
                  className={styles.productImage}
                />
              </div>              
              <h3>Life insurance</h3>
              <p>Secure your family&apos;s future with protection that grows with you.</p>
            </article>

            <article className={styles.productTile}>
              <div className={styles.productImageWrapper}>
                <Image
                  src="/products/businessInsurance.jpg"
                  alt="Business insurance coverage"
                  fill
                  className={styles.productImage}
                />
              </div>
              <h3>Business insurance</h3>
              <p>Safeguard assets, people, and operations with tailored commercial covers.</p>
            </article>

            <article className={styles.productTile}>
              <div className={styles.productImageWrapper}>
                <Image
                  src="/products/capitalSolutions.jpg"
                  alt="Capital solutions"
                  fill
                  className={styles.productImage}
                />
              </div>
              <h3>Capital solutions</h3>
              <p>Structured capital options to fund growth, expansion, and working capital.</p>
            </article>

            <article className={styles.productTile}>
              <div className={styles.productImageWrapper}>
                <Image
                  src="/products/homeInsurance.jpg"
                  alt="Home insurance coverage"
                  fill
                  className={styles.productImage}
                />
              </div>
              <h3>Home insurance</h3>
              <p>Protect your home and valuables from fire, theft, and natural calamities.</p>
            </article>
          </div>

          <div className={styles.productsCta}>
            <QuoteFormModal />
          </div>
        </section>

        <section
          id="partners"
          className={styles.partners}
          aria-labelledby="partners-heading"
        >
          <div className={styles.sectionHeader}>
            <h2 id="partners-heading">Our partners</h2>
            <p>
              JB Insurance &amp; Capital collaborates with trusted insurance
              and financial institutions to deliver reliable coverage and
              capital solutions.
            </p>
          </div>

          <div className={styles.partnerGrid}>
            <div className={styles.partnerCard}>
              <Image
                src="/images/partners/partner-a.png"
                alt="Partner A Insurance"
                width={120}
                height={40}
              />
            </div>
            <div className={styles.partnerCard}>
              <Image
                src="/images/partners/partner-b.png"
                alt="Partner B Life &amp; Health"
                width={120}
                height={40}
              />
            </div>
            <div className={styles.partnerCard}>
              <Image
                src="/images/partners/partner-c.png"
                alt="Partner C Capital"
                width={120}
                height={40}
              />
            </div>
            <div className={styles.partnerCard}>
              <Image
                src="/images/partners/partner-d.png"
                alt="Partner D General Insurance"
                width={120}
                height={40}
              />
            </div>
          </div>
        </section>

        <section
          id="reviews"
          className={styles.reviews}
          aria-labelledby="reviews-heading"
        >
          <div className={styles.sectionHeader}>
            <h2 id="reviews-heading">What our clients say</h2>
            <p>
              Businesses and individuals trust us to protect their assets and
              guide their financial decisions.
            </p>
          </div>

          <div className={styles.reviewGrid}>
            <article className={styles.reviewCard}>
              <p className={styles.reviewQuote}>
                “JB Insurance &amp; Capital made our transition to comprehensive
                business coverage smooth and transparent.”
              </p>
              <p className={styles.reviewAuthor}>Arjun Mehta</p>
              <p className={styles.reviewMeta}>Director, Mehta Logistics</p>
            </article>

            <article className={styles.reviewCard}>
              <p className={styles.reviewQuote}>
                “Their advisors helped us combine health and life insurance for
                our employees under one flexible plan.”
              </p>
              <p className={styles.reviewAuthor}>Sneha Kapoor</p>
              <p className={styles.reviewMeta}>HR Manager, NXT Digital Labs</p>
            </article>

            <article className={styles.reviewCard}>
              <p className={styles.reviewQuote}>
                “The capital solutions team gave us the confidence to expand
                into new markets.”
              </p>
              <p className={styles.reviewAuthor}>Rahul Verma</p>
              <p className={styles.reviewMeta}>Founder, Verma Enterprises</p>
            </article>
          </div>
        </section>

        {/* <section id="about" className={styles.about}>
          <h2>About JB Insurance &amp; Capital</h2>
          <p>
            JB Insurance &amp; Capital combines insurance, capital, and advisory
            expertise to protect and grow what matters most to you.
          </p>
        </section> */}
      </main>
    </>
  );
}
