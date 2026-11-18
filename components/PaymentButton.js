'use client';

import { useEffect, useRef, useState } from 'react';
import { PAYMENT_ENABLED, PAYMENT_URL } from '../config/payment';

const SOON_MESSAGE =
  'خدمة الدفع الإلكتروني ستتوفر قريباً! نعمل حالياً على تطوير وتأمين بوابات الدفع لنقدم لكم تجربة تسوق سلسة وآمنة. ترقبونا قريباً.';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    {' '}
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default function PaymentButton() {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);
  const wrap = useRef(null);

  const show = (autoHide) => {
    clearTimeout(timer.current);
    setOpen(true);
    if (autoHide) timer.current = setTimeout(() => setOpen(false), 4000);
  };
  const hide = () => {
    clearTimeout(timer.current);
    setOpen(false);
  };

  // click / tap outside closes the message
  useEffect(() => {
    if (!open) return undefined;
    const onOutside = (e) => {
      if (wrap.current && !wrap.current.contains(e.target)) hide();
    };
    document.addEventListener('pointerdown', onOutside);
    return () => document.removeEventListener('pointerdown', onOutside);
  }, [open]);

  useEffect(() => () => clearTimeout(timer.current), []);

  if (PAYMENT_ENABLED) {
    // السلوك الأصلي كما كان
    return (
      <a href={PAYMENT_URL} className="btn-payment">
        <CheckIcon />
        {' ادفع الآن بأمان '}
      </a>
    );
  }

  // معطّل مؤقتًا: الدفع الإلكتروني قريبًا
  // (الكود الأصلي: <a href={PAYMENT_URL} className="btn-payment"> — يُفعَّل عبر PAYMENT_ENABLED)
  return (
    <>
      <div
        ref={wrap}
        className="payment-soon-wrap"
        tabIndex={0}
        onMouseEnter={() => show(false)}
        onMouseLeave={hide}
        onFocus={() => show(false)}
        onBlur={hide}
        onClick={() => show(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            show(true);
          } else if (e.key === 'Escape') hide();
        }}
      >
        <span className="payment-soon-badge">قريبًا · Coming Soon</span>
        <button type="button" disabled aria-disabled="true" aria-describedby="payment-soon-msg" className="btn-payment is-disabled">
          <CheckIcon />
          {' ادفع الآن بأمان '}
        </button>
        <span id="payment-soon-tip" role="status" className={'payment-soon-tip' + (open ? ' show' : '')} dir="rtl">
          {SOON_MESSAGE}
        </span>
      </div>
      <div id="payment-soon-msg" className="payment-soon-note" dir="rtl">
        {SOON_MESSAGE}
      </div>
    </>
  );
}
