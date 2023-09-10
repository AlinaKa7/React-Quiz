import React from 'react';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import { Main }  from './components/main';

function App() {
  return ( 
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
