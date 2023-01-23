import { createTheme, ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";
import "../styles/home.css"
import Header from "../component/header";
import Footer from "../component/footer";
import store from "../store/store";
import { Provider } from "react-redux";
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
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}
