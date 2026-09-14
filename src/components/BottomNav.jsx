import { Home, UserRound, BriefcaseBusiness, Award, Mail } from 'lucide-react';

export default function BottomNav() {
    const navItems = [
        { href: '#home', icon: Home, label: 'Home' },
        { href: '#about', icon: UserRound, label: 'About' },
        { href: '#projects', icon: BriefcaseBusiness, label: 'Work' },
        { href: '#certificates', icon: Award, label: 'Proof' },
        { href: '#contact', icon: Mail, label: 'Contact' },
    ];

    return (
        <nav className="bottom-nav" aria-label="Mobile navigation">
            {navItems.map(({ href, icon: Icon, label }) => (
                <a key={href} href={href}>
                    <Icon size={16} />
                    <span>{label}</span>
                </a>
            ))}
        </nav>
    );
}