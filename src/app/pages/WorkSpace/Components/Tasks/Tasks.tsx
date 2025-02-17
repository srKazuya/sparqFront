import { useRef, useState, useEffect } from 'react';
import styles from './Tasks.module.scss';
import Text from '@components/Text';
import TaskIcon from '@components/Icons/Task';
import TaskItem from '../ListItems/TaskItem/TaskItem';

const Tasks = () => {
    const taskListRef = useRef<HTMLDivElement>(null);
    const [canScroll, setCanScroll] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if (taskListRef.current) {
                setCanScroll(taskListRef.current.scrollHeight > taskListRef.current.clientHeight);
            }
        };

        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scrollDown = () => {
        if (taskListRef.current) {
            taskListRef.current.scrollBy({ top: 50, behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.root_block}>
            <div className={styles.root_block__header}>
                <Text view="title" weight="medium" color="secondary" className={styles.root_block__header__title}>
                    Задачи
                </Text>
                <TaskIcon className={styles.root_block__header__task_icon} />
            </div>
            <hr color="#6B6D7F" />
            <div ref={taskListRef} className={styles.task_list}>
                {Array(8)
                    .fill('Выпить раф на банановом молоке, не забыть делать вид, что работаешь')
                    .map((task, index) => (
                        <TaskItem key={index} name={task} />
                    ))}
            </div>
            <div className={`${styles.pagination} ${!canScroll ? styles.hidden : ''}`} onClick={scrollDown}>
                <div className={styles.pagination__icon}></div>
            </div>
        </div>
    );
};

export default Tasks;
