import React from 'react';
import {Route} from 'react-router-dom';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Main from './main/main';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className='app'>
        <Sidebar />
        <Main />
      </main>
    </>
  );
}
export default App;