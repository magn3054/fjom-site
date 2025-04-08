import React from 'react';
import styles from './Toast.module.css';

export default function Toast ({ message, onClose }) {
  return (
    <div className={styles.toast}>
      <p>{message}</p>
      <button onClick={onClose}>X</button>
    </div>
  )
}