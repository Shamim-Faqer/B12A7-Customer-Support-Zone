import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Tickets from "./components/Tickets";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Header />

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
