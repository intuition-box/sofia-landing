import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { WalletProvider } from './lib/web3/PrivyContext';
import './styles/global.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WalletProvider>
      <App />
    </WalletProvider>
  </StrictMode>,
);
