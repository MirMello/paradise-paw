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
      <body className='container'>
        <div className='navColumn'>
            <Navbar></Navbar>
        </div>
        <div className='column-2'>
          <Homepage></Homepage>
          <Footer></Footer>
        </div>
      </body>

    </ApolloProvider>
  );
}

export default App;
