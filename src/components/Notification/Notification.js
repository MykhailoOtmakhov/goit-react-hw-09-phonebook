import React from 'react'
import styles from './Notification.module.css';

const Notification = ({message}) => (
    <div className={styles.notificationContainer}>
        <p className={styles.text}>{message}</p>
    </div>
)

export default Notification