import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './Screen/HomeScreen'
import AllEmployee from './Screen/AllEmployee'
import Age from './Screen/Age'
import JobTitle from './Screen/JobTitle'
import Name from './Screen/Name'

function App() {
  return (
    <Router>
  <Header />
    <main className='py-3'>
      <Container>
      <Route path='/' component={HomeScreen} exact/>
      <Route path='/name' component={Name} />      
      <Route path='/jobTitle' component={JobTitle} />
      <Route path='/age' component={Age} />
      <Route path='/allEmplayee' component={AllEmployee} />


      </Container>

    </main>
  <Footer />
    </Router>
  );
}

export default App;
