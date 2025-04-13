import { useRef, useState, useEffect } from 'react';
import styles from './Drive.module.scss'
import Text from '@components/Text';
import Folder from '@components/Icons/Folder';
import FileItem from '../ListItems/FileItem';

export const DriveText = () => (
    <Text
    >
        Последние
    </Text>
);
const Drive = () => {
    const fileListRef = useRef<HTMLDivElement>(null);
    const [canScroll, setCanScroll] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if (fileListRef.current) {
                setCanScroll(
                    fileListRef.current.scrollHeight > fileListRef.current.clientHeight
                );
            }
        };

        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scrollDown = () => {
        if (fileListRef.current) {
            fileListRef.current.scrollBy({ top: 50, behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.root_block}>
            <div className={styles.root_block__header}>
                <Text view='title' weight='medium' color='secondary' className={styles.root_block__header__title}>Последние</Text>
                <Folder className={styles.root_block__header__folder_icon}/>
            </div>
            <hr color='#6B6D7F'/>
            <div ref={fileListRef} className={styles.file_list}>
                <FileItem LinkFile="https://zagorie.ru/upload/iblock/4ea/4eae10bf98dde4f7356ebef161d365d5.pdf" />
                <FileItem LinkFile="https://zagorie.ru/upload/iblock/4ea/4eae10bf98dde4f7356ebef161d365d5.doc" />
                <FileItem LinkFile="https://zagorie.ru/upload/iblock/4ea/4eae10bf98dde4f7356ebef161d365d5.jpg" />
                <FileItem LinkFile="https://zagorie.ru/upload/iblock/4ea/4eae10bf98dde4f7356ebef161d365d5.css" />
                <FileItem LinkFile="https://zagorie.ru/upload/iblock/4ea/4eae10bf98dde4f7356ebef161d365d5.pdf" />
                <FileItem LinkFile="https://zagorie.ru/upload/iblock/4ea/4eae10bf98dde4f7356ebef161d365d5.doc" />
                <FileItem LinkFile="https://zagorie.ru/upload/iblock/4ea/4eae10bf98dde4f7356ebef161d365d5.jpg" />
                <FileItem LinkFile="https://zagorie.ru/upload/iblock/4ea/4eae10bf98dde4f7356ebef161d365d5.css" />
            </div>
            <div
                className={`${styles.pagination} ${!canScroll ? styles.hidden : ''}`}
                onClick={scrollDown}
            >
                <div className={styles.pagination__icon}></div>
            </div>
        </div>
    );
};

export default Drive;