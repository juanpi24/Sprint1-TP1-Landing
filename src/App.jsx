// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Courses from './components/Courses';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const brandName = 'RoboKids';

  const handleCourseClick = (course) => {
    alert(
      `Elegiste consultar por el curso: ${course.title}. ¡Siguiente cohorte inicia pronto!`,
    );
  };

  return (
    <>
      <Navbar />
      <main className="pb-16 pt-20">
        <Hero
          title="Plataforma 100% online"
          subtitle="Aprendé robótica y programación desde casa. Conectamos la curiosidad natural con las herramientas tecnológicas del futuro, en un entorno seguro y divertido.."
        />
        <Benefits />
        <Courses onCourseClick={handleCourseClick} />
        <ContactForm />
      </main>
      <Footer brandName={brandName} />
    </>
  );
}
