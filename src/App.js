import React from 'react';
//routing
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import MovieProject from './components/MovieProject';
import Resume from './components/Resume';
import Contact from './components/Contact';

//styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movieProject' element={<MovieProject/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/:movieId' element={<Movie/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <GlobalStyle />
    </Router>
  );


export default App;
