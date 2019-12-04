import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/index';
import { SideMenu } from './components/SideMenu/index';
import { Navbar } from './components/Navbar/index';

export function App() {
  return (
    <div>
      <Header />
      <SideMenu />
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}