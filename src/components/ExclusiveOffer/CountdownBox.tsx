import * as React from 'react';

type CountdownBoxProps = {
  value: string;
  label: string;
}

export const CountdownBox: React.FC<CountdownBoxProps> = ({ value, label }) => (
  <div className="flex flex-col items-center px-5 py-4 bg-white rounded h-[100px] shadow-[0px_7px_30px_rgba(0,0,0,0.05)] w-[100px]">
    <div className="z-10 text-3xl font-semibold">{value}</div>
    <div className="mt-0 text-base font-medium">{label}</div>
  </div>
);