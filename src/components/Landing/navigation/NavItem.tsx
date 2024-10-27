import React from 'react';

type NavItemProps = {
  label: string;
};

export const NavItem: React.FC<NavItemProps> = ({ label }) => (
  <div className="label">
    {label}
  </div>
);
