import { ArrowUpRight, Mail, Github, Phone, Facebook, Instagram, Send, Music2 } from 'lucide-react';
import { socials } from '../data/content';

export default function Contact() {
    const formattedPhone = socials.phone.replaceAll(' ', '');

    const socialLinks = [
        { href: socials.facebook, icon: Facebook, label: 'Facebook' },
        { href: socials.instagram, icon: Instagram, label: 'Instagram' },
        { href: socials.tiktok, icon: Music2, label: 'TikTok' },
        { href: socials.telegram, icon: Send, label: 'Telegram' },
    ];

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-intro reveal">
                    <div>
                        <span className="kicker">08 / CONTACT</span>
                        <h2>
                            Let’s make<br />
                            <em>something useful.</em>
                        </h2>
                    </div>
                    <p>
                        Open to internships, junior Full Stack Developer roles, cybersecurity opportunities, technical collaborations and projects where I can contribute while continuing to grow.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-card contact-primary reveal">
                        <div className="contact-card-top">
                            <span>START A CONVERSATION</span>
                            <span>01</span>
                        </div>
                        <h3>Have a project, opportunity, or idea?</h3>
                        <p>
                            The fastest way to reach me is by email or phone. I’m also active across the social platforms below.
                        </p>
                        <div className="contact-actions">
                            <a className="button button-red" href={`mailto:${socials.email}`}>
                                Email me <ArrowUpRight size={16} />
                            </a>
                            <a className="button button-line" href={`tel:${formattedPhone}`}>
                                Call <Phone size={15} />
                            </a>
                        </div>
                    </div>

                    <div className="contact-card contact-details reveal">
                        <div className="contact-card-top">
                            <span>DIRECT CONTACT</span>
                            <span>02</span>
                        </div>
                        <a href={`mailto:${socials.email}`}>
                            <Mail size={17} />
                            <span>
                                <small>EMAIL</small>
                                {socials.email}
                            </span>
                        </a>
                        <a href={`tel:${formattedPhone}`}>
                            <Phone size={17} />
                            <span>
                                <small>PHONE</small>
                                {socials.phone}
                            </span>
                        </a>
                        <a href={socials.github} target="_blank" rel="noreferrer">
                            <Github size={17} />
                            <span>
                                <small>GITHUB</small>
                                Meiiliiiii
                            </span>
                        </a>
                    </div>

                    <div className="contact-card contact-socials reveal">
                        <div className="contact-card-top">
                            <span>FIND ME ONLINE</span>
                            <span>03</span>
                        </div>
                        <div className="social-grid">
                            {socialLinks.map(({ href, icon: Icon, label }) => (
                                <a key={label} href={href} target="_blank" rel="noreferrer">
                                    <Icon size={18} />
                                    <span>{label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}