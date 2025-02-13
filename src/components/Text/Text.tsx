import * as React from 'react';
import classNames from 'classnames';
import styles from './Text.module.scss';

export type TextProps = {
  /** Дополнительный класс */
  className?: string;
  /** Стиль отображения */
  view?: 'title' | 'button' | 'p-20' | 'p-18' | 'p-16' | 'p-14';
  /** Html-тег */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
  /** Начертание шрифта */
  weight?: 'normal' | 'medium' | 'bold';
  /** Контент */
  children: React.ReactNode;
  /** Цвет */
  color?: 'primary' | 'secondary' | 'accent';
  /** Максимальное кол-во строк */
  maxLines?: number;
};

const Text: React.FC<TextProps> = (props: TextProps) => {
  const { className, tag, children, maxLines } = props;

  const Tag = tag || 'p';

  const color = props.color ?? 'primary';
  const view = props.view ?? 'p-14';
  const weight = props.weight ?? 'normal';



  return (
    <Tag
      className={classNames(
        styles.root,
        styles[weight],
        styles[view],
        styles[color]
      ) + ' ' + className}
      style={{
        WebkitLineClamp: maxLines,
      }}
    >
      {children}
    </Tag>
  );
};

export default Text;