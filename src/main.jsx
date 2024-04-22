import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { MousePositionProvider } from './context/MousePositonContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <MousePositionProvider>
            <App />
        </MousePositionProvider>
    </ThemeProvider>
)
