import { ArrowDownRight, ArrowUpRight, Github, Printer } from 'lucide-react';
import Lily from './Lily';
import { socials } from '../data/content';

export default function Hero() {

  return <section id="home" className="hero">
    <div className="hero-noise"/><Lily className="lily-one"/><Lily className="lily-two"/>
    <div className="container hero-inner"><div className="hero-side reveal"><span className="vertical-label">PORTFOLIO / 2026</span><div className="hero-index">01<span>/</span>08</div></div>
      <div className="hero-content"><div className="hero-copy reveal">
        <span className="kicker">FULL STACK DEVELOPER · CYBERSECURITY</span>
        <h1>Build with<br/><em>intent.</em></h1>
        <p>I’m Keo Sopharanith — a full stack developer in progress with a cybersecurity focus. I build modern web systems from interface to application logic, while learning to inspect and secure the systems underneath.</p>
        <div className="hero-actions">
          <a className="button button-red" href="#projects">View selected work <ArrowUpRight size={16}/></a>
          <a className="button button-line" href={socials.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
          <a className="cv-link" href={`${import.meta.env.BASE_URL}cv.html`} target="_blank" rel="noreferrer"><Printer size={14}/> Print CV</a>
        </div>
      
      </div>
      <div className="hero-media reveal"><div className="portrait-frame"><div className="portrait-corner">PROFILE / 01</div>
      <img src={`${import.meta.env.BASE_URL}assets/profile.jpg`} alt="Keo Sopharanith professional portrait"/><div className="portrait-caption"><span>PHNOM PENH · CAMBODIA</span><b>OPEN TO OPPORTUNITIES</b></div></div>
        <div className="floating-note note-a">REACT<br/><small>COMPONENTS</small></div><div className="floating-note note-b">SECURITY<br/><small>EVIDENCE FIRST</small></div>
      </div></div>
    </div><a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={18}/></a>
  
  </section>;
}
