// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Courses from "./components/Courses";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pb-16 pt-20">
        <Hero />
        <Benefits />
        <Courses />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
