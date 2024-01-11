import React from 'react';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './Components/ClientCheckinComponents/AuthContext.jsx';





    const root = createRoot(document.getElementById('root'));
    root.render(
        <AuthProvider>
        <App />
        </AuthProvider>
    );
    