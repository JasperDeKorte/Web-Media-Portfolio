import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './pages/cv/Cv.css';
import "./components/navBar/navBar.css"
import "./pages/media/media.css"
import "./pages/profile/profile.css"
import "./components/cards/cards.css"
import "./components/work/work.css"
import "./components/projects/projects.css"
import "./components/education/education.css"
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
