import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DarkModeContextProvider } from './context/DarkModecontext.jsx'
import { AuthContextProvider } from './context/authContext.jsx'
import { ShowStoriesContextProvider } from './context/showStoriesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <ShowStoriesContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ShowStoriesContextProvider>
    </DarkModeContextProvider>

  </React.StrictMode>,
)
