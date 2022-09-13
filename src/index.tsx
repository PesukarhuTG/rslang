import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import './styles/style.css';
import Store from './store/store';

interface State {
  store: Store;
}

const store = new Store();

export const Context = createContext<State>({ store });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Context.Provider value={{ store }}>
        <App />
      </Context.Provider>
    </React.StrictMode>
  </BrowserRouter>
);
