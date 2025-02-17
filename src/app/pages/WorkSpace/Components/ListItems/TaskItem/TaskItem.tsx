import CheckBox from '@components/CheckBox';
import styles from './TaskItem.module.scss';
import Text from '@components/Text';
import { useState } from 'react';

const TaskItem = (props: { name: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.item}  onClick={handleToggle}>
            <CheckBox importance="high" className={isExpanded ? styles.checkbox__expanded : styles.checkbox} onChange={() => {}} />
            {!isExpanded && 
            <Text className={styles.task_name} color="primary" view="p-20">
                {props.name}
            </Text>
            }

            {isExpanded && (
                <Text className={styles.full_text} color="primary" view="p-18">
                {props.name}
                </Text>
            )}
        </div>
    );
};

export default TaskItem;
