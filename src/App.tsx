import React from 'react';
import css from './app.module.scss';
import { Header } from './components/Header';
import { SideMenu } from './components/SideMenu';
import { Navbar } from './components/Navbar';
import { Slider } from './components/Slider';
import { CurrencyProvider } from './context/currency';

export function App() {
  return (
    <div className={css.container}>
      <CurrencyProvider>
        <Header />
        <main className={css.wrapper}>
          <Navbar />
          <SideMenu />
          <Slider
            products={[
              {
                title: 'The Witcher 3: Wild Hunt',
                description: 'Become a professional monster slayer.',
                imageUrl: 'https://img1.goodfon.com/wallpaper/nbig/7/b3/the-witcher-3-wild-hunt-507.jpg',
                price: 29.99,
                rate: 4.5,
                releaseDate: 'May 2015',
                tags: ['RPG'],
                votes: 50293
              },
              {
                title: 'The Witcher 1: Wild Stunt',
                description: 'Become a professional monster slayer.',
                imageUrl: 'https://img1.goodfon.com/wallpaper/nbig/7/b3/the-witcher-3-wild-hunt-507.jpg',
                price: 45.49,
                rate: 4.5,
                releaseDate: 'May 2015',
                tags: ['RPG'],
                votes: 50293
              }
            ]}
          />
        </main>
      </CurrencyProvider>
    </div>
  );
}