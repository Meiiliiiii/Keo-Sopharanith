import { X } from 'lucide-react';
import { caseStudies } from '../data/content';

export default function DemoModal({ id, onClose }) {
    const modal = caseStudies[id];

    if (!modal) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal" onClick={handleBackdropClick}>
            <div className="modal-panel">
                <button className="modal-close" onClick={onClose}>
                    <X />
                </button>

                <span className="kicker">{modal.eyebrow}</span>
                <h2>{modal.title}</h2>
                <p className="modal-intro">{modal.intro}</p>

                <div className="modal-meta">
                    {modal.meta.map((m) => (
                        <div key={m.label}>
                            <span>{m.label}</span>
                            <strong>{m.value}</strong>
                        </div>
                    ))}
                </div>

                <ol>
                    {modal.bullets.map((b, i) => (
                        <li key={b}>
                            <b>0{i + 1}</b>
                            {b}
                        </li>
                    ))}
                </ol>

                <div className="verdict">
                    <span>CONCLUSION</span>
                    <p>{modal.verdict}</p>
                </div>
            </div>
        </div>
    );
}