import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;