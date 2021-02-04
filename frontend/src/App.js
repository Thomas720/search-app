import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './Screen/HomeScreen'

function App() {
  return (
    <>
  <Header />
    <main className='py-3'>
      <Container>
     <HomeScreen />
      </Container>

    </main>
  <Footer />
    </>
  );
}

export default App;
