import { FaExternalLinkAlt } from 'react-icons/fa';

export interface AboutItemProps {
  title: string;
  subtitle: string;
  date: string;
  href: string;
  location?: string;
}

const AboutItem = ({
  title,
  subtitle,
  date,
  href,
  location,
}: AboutItemProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="career-item"
  >
    <div>
      <h4>{title}</h4>
      <p className="career-subtitle">{subtitle}</p>
      <p className="career-meta">{date}{location ? ` · ${location}` : ''}</p>
    </div>
    <FaExternalLinkAlt aria-hidden="true" />
  </a>
);

export default AboutItem;
