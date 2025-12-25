import type { Metadata } from 'next';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About JB Insurance & Capital',
  description:
    'Learn about JB Insurance & Capital, our vision, growth roadmap, and the culture that powers our people.',
};

export default function AboutPage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <h1>About JB Insurance &amp; Capital</h1>
        <p>
          JB Insurance &amp; Capital (JBIC) brings together insurance, capital, and
          advisory expertise to protect and grow what matters most to individuals
          and businesses.
        </p>
      </section>

      <section className={styles.section} aria-labelledby="about-company-heading">
        <h2 id="about-company-heading">Our company</h2>
        <p>
          Founded in 2015, JBIC partners with leading insurers and financial
          institutions to deliver motor, health, life, home, and business
          products tailored to India&apos;s evolving risk landscape.
        </p>
        <p>
          With teams across key metros, we combine on-ground experience with
          digital tools to offer transparent advice, faster servicing, and
          long-term relationships.
        </p>
      </section>

      <section className={styles.section} aria-labelledby="vision-heading">
        <h2 id="vision-heading">Our vision</h2>
        <p>
          JBIC&apos;s vision is to become the most trusted risk and capital partner
          for growing businesses and families, simplifying complex products into
          clear, confident choices.
        </p>
        <p>
          We focus on responsible growth, client education, and technology‑led
          experiences that make protection and investing effortless.
        </p>
      </section>

      <section className={styles.section} aria-labelledby="journey-heading">
        <h2 id="journey-heading">Our journey roadmap</h2>
        <ol className={styles.roadmap}>
          <li>
            <h3>Phase 1: Strong foundations</h3>
            <p>
              Build deep partnerships with top insurers and set up advisory teams
              in key business hubs.
            </p>
          </li>
          <li>
            <h3>Phase 2: Digital first</h3>
            <p>
              Deliver seamless quote, policy, and claims experiences through
              intuitive digital platforms.
            </p>
          </li>
          <li>
            <h3>Phase 3: Integrated capital solutions</h3>
            <p>
              Combine protection, capital, and advisory into a single
              relationship for our clients.
            </p>
          </li>
          <li>
            <h3>Phase 4: Regional leadership</h3>
            <p>
              Expand JBIC&apos;s footprint across India and selected global markets,
              guided by client needs and regulatory strength.
            </p>
          </li>
        </ol>
      </section>

      <section className={styles.section} aria-labelledby="life-heading">
        <h2 id="life-heading">Life at JBIC</h2>

        <div className={styles.lifeGrid}>
          <article className={styles.lifeBlock}>
            <h3>Message from our Director</h3>
            <p>
              “At JBIC, we believe trust is built one conversation at a time.
              Our teams are empowered to put clients first, challenge assumptions,
              and innovate responsibly.”
            </p>
            <p className={styles.signature}>— Director, JB Insurance &amp; Capital</p>
          </article>

          <article className={styles.lifeBlock}>
            <h3>People and culture</h3>
            <p>
              Life at JBIC is collaborative, learning‑driven, and inclusive.
              Cross‑functional squads work on real client challenges and see the
              impact of their work every day.
            </p>
            <p>
              From structured training and mentorship to flexible work policies,
              we invest in helping our people grow careers, not just roles.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
