import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import VideoShowcase from './components/Showcase';
import ClientsSection from './components/ClientsSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoShowcase />
      <Services />
      <ClientsSection />
      {/* <Portfolio /> */}
      <About />
      <Contact />
    </main>
  );
}
