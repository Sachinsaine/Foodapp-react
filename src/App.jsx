import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ContextProvider } from "./ContextProvider";
import { Dashboard } from "./Dashboard";
import { Navbar } from "./Navbar";
import { ItemDetails } from "./ItemDetails";
import { WishList } from "./WishList";

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/itemDetails/:id" element={<ItemDetails />} />
            <Route path="/wishlist" element={<WishList />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
