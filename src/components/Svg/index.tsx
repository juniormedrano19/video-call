import React from 'react';
import DOMPurify from 'dompurify';
import styles from './icon.module.css';

interface IProps {
  fill?: string;
  width?: string;
  height?: string;
  className?: string;
  viewBox?: string;
  xmlns?: string;
  xmlnsXlink?: string;
  children?: React.ReactNode;
  icon: string;
}

const Svg = ({ children, icon, className, ...props }: IProps) => {
  if (!icon) {
    // Puedes manejar el caso cuando 'icon' es indefinido o no válido.
    return null;
  }

  const sanitizedHTML = DOMPurify.sanitize(icon);

  return (
    <div
      className={`${styles.icon} ${className}`}
      dangerouslySetInnerHTML={{
        __html: sanitizedHTML,
      }}
      {...props}
    ></div>
  );
};

export default Svg;
