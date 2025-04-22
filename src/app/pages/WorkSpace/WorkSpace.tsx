import { useState } from "react";
import { useDrop } from "react-dnd";
import { AnimatePresence } from "framer-motion";
import Drive from "./Components/Drive";
import Tasks from "./Components/Tasks";
import Dashboard from "./Components/Dashboard";
import Notifications from "./Components/Notifications";
import Calls from "./Components/Calls";
import Integration from "./Components/Integration";
import DraggableComponent from "./Components/DraggableComponent";
import styles from "./WorkSpace.module.scss";
import { v4 as uuidv4 } from "uuid";

type DroppedItem = {
    type: string;
    id: string;
};

const WorkSpace = () => {
    const [droppedComponents, setDroppedComponents] = useState<DroppedItem[]>([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "component",
        drop: (item: { type: string }) => {
            setDroppedComponents((prev) => [
                ...prev,
                { type: item.type, id: uuidv4() },
            ]);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const moveItem = (fromIndex: number, toIndex: number) => {
        setDroppedComponents((prev) => {
            const updated = [...prev];
            const [removed] = updated.splice(fromIndex, 1);
            updated.splice(toIndex, 0, removed);
            return updated;
        });
    };

    const renderComponent = (type: string) => {
        switch (type) {
            case "Drive":
                return <Drive />;
            case "Tasks":
                return <Tasks />;
            case "Notifications":
                return <Notifications />;
            case "Calls":
                return <Calls />;
            case "Integration":
                return <Integration link_source="" />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.mainCont}>
            <div>
                <Dashboard />
            </div>
            <div
                ref={drop}
                className={`${styles.tasksCont} ${isOver ? styles.highlight : ""}`}
            >
                <AnimatePresence>
                    {droppedComponents.map((component, index) => (
                        <DraggableComponent
                            key={component.id}
                            id={component.id}
                            index={index}
                            moveItem={moveItem}
                        >
                            {renderComponent(component.type)}
                        </DraggableComponent>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default WorkSpace;