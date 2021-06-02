import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screen/homeScreen/HomeScreen';
import './_app.scss';
import LoginScreen from './screen/loginScreen/LoginScreen';
import WatchScreen from './screen/watchScreen/WatchScreen';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchScreen from './screen/SearchScreen';

const Layout = ({ children }) => {

  const [sidebar, toggleSidebar] = useState(false)

  const handleToggleSidebar = () => toggleSidebar(value => !value)
  
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className='app__container'>
    
        <Sidebar 
          sidebar={sidebar}
          handleToggleSidebar={handleToggleSidebar} 
        />
        <Container fluid className='app_main'>
          {children}
        </Container>
        
      </div>    
    </>
  )
}

const App = () => {

  const { accessToken, loading } = useSelector( state => state.auth )

  const history = useHistory()

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push('/login')
    }
  }, [ accessToken, loading, history ])

  return (

    <Switch>

      <Route path='/' exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>

      <Route path='/login'>
        <LoginScreen />
      </Route>

      <Route path='/search/:query'>
        <Layout>
          <SearchScreen />
        </Layout>
      </Route>

      <Route path='/watch/:id'>
        <Layout>
          <WatchScreen />
        </Layout>
      </Route>

      <Route>
        <Redirect to='/' />
      </Route>

    </Switch>  
  )
}

export default App
