import { useRef, useState, useEffect } from 'react';
import styles from './Notifications.module.scss';
import Text from '@components/Text';
import NotificationItem from '../ListItems/NotificationItem';
import logo from '@assets/icons/profile_test_icon.svg';
export const NotificationsText = () => (
    <Text
    >
        Уведомления
    </Text>
);
const Notifications = () => {
    const listRef = useRef<HTMLDivElement>(null);
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (listRef.current) {
                const { scrollHeight, scrollTop, clientHeight } = listRef.current;
                setShowArrow(scrollHeight > clientHeight && scrollTop + clientHeight < scrollHeight - 5);
            }
        };

        const element = listRef.current;
        if (element) {
            handleScroll();
            element.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (element) {
                element.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleScrollDown = () => {
        if (listRef.current) {
            listRef.current.scrollBy({ top: 50, behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.root_block}>
            <div className={styles.root_block__header}>
                <Text view="title" weight="medium" color="secondary" className={styles.root_block__header__title}>
                    Уведомления
                </Text>
            </div>
            <hr color="#6B6D7F" />
            <div ref={listRef} className={styles.notification_list}>
                <NotificationItem importance={1} type="video" text="Cозвон через 1 час 5 минут" />
                <NotificationItem importance={2} type="video" text="Cозвон через 1 час 5 минут" />
                <NotificationItem importance={2} type="task" text="Cозвон через 1 час 5 минут" />
                <NotificationItem importance={3} type="task" text="Cозвон через 1 час 5 минут" />
                <NotificationItem importance={3} type="profile" profileIcon={logo} text="Cозвон через 1 час 5 минут" />
            </div>
            {showArrow && (
                <div className={styles.pagination} onClick={handleScrollDown}>
                    <div className={styles.pagination__icon}></div>
                </div>
            )}
        </div>
    );
};

export default Notifications;
