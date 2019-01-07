import React from 'react';
import { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

class App extends Component{
    render(){
        return(
            
            <HashRouter>
                <div>
                    <Route path='/' component={Home} exact />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                </div>
            </HashRouter>
        );
    }
}

export default App;