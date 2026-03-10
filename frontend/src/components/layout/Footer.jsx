import { FiGithub, FiLinkedin, FiTwitter, FiHeart, FiCode } from 'react-icons/fi';
import { personal, socialLinks } from '../../data/portfolioData';

const iconMap = { FiGithub, FiLinkedin, FiTwitter };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-0 border-t border-surface-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-accent-400 flex items-center justify-center">
              <FiCode className="text-white" size={14} />
            </div>
            <span className="font-bold text-text-primary">
              Pavan<span className="text-primary-500">.</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-text-muted text-sm flex items-center gap-1.5">
            © {year} {personal.name}. Crafted with
            <FiHeart className="text-red-400 fill-current" size={13} />
            &amp; lots of coffee.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(link => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-text-muted hover:text-primary-500 hover:bg-primary-50 transition-all duration-200 hover:scale-110"
                >
                  {Icon && <Icon size={17} />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
