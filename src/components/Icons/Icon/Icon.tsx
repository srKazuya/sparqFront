import * as React from 'react';
import classNames from 'classnames';
import './icon.css'; // заменяем SCSS на CSS

export type IconProps = React.SVGAttributes<SVGElement> & {
  className?: string;
  color?: 'primary' | 'secondary' | 'accent';
};

const Icon: React.FC<React.PropsWithChildren<IconProps>> = (props: IconProps) => {
  const { className, children } = props;
  const color = props.color ?? 'primary';

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={classNames(className, 'root', color)}
      {...props}
    >
      {children}
    </svg>
  );
};

export default Icon;
