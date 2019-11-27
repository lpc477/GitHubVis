import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form.jsx';
//import Button from './components/Button.jsx';
import SortedList from './components/SortedList.jsx';
import ProfileDetails from './components/ProfileDetails.jsx';
import LanguageList from './components/LanguageList.jsx';
//import Pie from './components/Pie.jsx';
import lda from 'lda';
import './App.css';
import 'react-bootstrap';
//import 'dash';
import './.env';
import 'react';
//import'bootstrap/dist/css/bootstrap.css';
//import'bootstrap/dist/css/bootstrap-theme.css';
import * as serviceWorker from './serviceWorker';
require ('dotenv').config('./.env');
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
