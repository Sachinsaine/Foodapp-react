import "./App.css";
import { ContextProvider } from "./ContextProvider";
import { Dashboard } from "./Dashboard";
import { Navbar } from "./Navbar";

function App() {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Dashboard />
      </ContextProvider>
    </>
  );
}

export default App;
