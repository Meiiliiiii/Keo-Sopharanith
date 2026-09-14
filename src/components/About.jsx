export default function About() {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="section-intro reveal">
                    <div>
                        <span className="kicker">01 / PROFILE</span>
                        <h2>
                            Code from the<br />
                            interface to the <em>system.</em>
                        </h2>
                    </div>
                    <p>
                        My goal is simple: build software that looks intentional, works clearly and is considered from a security perspective.
                    </p>
                </div>

                <div className="about-grid">
                    <div className="about-statement reveal">
                        <span className="big-number">01</span>
                        <p>
                            I’m developing toward full stack work while building a serious foundation in cybersecurity — connecting frontend, backend, data and security thinking instead of treating them as separate worlds.
                        </p>
                    </div>

                    <div className="about-copy reveal">
                        <p>
                            My IT Engineering studies give me a technical foundation. Projects let me turn that knowledge into practical web systems, while cybersecurity projects train me to investigate evidence, understand compiled software and document findings responsibly.
                        </p>
                        <p>
                            I also bring real workplace experience in IT support, administration, communication and translation — the practical side of solving problems when requirements are not always perfect.
                        </p>

                        <div className="about-metrics">
                            <div>
                                <strong>FULL STACK</strong>
                                <span>Development focus</span>
                            </div>
                            <div>
                                <strong>CYBER</strong>
                                <span>Security focus</span>
                            </div>
                            <div>
                                <strong>BUILD + ANALYZE</strong>
                                <span>Working mindset</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}