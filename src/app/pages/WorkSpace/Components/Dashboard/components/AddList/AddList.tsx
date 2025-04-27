import { useState } from 'react';
import { useDrag } from 'react-dnd';
import styles from './AddList.module.scss';
import { CallsText } from '../../../Calls';
import { DriveText } from '../../../Drive';
import { IntegrationText } from '../../../Integration';
import { NotificationsText } from '../../../Notifications';
import { TasksText } from '../../../Tasks';

const DraggableItem = ({ type, children }: { type: string; children: React.ReactNode }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "component",
        item: { type },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            className={`${styles.draggableItem} ${isDragging ? styles.dragging : ''}`}
        >
            {children}
        </div>
    );
};

const AddList = ({ onReturnButtonClick }: { onReturnButtonClick: () => void }) => {
    const [isExiting, setIsExiting] = useState(false);

    const handleReturn = () => {
        setIsExiting(true);
        setTimeout(() => {
            onReturnButtonClick();
            setIsExiting(false);
        }, 300);
    };

    return (
        <div className={`${styles.Dashboard_item} ${isExiting ? styles.slideOut : ''}`}>
            <DraggableItem type="Tasks">
                <TasksText />
            </DraggableItem>
            <DraggableItem type="Calls">
                <CallsText />
            </DraggableItem>
            <DraggableItem type="Drive">
                <DriveText />
            </DraggableItem>
            <DraggableItem type="Integration">
                <IntegrationText />
            </DraggableItem>
            <DraggableItem type="Notifications">
                <NotificationsText />
            </DraggableItem>
            <button 
                onClick={handleReturn} 
                className={styles.Back_btn}
            >
                Назад
            </button>
        </div>
    );
};

export default AddList;