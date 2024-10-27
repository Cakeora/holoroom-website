import * as React from 'react';

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
    className={`object-contain shrink-0 aspect-square w-[38px] ${className || ''}`} 
  />
);