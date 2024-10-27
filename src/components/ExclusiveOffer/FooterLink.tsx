import * as React from 'react';

type FooterLinkProps = {
  text: string;
  className?: string;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ text, className }) => (
  <a 
    href="#" 
    className={`mt-5 text-xl font-medium text-green-200 hover:text-white transition-colors ${className || ''}`}
  >
    {text}
  </a>
);
