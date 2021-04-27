import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/About'
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <main>
        <Nav></Nav>
        <About></About>
      </main>
    </div>
  );
}

export default App;
