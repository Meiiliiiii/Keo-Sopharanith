export default function Background() {
    const cards = [
        [
            '2025 — PRESENT',
            'IT Support · Assistant · Translator',
            'PRIVATE DENTAL CLINIC',
            [
                'Day-to-day IT support and administrative operations.',
                'Patient communication and customer service.',
                'Khmer ↔ English translation.',
                'Appointment scheduling and records support.',
            ],
        ],
        [
            'ACADEMIC + PROJECTS',
            'Full Stack + Cybersecurity',
            'TECHNICAL PRACTICE',
            [
                'Responsive web development and database-backed systems.',
                'Static malware analysis and reverse engineering.',
                'Technical documentation and evidence-based reporting.',
                'Git/GitHub workflow and project presentation.',
            ],
        ],
        [
            '2024 — PRESENT',
            'Information Technology Engineering',
            'UNIVERSITY STUDY',
            [
                'Software development and system design foundations.',
                'Programming, databases and web technologies.',
                'Cybersecurity projects and technical analysis.',
                'Team projects, presentations and problem solving.',
            ],
        ],
    ];

    return (
        <section id="background" className="section background-section">
            <div className="container">
                <div className="section-intro reveal">
                    <div>
                        <span className="kicker">03 / BACKGROUND</span>
                        <h2>
                            Experience that<br />
                            <em>shaped the way I work.</em>
                        </h2>
                    </div>
                    <p>
                        Technical growth matters, but so do communication, patience and the ability to keep moving when the problem is unfamiliar.
                    </p>
                </div>

                <div className="background-grid">
                    {cards.map(([year, title, place, items], i) => (
                        <article className="background-card reveal" key={title}>
                            <div className="card-number">0{i + 1}</div>
                            <span className="meta">{year}</span>
                            <h3>{title}</h3>
                            <span className="place">{place}</span>
                            <ul>
                                {items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}