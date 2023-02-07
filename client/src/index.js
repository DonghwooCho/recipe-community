import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import indexStyle from './IndexStyle.module.css';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className={ indexStyle.index }>
        <span>
        <CookiesProvider>
            <Provider store={ store }>
                <App/>
            </Provider>
        </CookiesProvider>
        </span>
    </div>
);