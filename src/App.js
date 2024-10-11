import './App.css';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from 'react';
import News from './components/News';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const apikey = process.env.REACT_APP_NEWSAPP_API;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // console.log(apikey); // Log the API key to check its value
  }, [apikey]);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={2}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route 
            exact path='/' 
            element={<News setProgress={setProgress} apikey={apikey} key='general' pageSize={6} country={'us'} cat={'general'} clr={'red'} />} 
          />
          <Route 
            exact path='/business' 
            element={<News setProgress={setProgress} apikey={apikey} key='business' pageSize={6} country={'us'} cat={'business'} />} 
          />
          <Route 
            exact path='/sports' 
            element={<News setProgress={setProgress} apikey={apikey} key='sports' pageSize={6} country={'us'} cat={'sports'} />} 
          />
          <Route 
            exact path='/entertainment' 
            element={<News setProgress={setProgress} apikey={apikey} key='entertainment' pageSize={6} country={'us'} cat={'entertainment'} />} 
          />
          <Route 
            exact path='/health' 
            element={<News setProgress={setProgress} apikey={apikey} key='health' pageSize={6} country={'us'} cat={'health'} />} 
          />
          <Route 
            exact path='/science' 
            element={<News setProgress={setProgress} apikey={apikey} key='science' pageSize={6} country={'us'} cat={'science'} />} 
          />
          <Route 
            exact path='/technology' 
            element={<News setProgress={setProgress} apikey={apikey} key='technology' pageSize={6} country={'us'} cat={'technology'} />} 
          />
          <Route 
            exact path='/about' 
            element={<About setProgress={setProgress} />} 
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
