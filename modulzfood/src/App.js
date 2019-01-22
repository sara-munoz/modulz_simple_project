import React, {Component} from 'react';
import {Provider} from "react-redux";
import store from './store/store';
import FoodContainer from './components/FoodContainer';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <FoodContainer/>
                </div>
            </Provider>
        );
    }
}

export default App;
