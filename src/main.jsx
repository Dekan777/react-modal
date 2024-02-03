import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
import { App } from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { HashRouter } from 'react-router-dom'; // Изменение импорта на HashRouter
// import 'modern-normalize';
// import { App } from './components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <HashRouter>
//       {' '}
//       {/* Замена BrowserRouter на HashRouter */}
//       <App />
//     </HashRouter>
//   </React.StrictMode>
// );
