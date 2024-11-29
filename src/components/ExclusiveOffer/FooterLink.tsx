// FooterLink.tsx
import * as React from 'react';
import './FooterLink.css';

type FooterLinkProps = {
  text: string;
  className?: string;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ text, className }) => (
  <a 
    href="https://r.mtdv.me/videos/s6cGXDqcE6" 
    className={`footer-link ${className || ''}`}
  >
    {text}
  </a>
);