import { useState } from 'react';
import styles from './CallItem.module.scss';
import Text from '@components/Text';

const CallItem = (props: { title: string; description: string; datetime: string }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className={`${styles.item} ${expanded ? styles.expanded : ''}`} onClick={handleToggle}>
      <div className={styles.item__header}>
        <Text className={styles.item__title} color="primary" view="p-20">
          {props.title}
        </Text>
        <Text className={styles.datetime} color="accent" view="p-16">
          {props.datetime}
        </Text>
      </div>
      {expanded && (
        <Text className={styles.item__description} color="secondary" view="p-16">
          {props.description}
        </Text>
      )}
    </div>
  );
};

export default CallItem;
