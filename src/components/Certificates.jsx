import { ArrowUpRight, Award } from 'lucide-react';

export default function Certificates({ setCert }) {
    const certs = [
        {
            image: `${import.meta.env.BASE_URL}assets/certificate-uml.webp`,
            title: 'UML — Unified Modeling Language',
            issuer: 'Mind Luster · 6 hours',
            focus: 'Systems modeling',
        },
        {
            image: `${import.meta.env.BASE_URL}assets/certificate-java.webp`,
            title: 'OOPs in Java',
            issuer: 'Simplilearn SkillUp',
            focus: 'Object-oriented programming',
        },
    ];

    return (
        <section id="certificates" className="section certificates-section">
            <div className="container">
                <div className="section-intro reveal">
                    <div>
                        <span className="kicker">06 / CERTIFICATES</span>
                        <h2>
                            Proof of<br />
                            <em>what I keep learning.</em>
                        </h2>
                    </div>
                    <p>
                        Selected learning milestones that support my programming and system-building foundation.
                    </p>
                </div>

                <div className="cert-list">
                    {certs.map(({ image, title, issuer, focus }, i) => (
                        <article className="cert-item reveal" key={title}>
                            <div className="cert-number">0{i + 1}</div>

                            <div className="cert-thumb">
                                <img src={image} alt={title} />
                            </div>

                            <div className="cert-details">
                                <span>{focus}</span>
                                <h3>{title}</h3>
                                <p>{issuer}</p>
                                <button onClick={() => setCert({ image, title })}>
                                    View certificate <ArrowUpRight size={14} />
                                </button>
                            </div>

                            <Award className="cert-icon" size={24} />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}