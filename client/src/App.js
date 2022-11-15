import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import React from 'react';

import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';

import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>

      <div className='container'>
        <nav className='navColumn'>
          <Navbar></Navbar>
        </nav>
        <div>
          <body>
            <Homepage></Homepage>
          </body>
          <footer></footer>
        </div>
      </div>

    </ApolloProvider>
  );
}

export default App;
