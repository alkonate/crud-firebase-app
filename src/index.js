import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import './i18n'
import reportWebVitals from './reportWebVitals';
import FirebaseProvider from './components/Firebase'
import AuthProvider from './components/Authentication'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </FirebaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
