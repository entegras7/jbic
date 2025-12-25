import type { Metadata } from 'next';
import ContactForm from '../_components/contactForm';
import styles from './contact.module.css';

export const metadata: Metadata = {
    title: 'Contact JB Insurance & Capital',
    description:
        'Share your details with JB Insurance & Capital so our team can assign the right representative to call you back.',
};

export default function ContactPage() {
    return (
        <section
            className={styles.wrapper}
            aria-labelledby="enquiry-heading"
        >
            <div className={styles.enquiryGrid}>
                <div>
                    <h1>Contact JB Insurance &amp; Capital</h1>
                    <p>
                        Found our products intriguing? We are here to protect you and your
                        family from everyday and long-term risks.
                    </p>
                    <p>
                        Leave your details for our representative to call you back, or reach
                        out directly using the contact information in the footer.
                    </p>
                </div>

                <div className={styles.formCard}>
                    <ContactForm />
                </div>

            </div>
        </section>
    );
}
