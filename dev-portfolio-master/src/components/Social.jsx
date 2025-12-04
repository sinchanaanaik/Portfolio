// src/components/Social.jsx
import React from 'react';

const LINKS = [
  {
    href: 'https://www.linkedin.com/in/sinchana-s-naik-66331927b', // <- replace with your LinkedIn
    label: 'LinkedIn',
    // LinkedIn SVG
    svg: (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.98h4.52V24H.22V8.98zM8.98 8.98h4.34v2.06h.06c.61-1.16 2.11-2.38 4.35-2.38C22.9 8.66 24 11.1 24 14.94V24h-4.52v-7.02c0-1.67-.03-3.82-2.34-3.82-2.34 0-2.7 1.83-2.7 3.7V24H8.98V8.98z" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/sinchanaanaik', // <- replace with your GitHub
    label: 'GitHub',
    // GitHub SVG
    svg: (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6-.8 1.9-1.2-.7-.1-1.4-.4-1.4-1.6 0-.4.1-.8.3-1.2-1.2-.1-2.5-.6-2.5-2.7 0-.6.2-1.1.6-1.6 0-.1-.3-1.2.1-2.5 0 0 .5-.2 1.7.6a5.8 5.8 0 013.1 0c1.2-.8 1.7-.6 1.7-.6.4 1.3.1 2.4.1 2.5.4.5.6 1 .6 1.6 0 2.1-1.3 2.6-2.5 2.7.2.2.4.5.4 1v2.9c0 .3.2.7.8.6A12 12 0 0012 .3z" />
      </svg>
    ),
  },
];

export default function Social() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {LINKS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          style={{
            display: 'inline-flex',
            width: 56,
            height: 56,
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff',
            color: '#111',
            textDecoration: 'none',
            boxShadow: '0 6px 18px rgba(2, 6, 23, 0.4)',
            transition: 'transform 0.18s ease, box-shadow 0.18s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 14px 36px rgba(2,6,23,0.45)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 6px 18px rgba(2, 6, 23, 0.4)';
          }}
        >
          <span style={{ display: 'inline-flex', color: 'inherit' }}>{item.svg}</span>
        </a>
      ))}
    </div>
  );
}
