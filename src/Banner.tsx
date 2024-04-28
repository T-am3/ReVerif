import { FC } from 'react';

interface BannerProps {
  text: string;
  color?: string;
  link?: string;
}

const Banner: FC<BannerProps> = ({ text, color, link }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: color || '#007bff',
        color: '#3e49aa',
        padding: '10px',
        textAlign: 'center',
        fontSize: '0.8rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      {link ? (
        <a href={link} style={{ color: '#fff', textDecoration: 'none' }}>
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default Banner;
