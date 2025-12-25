'use client';

import { useState } from 'react';
import Modal from './modal';
import styles from '../page.module.css';
import style1 from '../contact/contact.module.css';

type QuoteTriggerProps = {
  label?: string;
  variant?: 'primary' | 'secondary';
};

export default function QuoteFormModal({
  label = 'Get a quote',
  variant = 'primary',
}: QuoteTriggerProps) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] =
    useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      type: 'quote',
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      product: formData.get('preferredProduct'),
      notes: `${formData.get('notes') || ''}\nPreferred time: ${
        formData.get('bestTimeToCall') || '-'
      }`,
    };

    const res = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  }

  const btnClass =
    variant === 'primary' ? styles.primaryCta : styles.secondaryCta;

  return (
    <>
      <button
        type="button"
        className={btnClass}
        onClick={() => {
          setStatus('idle');
          setOpen(true);
        }}
      >
        {label}
      </button>

      <Modal open={open} title="Get a quote" onClose={() => setOpen(false)}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />

          <div className={style1.formField}>
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

          <div className={style1.formField}>
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

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" />

          <button
            type="submit"
            className={styles.submitButton}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Submitting…' : 'Submit details'}
          </button>

          {status === 'success' && (
            <p className={styles.success}>Thank you! Our team will contact you soon.</p>
          )}
          {status === 'error' && (
            <p className={styles.error}>Something went wrong. Please try again.</p>
          )}
        </form>
      </Modal>
    </>
  );
}
