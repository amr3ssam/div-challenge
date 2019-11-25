import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import MainPage from './MainPage'
import './App.css';

export default class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <MainPage />
            </BrowserRouter>
        );
    }
}
