import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'

Amplify.configure(awsconfig)


function App() {
  return (
    <>
      <AmplifySignOut />
      <Home />
      </>
  );
}

export default withAuthenticator( App ); 
