import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProviderTask } from './context/Contex.task.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <div className='background min-h-screen '>

    <React.StrictMode>
        <ProviderTask>
        <App />
        </ProviderTask>
    </React.StrictMode>,
    </div>
)