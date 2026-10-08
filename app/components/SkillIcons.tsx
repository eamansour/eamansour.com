import { motion } from 'motion/react';
import { Languages, Technologies } from '@/data/skills';

const SkillGroup = ({
  title,
  skills,
}: {
  title: string;
  skills: typeof Languages;
}) => (
  <div className="skill-group">
    <h3>{title}</h3>
    <ul>
      {skills.map(({ name, Icon }) => (
        <motion.li
          key={name}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.18 }}
          className="skill-item"
        >
          <Icon aria-hidden="true" />
          <span>{name}</span>
        </motion.li>
      ))}
    </ul>
  </div>
);

const SkillIcons = () => (
  <div className="skills-grid">
    <SkillGroup title="Languages" skills={Languages} />
    <SkillGroup title="Technologies & tools" skills={Technologies} />
  </div>
);

export default SkillIcons;
