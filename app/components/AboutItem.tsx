import { FiExternalLink } from 'react-icons/fi';

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
}: AboutItemProps) => {
  return (
    <div
      className="w-3/4 mb-1 pb-1 border-b-2 border-blurple-100 hover:border-blue hover:bg-grey-100 hover:bg-opacity-50 transition-colors hover:cursor-pointer overflow-hidden"
      onClick={() => window.open(href, '_blank', 'noopener noreferrer')}
    >
      <div className="flex flex-col p-5">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg">
            {title}
            <span className="font-medium"> | {subtitle}</span>
          </h3>
          <FiExternalLink className="hidden md:block text-lg" />
        </div>
        <p className="font-light text-base">
          <em>
            {date} {location ? `| ${location}` : ''}
          </em>
        </p>
      </div>
    </div>
  );
};

export default AboutItem;
