// SocialIcon.tsx
import * as React from 'react';
import './SocialIcon.css';

type SocialIconProps = {
  src: string;
  alt: string;
  className: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, className }) => (
  <img 
    loading="lazy" 
    src={src} 
    alt={alt}
    className={`social-icon ${className || ''}`}
  />
);