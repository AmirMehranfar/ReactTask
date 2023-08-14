import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { store } from './redux/store.ts';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>
);
