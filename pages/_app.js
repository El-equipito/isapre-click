import '../styles/global.scss';  // Estilos globales
import 'react-toastify/dist/ReactToastify.css'; // Estilos de react-toastify
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from 'react-toastify';
import WhatsAppButton from '../components/Rrss/WhatsAppButton';

let theme = createTheme({
  colors: {
    black: "000000",
    primary: "#066c8e",
    primary_deep: "#02212C",
    secondary: "#2E2E2E",
    white: "#FFFFFF",
    disabled: "#e8e8ef",
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        {/* Renderizado de la página actual */}
        <Component {...pageProps} />

        {/* Componente Global: Botón de WhatsApp */}
        <WhatsAppButton />

        {/* Contenedor de notificaciones */}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </>
    </ThemeProvider>
  );
}

export default MyApp;