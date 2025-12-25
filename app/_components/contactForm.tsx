// app/_components/ContactForm.tsx
'use client';

import { useState } from 'react';
import styles from '../contact/contact.module.css';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const payload = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      city: formData.get('city'),
      preferredProduct: formData.get('preferredProduct'),
      bestTimeToCall: formData.get('bestTimeToCall'),
      notes: formData.get('notes'),
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus('success');
      e.currentTarget.reset();
    } else {
      setStatus('error');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="preferredProduct">Interested in</label>
          <select
            id="preferredProduct"
            name="preferredProduct"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select a product
            </option>
            <option value="motor">Motor insurance</option>
            <option value="health">Health insurance</option>
            <option value="life">Life insurance</option>
            <option value="business">Business insurance</option>
            <option value="home">Home insurance</option>
            <option value="capital">Capital solutions</option>
            <option value="other">Other / Not sure yet</option>
          </select>
        </div>

        <div className={styles.formField}>
          <label htmlFor="bestTimeToCall">Preferred time to call</label>
          <select
            id="bestTimeToCall"
            name="bestTimeToCall"
            defaultValue=""
          >
            <option value="" disabled>
              Select a slot (IST)
            </option>
            <option value="morning">Morning (9:30 AM – 12:30 PM)</option>
            <option value="afternoon">Afternoon (12:30 PM – 4:30 PM)</option>
            <option value="evening">Evening (4:30 PM – 7:00 PM)</option>
          </select>
        </div>
      </div>

      <div className={styles.formField}>
        <label htmlFor="notes">
          Tell us about your requirement (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Share any specific needs or existing policies."
        />
      </div>

      <button
        type="submit"
        className={styles.submitButton}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Submitting…' : 'Request a call back'}
      </button>

      {status === 'success' && (
        <p className={styles.success}>
          Thank you for reaching out. Our representative will contact you soon.
        </p>
      )}
      {status === 'error' && (
        <p className={styles.error}>
          Something went wrong while submitting your enquiry. Please try again.
        </p>
      )}
    </form>
  );
}
