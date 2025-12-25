import type { Metadata } from 'next';
import './globals.css';
import styles from './page.module.css';
import Link from 'next/link';
import QuoteFormModal from './_components/getQuoteForm';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jbinsurancecapital.com'),
  title: {
    default: 'JB Insurance & Capital | Comprehensive Coverage & Capital Solutions',
    template: '%s | JB Insurance & Capital',
  },
  description:
    'JB Insurance & Capital provides comprehensive insurance, capital, and partnership solutions for individuals and businesses.',
  keywords: [
    'insurance',
    'capital solutions',
    'business insurance',
    'health insurance',
    'life insurance',
  ],
  openGraph: {
    type: 'website',
    siteName: 'JB Insurance & Capital',
    title: 'Protecting Your World | JB Insurance & Capital',
    description:
      'Explore insurance, capital, and partnership products tailored for motor, health, life, and business needs.',
    url: 'https://www.jbinsurancecapital.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JB Insurance & Capital',
    description:
      'Comprehensive coverage and capital solutions for your world.',
  },
  alternates: {
    canonical: 'https://www.jbinsurancecapital.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <div className={styles.logoArea}>
            <Link href="/" className={styles.logoLink} aria-label="Go to JBIC home">
              <div className={styles.logoArea}>
                <span className={styles.logoCircle}>JBIC</span>
                <span className={styles.logoText}>JB Insurance and Capital</span>
              </div>
            </Link>
          </div>
          <nav aria-label="Primary" className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#products">Products</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer className={styles.footer}>
          <div id="contact" className={styles.footerInner}>
            <div className={styles.footerBrand}>
              <p className={styles.footerLogo}>JBIC</p>
              <p className={styles.footerCompany}>
                JB Insurance &amp; Capital
              </p>
              <p className={styles.footerTagline}>
                Protecting your world with comprehensive coverage &amp; capital solutions.
              </p>
            </div>

            <address className={styles.footerContact}>
              <h3 className={styles.footerHeading}>Contact</h3>
              <p>
                JB Insurance &amp; Capital Pvt. Ltd.<br />
                4th Floor, Business Tower<br />
                Connaught Place, New Delhi 110001<br />
                India
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+911124567890">+91 11 2456 7890</a><br />
                Email:{' '}
                <a href="mailto:contact@jbinsurancecapital.com">
                  contact@jbinsurancecapital.com
                </a>
              </p>
              <p>
                Office hours: Mon–Sat, 9:30 AM – 6:30 PM
              </p>
            </address>

            <div className={styles.footerLinks}>
              <h3 className={styles.footerHeading}>Quick links</h3>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#partners">Partners</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li className={styles.footerQuoteItem}>
                  <QuoteFormModal label="Get a quote" variant="secondary" />
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} JB Insurance &amp; Capital. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
