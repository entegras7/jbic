'use client';

import { useState } from 'react';
import Modal from './modal';
import styles from '../page.module.css';

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

    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get('name'),
      productType: formData.get('productType'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    console.log(body);

    // const res = await fetch('/api/quote', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(body),
    // });

    // if (res.ok) {
    //   setStatus('success');
    //   e.currentTarget.reset();
    // } else {
    //   setStatus('error');
    // }
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
        <p className={styles.modalIntro}>
          Share your details and our support team will contact you with plan options.
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />

          <label htmlFor="productType">Product type</label>
          <input
            id="productType"
            name="productType"
            type="text"
            placeholder="e.g. Motor, Health, Business"
            required
          />

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
