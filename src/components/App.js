import React, { Component } from 'react';
import Home from './Home'
import Gallery from './Gallery'
import Contact from './Contact'
import Navbar from './NavBar'
import BottomNav from './BottomNav'
import CategoryGallery from './CategoryGallery'
import{
    BrowserRouter,
    Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
              <Navbar/>
              <Route exact path='/' component={Home} />
              <Route path='/gallery/:category' component={CategoryGallery} />
              <Route exact path='/gallery' component={Gallery} />
              <Route path='/contact' component={Contact} />
              <BottomNav/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
