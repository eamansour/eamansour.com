import { motion } from 'motion/react';
import type { CSSProperties } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface CardProps {
  title: string;
  description: string;
  tags: string[];
  url: string;
  img: string;
}

const Card = ({ title, description, tags, url, img }: CardProps) => {
  const cardStyle: CSSProperties & { '--project-image': string } = {
    '--project-image': `url(/images/${img})`,
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title}: ${description} (opens in a new tab)`}
      style={cardStyle}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      className="project-card"
    >
      <div className="project-card-content">
        <div className="project-card-topline">
          <FaExternalLinkAlt aria-hidden="true" />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="project-tags" aria-label="Technologies">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default Card;
