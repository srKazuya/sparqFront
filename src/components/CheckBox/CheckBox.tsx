import React from 'react';
import classNames from 'classnames';
import './checkbox.css';
import CheckIcon from '@components/Icons/CheckIcon';

export type CheckBoxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  /** Вызывается при клике на чекбокс */
  onChange: (checked: boolean) => void;
  /** Уровень важности для изменения цвета рамки */
  importance?: 'low' | 'medium' | 'high'; // Добавляем пропс для важности
};

const CheckBox: React.FC<CheckBoxProps> = ({ onChange, className, disabled, importance = 'low', ...props }) => {
  return (
    <label
      className={classNames(className, 'custom-checkbox', disabled && 'disabled-checkbox', importance)}
    >
      <input
        {...props}
        type="checkbox"
        className="input"
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
      />
      <CheckIcon className="icon" />
    </label>
  );
};

export default CheckBox;
