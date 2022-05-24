import React, { useContext } from 'react';

import ReactDOM from 'react-dom';
import { App } from 'components/App/App';
import authContext from './context/authContext';

ReactDOM.render(
  <React.StrictMode>
    <authContext.Provider value={{ a: 1, b: 2 }}>
      <App />
    </authContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
