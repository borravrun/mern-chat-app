import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import 'material-react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'material-react-toastify';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 3,
            retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
            staleTime: 5 * 60 * 1000, // 5 minutes
            cacheTime: 10 * 60 * 1000, // 10 minutes
        },
        mutations: {
            retry: 1,
            retryDelay: 1000,
        },
    },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
              <ToastContainer position={"top-right"} theme={'colored'} />
              <App />
          </BrowserRouter>
      </QueryClientProvider>
  </StrictMode>
)
