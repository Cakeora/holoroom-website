
// CountdownBox.tsx
import * as React from 'react';
import './CountdownBox.css';

type CountdownBoxProps = {
  value: string;
  label: string;
}

export const CountdownBox: React.FC<CountdownBoxProps> = ({ value, label }) => (
  <div className="countdown-box">
    <div className="countdown-value">{value}</div>
    <div className="countdown-label">{label}</div>
  </div>
);