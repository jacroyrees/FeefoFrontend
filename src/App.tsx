import { ThemeProvider, type DefaultTheme } from "styled-components";
import "./App.css";
import theme from "./assets/theme";
import ReviewCard from "./components/ReviewCard/ReviewCard";

function App() {
  const ratingsData = {
    5: 952,
    4: 171,
    3: 55,
    2: 14,
    1: 40,
  };

  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <ReviewCard rating={4.6} mode="primary" ratingsData={ratingsData} />
    </ThemeProvider>
  );
}

export default App;
