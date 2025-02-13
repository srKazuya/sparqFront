import styles from './Drive.module.scss'
import Text from '@components/Text';
import Folder from '@components/Icons/Folder';
import FileItem from '../ListItems/FileItem';
import PdfIcon from '@assets/icons/pdf_icon.svg';

const Drive = () => {
    return (
        <div className={styles.root_block}>
            <div className={styles.root_block__header}>
                <Text view='title' weight='medium' color='secondary' className={styles.root_block__header__title}>Последние</Text>
                <Folder className={styles.root_block__header__folder_icon}/>
            </div>
            <hr color='#6B6D7F'/>
            <FileItem LinkFile='https://zagorie.ru/upload/iblock/4ea/4eae10bf98dde4f7356ebef161d365d5.pdf'/>
        </div>
    );
};

export default Drive;