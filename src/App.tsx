import React from 'react';
import { Header } from './components/Header';
import { SideMenu } from './components/SideMenu';
import { Navbar } from './components/Navbar';
import { Slider } from './components/Slider';

export function App() {
  return (
    <div>
      <Header />
      <SideMenu />
      <Navbar />
      <Slider products={[
        {
          title: 'The Witcher 3: Wild Hunt',
          description: 'Become a professional monster slayer.',
          imageUrl: 'https://img1.goodfon.com/wallpaper/nbig/7/b3/the-witcher-3-wild-hunt-507.jpg',
          price: [29, 99],
          rate: 4.5,
          releaseDate: 'May 2015',
          tags: ['RPG'],
          votes: 50293
        }
      ]} />
    </div>
  );
}