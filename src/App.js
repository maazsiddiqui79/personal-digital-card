// 1. Import statements (if needed)
import "./App.css";

import PortfolioCard from "./components/PortfolioCard";

// 2. Component funtion (Always Start with capital letter )
function App() {
  // 3. JavaScript Logic  goes here
  // 4. Return JSX (the UI part)
  return (
    // 5. Html Codes goes here
    <div className="App">
      <PortfolioCard/>
    </div>
  );
}

// 6. Export so other files can use it
export default App;
