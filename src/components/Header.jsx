import { Sun, Moon } from 'lucide-react';
import { navItems } from '../data/content';

export default function Header({ dark, setDark }) {
  return <header className="site-header">
    <div className="container nav-wrap">
      <a href="#home" className="brand">
        <span className="brand-mark"><img className="brand-flower-logo" src={`${import.meta.env.BASE_URL}assets/spider-lily-logo.jpg`} alt="Red spider lily logo" /></span>
        <span><strong>KEO SOPHARANITH</strong><small>FULL STACK · CYBERSECURITY</small></span>
      </a>
      <nav className="nav-links">
        {navItems.map((id, i) => <a key={id} href={`#${id}`}>{id}</a>)}
      </nav>
      <div className="header-tools">
        <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle light and dark mode">{dark ? <Sun size={15}/> : <Moon size={15}/>}</button>
        <a className="header-cta" href={`${import.meta.env.BASE_URL}cv.html`} target="_blank" rel="noreferrer">Print CV</a>
      </div>
    </div>
  </header>;
}
