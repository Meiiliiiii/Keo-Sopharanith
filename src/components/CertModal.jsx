import { X } from 'lucide-react';

export default function CertModal({ cert, onClose }) {
    if (!cert) return null;

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

                <h2>{cert.title}</h2>
                <img src={cert.image} alt={cert.title} style={{ width: '100%', height: 'auto', marginTop: '16px' }} />
            </div>
        </div>
    );
}