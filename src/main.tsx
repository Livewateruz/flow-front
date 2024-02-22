import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';

// Tailwind css
import './tailwind.css';

// i18n (needs to be bundled)
import './i18n';

// Router

// Redux
import { Provider } from 'react-redux';
import DefaultRouterProvider from './router/index';
import store from './store/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Suspense>
                <Provider store={store}>
                    <DefaultRouterProvider />
                </Provider>
        </Suspense>
    </React.StrictMode>
);
