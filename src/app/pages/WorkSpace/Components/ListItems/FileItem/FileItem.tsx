import './FileItem.module.scss'
import styles from './FileItem.module.scss'
import Text from '@components/Text';

const FileItem = (props: {LinkFile: string}) => {
    const fileName = props.LinkFile.split('/').pop() || '';

    return(
        <div className={styles.item}>
             <a href={props.LinkFile} title={fileName}>{fileName}</a>
             <Text className={styles.time} color='accent' view='p-16'>Сегодня в 12:00</Text>
        </div>
    );
}

export default FileItem;