import { ArrowUpRight, Copy, Github, Mail, Facebook, Instagram, Send, Music2, Phone } from 'lucide-react';
import { socials } from '../data/content';

export default function Footer({ copyEmail }) {
    const navLinks = ['about', 'skills', 'projects', 'education', 'contact'];

    const socialLinks = [
        { href: socials.facebook, icon: Facebook, label: 'Facebook' },
        { href: socials.instagram, icon: Instagram, label: 'Instagram' },
        { href: socials.tiktok, icon: Music2, label: 'TikTok' },
        { href: socials.telegram, icon: Send, label: 'Telegram' },
    ];

    const formattedPhone = socials.phone.replaceAll(' ', '');

    return (
        <footer className="footer">
            <div className="container footer-top">
                <div>
                    <div className="footer-brand">
                        KEO SOPHARANITH<span>.</span>
                    </div>
                    <p>
                        Full Stack Developer in progress · Cybersecurity practice · Building clean interfaces, practical systems and thoughtful software.
                    </p>
                </div>

                <div className="footer-links">
                    <span>NAVIGATE</span>
                    {navLinks.map((x) => (
                        <a key={x} href={`#${x}`}>
                            {x}
                            <ArrowUpRight size={13} />
                        </a>
                    ))}
                </div>

                <div className="footer-links">
                    <span>CONNECT</span>
                    <a href={`mailto:${socials.email}`}>
                        <Mail size={13} />
                        {socials.email}
                    </a>
                    <a href={`tel:${formattedPhone}`}>
                        <Phone size={13} />
                        {socials.phone}
                    </a>
                    <button onClick={copyEmail}>
                        <Copy size={13} />
                        Copy email
                    </button>
                    <a href={socials.github} target="_blank" rel="noreferrer">
                        <Github size={13} />
                        GitHub
                    </a>

                    <div className="social-row">
                        {socialLinks.map(({ href, icon: Icon, label }) => (
                            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                                <Icon size={15} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container footer-bottom">
                <span>© 2026 KEO SOPHARANITH</span>
                <span>FULL STACK · CYBERSECURITY · CAMBODIA</span>
                <a href="#home">BACK TO TOP ↑</a>
            </div>
        </footer>
    );
}