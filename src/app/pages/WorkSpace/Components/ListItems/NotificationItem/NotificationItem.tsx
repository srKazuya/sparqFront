import classNames from 'classnames';
import styles from './NotificationItem.module.scss'
import Text from '@components/Text';
import VideoIcon from '../../../../../../assets/icons/video_icon.svg'
import TaskIcon from '../../../../../../assets/icons/task_icon.svg';

const NotificationItem = (props: {importance?: number, type?: string, profileIcon?: string, text?: string}) => {
    const importanceClass = classNames({
        [styles.red]: props.importance === 1,
        [styles.orange]: props.importance === 2,
        [styles.white]: props.importance === 3,
    });

    const IconComponent = props.type === 'video' ? VideoIcon : props.type === 'task' ? TaskIcon : props.type === 'profile' ? props.profileIcon : null;

    return(
        <div className={styles.item}>
            <div className={classNames(styles.circle, importanceClass)} />
            {IconComponent && <img src={IconComponent} className={styles.icon} />}
            <Text className={styles.notification_text} color='primary' view='p-18'>{props.text}</Text>
        </div>
    );
}

export default NotificationItem;