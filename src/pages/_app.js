import { createTheme, ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";
import "../styles/home.css"
import Header from "../component/header";
import Footer from "../component/footer";
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
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
