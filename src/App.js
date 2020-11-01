import React from  'react'
import './App.css';
import Schedules from './components/Schedules';
import {Route, Switch} from 'react-router-dom'
import CreateSchedule1 from './components/CreateSchedule1';
import CreateSchedule2 from './components/CreateSchedule2'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://correct-pup-90.hasura.app/v1/graphql',
      headers: {
       
      }
    }),
    cache: new InMemoryCache(),
  });
 };


function App() {
  const client = createApolloClient();

  

  return (
  
    <ApolloProvider client={client}>
    
 

   
        <Switch>
        <Route exact path="/" >
        <Schedules></Schedules>

        </Route>
        <Route exact path='/step1'>
          <CreateSchedule1></CreateSchedule1>
 
        </Route>
        <Route exact path='/step2'>
          <CreateSchedule2></CreateSchedule2>
 
        </Route>

        </Switch>
        </ApolloProvider>
       
       
      
  
     
     
      
    
  );
}

export default App;
