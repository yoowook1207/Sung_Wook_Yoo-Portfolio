import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Home from './components/pages/Home';
import Footer from './components/Footer';

function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="App px-3">
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <main>
          {renderPage()}
        </main>
      </div>
      <div className='container footer'>
            <Footer/>
      </div>
    </div>
  );
}

export default App;
