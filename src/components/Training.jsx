export default function Training() {
    const languagesAndCourses = [
        {
            category: 'CYBERSECURITY',
            title: 'Short Course · Current',
            subtitle: 'Currently studying',
        },
        {
            category: 'CHINESE',
            title: 'GCP8 · HSK 4',
            subtitle: 'Spring Education Center',
        },
        {
            category: 'CHINESE',
            title: 'Level 4A',
            subtitle: 'IFL Short Course',
        },
        {
            category: 'ENGLISH',
            title: 'Fluent',
            subtitle: 'Studied 2014 — 2020',
        },
    ];

    return (
        <section id="training" className="section dark-section training-section">
            <div className="container">
                <div className="section-intro reveal">
                    <div>
                        <span className="kicker">05 / CONTINUOUS LEARNING</span>
                        <h2>
                            Still learning.<br />
                            <em>Always building.</em>
                        </h2>
                    </div>
                    <p>
                        Formal education gives me the foundation. Projects, security research and language study turn it into working skill.
                    </p>
                </div>

                <div className="training-feature reveal">
                    <div className="training-mark">
                        FS<span>+</span>
                    </div>
                    <div>
                        <span className="meta">CURRENT DIRECTION</span>
                        <h3>Full Stack Development + Cybersecurity</h3>
                        <p>
                            Hands-on web development, application design, debugging, databases, reverse engineering and defensive security research — with an emphasis on understanding the whole system.
                        </p>
                    </div>
                    <span className="training-index">05</span>
                </div>

                <div className="training-languages reveal">
                    {languagesAndCourses.map(({ category, title, subtitle }, index) => (
                        <div
                            key={`${category}-${title}`}
                            className={index === 0 ? 'training-current' : undefined}
                        >
                            <span>{category}</span>
                            <strong>{title}</strong>
                            <small>{subtitle}</small>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}