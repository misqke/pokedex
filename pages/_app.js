import "../styles/globals.scss";
import axios from "axios";

// axios.defaults.baseURL = "https://misqke-pokemon-api.herokuapp.com/";
// axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.baseURL = "https://pokiapi.deta.dev/";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
