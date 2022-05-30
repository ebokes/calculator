import { ThemeProvider } from "styled-components";
import "./App.css";
import Layout from "./components/layout/Layout";

const theme = {
  color: {
    body: "#17181A",
    button: {
      special: {
        bg: "#616161",
        fg: "#A5A5A5",
      },
      operator: {
        bg: "#005DB2",
        fg: "#B2DAFF",
      },
      digits: {
        bg: "#303136",
        fg: "#29A8FF",
      },
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
