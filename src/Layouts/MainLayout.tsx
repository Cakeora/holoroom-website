// src/layouts/MainLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/Landing/navigation/Navigation';

export const MainLayout: React.FC = () => (
  <div>
    <Navigation />
    <main>
      <Outlet /> {/* This renders the nested routes */}
    </main>
  </div>
);
