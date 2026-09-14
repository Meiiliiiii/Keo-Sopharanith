import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Background from './components/Background';
import Projects from './components/Projects';
import Training from './components/Training';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import DemoModal from './components/DemoModal';
import CertModal from './components/CertModal';

export default function App() {
  const [modal, setModal] = useState(null);
  const [cert, setCert] = useState(null);
  const [toast, setToast] = useState('');
  const [dark, setDark] = useState(() => localStorage.getItem('portfolio-theme') === 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText('ranith9876@gmail.com'); setToast('Email copied'); }
    catch { setToast('ranith9876@gmail.com'); }
    setTimeout(() => setToast(''), 1800);
  };

  return <>
    <Header dark={dark} setDark={setDark} />

    <main>

      <Hero />
      <About />
      <Skills />
      <Background />

      <Projects setModal={setModal} />
      <Training />
      <Certificates setCert={setCert} />
      <section id="education" className="section education-section">
        <div className="container">
          
          <div className="section-intro reveal"><div>

            <span className="kicker">07 / EDUCATION & LANGUAGES</span>
            <h2>The foundation<br/><em>behind the work.</em></h2>
            </div><p>Formal study, language learning and hands-on technical practice — kept separate so each part tells the right story.</p></div>
          
          <div className="education-list">

            <div className="education-row reveal">
              <span>2024 — PRESENT</span>
              <div><h3>Royal University of Phnom Penh</h3><p>Bachelor of Information Technology Engineering</p></div><b>01</b></div>
            
            <div className="education-row reveal">
              <span>CURRENT</span>
              <div><h3>Chinese — Spring Education Center</h3><p>GCP8 · HSK 4</p></div><b>02</b></div>
            
            <div className="education-row reveal">
              <span>CURRENT</span>
              <div><h3>Chinese — IFL Short Course</h3><p>Level 4A</p></div><b>03</b></div>
            
            <div className="education-row reveal">
              <span>CURRENT</span>
              <div><h3>Cybersecurity Short Course</h3><p>Currently studying · school name omitted</p></div><b>04</b></div>
            
            <div className="education-row reveal">
              <span>2014 — 2020</span>
              <div><h3>English Studies</h3><p>Sovannaphum School</p></div><b>05</b></div>
          </div>
          
          <div className="language-cards reveal">
            <div><span>KHMER</span><strong>Native</strong></div>
            <div><span>ENGLISH</span><strong>Fluent</strong></div>
            <div><span>CHINESE</span><strong>Intermediate</strong></div>
          </div>
        
        </div>
      </section>
      <Contact />
    </main>
    
    <Footer copyEmail={copyEmail} />
    <BottomNav />
    <DemoModal id={modal} onClose={() => setModal(null)} />
    <CertModal cert={cert} onClose={() => setCert(null)} />
    {toast && <div className="toast">{toast}</div>}
  </>;
}