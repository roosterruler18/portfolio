import React from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Header from './components/NavBar/Header';
import AppRoutes from './routes/Routes';


const App: React.FunctionComponent = () => {
    return (
        <ErrorBoundary>
            <AppRoutes>
                <Header />
            </AppRoutes>
        </ErrorBoundary>
    );
};


export default App;
