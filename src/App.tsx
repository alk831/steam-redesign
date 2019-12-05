import React from 'react';
import { Header } from './components/Header';
import { SideMenu } from './components/SideMenu';
import { Navbar } from './components/Navbar';

export function App() {
  return (
    <div>
      <Header />
      <SideMenu />
      <Navbar />
    </div>
  );
}