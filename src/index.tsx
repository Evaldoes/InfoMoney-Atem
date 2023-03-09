import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import theme from './styles/themes/themes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  // <React.StrictMode>
  // <ChakraProvider>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  // </ChakraProvider>,
  // </React.StrictMode>
);
