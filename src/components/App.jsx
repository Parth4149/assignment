import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Navbar";
import Montages from "./Montages";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const App = () => {
  const theme = useTheme();
  return (
    <main>
      <CssBaseline />
      <Navbar theme={theme} />
      <Routes>
        <Route path="/" element={<Montages theme={theme} />} />
      </Routes>
    </main>
  );
};

export default App;
