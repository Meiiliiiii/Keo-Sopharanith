import { Code2, Server, ShieldCheck, Terminal } from 'lucide-react';
import { skillCards, toolkit } from '../data/content';

const icons = {
    code: Code2,
    server: Server,
    shield: ShieldCheck,
    terminal: Terminal,
};

export default function Skills() {
    return (
        <section id="skills" className="section dark-section">
            <div className="container">
                <div className="section-intro reveal">
                    <div>
                        <span className="kicker">02 / CAPABILITIES</span>
                        <h2>
                            A toolkit built<br />
                            for <em>real systems.</em>
                        </h2>
                    </div>
                    <p>
                        Full stack development and cybersecurity meet here — with languages, frameworks and analysis tools shown separately from my projects.
                    </p>
                </div>

                <div className="skills-grid">
                    {skillCards.map(([num, title, text, tags, iconKey]) => {
                        const Icon = icons[iconKey];

                        return (
                            <article className="skill-card reveal" key={title}>
                                <div className="card-top">
                                    <span>{num}</span>
                                    {Icon && <Icon size={19} />}
                                </div>

                                <h3>{title}</h3>
                                <p>{text}</p>

                                <div className="tags">
                                    {tags.map((t) => (
                                        <span key={t}>{t}</span>
                                    ))}
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="toolkit reveal">
                    <div className="toolkit-title">
                        <span>LANGUAGES / STACK / TOOLS</span>
                        <strong>What I use to turn ideas into working software and security analysis.</strong>
                    </div>

                    {toolkit.map(([tool, purpose, status]) => (
                        <div className="toolkit-row" key={tool}>
                            <strong>{tool}</strong>
                            <span>{purpose}</span>
                            <b>{status}</b>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}