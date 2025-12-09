import { useColorScheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";

function App() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
