import { createTheme, ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";
import "../styles/home.css"
import Header from "../component/header";
import Footer from "../component/footer";
import store from "../store/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
const theme = createTheme({
  palette: {
    mode: "light",
    white: {
      main: "#fbfbfb",
    },
    primary: {
      main: "#9b834d",
    },
    secondary: {
      main: grey[900],
    },
    grey: {
      main: grey[600],
    },
  },
  typography: {
    fontFamily: "'Source Sans Pro', sans-serif",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div >
        <Toaster position='top-right' toastOptions={{
          success: {
            theme: {
              primary: '#4aed88',
            }
          }
        }} ></Toaster>
      </div>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}
