export default function Lily({ className = '' }) {
    const petals = Array.from({ length: 7 });
    const stamens = Array.from({ length: 8 });

    return (
        <div className={`spider-lily ${className}`} aria-hidden="true">
            <div className="lily-glow" />
            <div className="lily-center" />

            {petals.map((_, i) => (
                <i key={i} className={`petal p${i}`} />
            ))}

            {stamens.map((_, i) => (
                <b key={i} className={`stamen s${i}`} />
            ))}
        </div>
    );
}