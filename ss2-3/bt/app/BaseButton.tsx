import React from 'react';
import styles from './BaseButton.module.css';

interface BaseButtonProps {
  type: 'primary' | 'success' | 'warning' | 'danger';
  children: React.ReactNode;
}

export default function BaseButton({ type, children }: BaseButtonProps) {
  return (
    <button className={`${styles.button} ${styles[type]}`}>
      {children}
    </button>
  );
}
