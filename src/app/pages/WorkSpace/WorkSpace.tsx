import { useState } from "react";
import { useDrop } from "react-dnd";
import Drive from "./Components/Drive";
import Tasks from "./Components/Tasks";
import Dashboard from "./Components/Dashboard";
import Notifications from "./Components/Notifications";
import Calls from "./Components/Calls";
import Integration from "./Components/Integration";
import styles from "./WorkSpace.module.scss";

const WorkSpace = () => {
    const [droppedComponents, setDroppedComponents] = useState<string[]>([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "component",
        drop: (item: { type: string }) => {
            setDroppedComponents((prev) => [...prev, item.type]);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    return (
        <div className={styles.mainCont}>
            <div>
                <Dashboard />
            </div>
            <div
                ref={drop}
                className={`${styles.tasksCont} ${isOver ? styles.highlight : ""}`}
            >
                {droppedComponents.map((component, index) => {
                    if (component === "Drive") return <Drive key={index} />;
                    if (component === "Tasks") return <Tasks key={index} />;
                    if (component === "Notifications") return <Notifications key={index} />;
                    if (component === "Calls") return <Calls key={index} />;
                    if (component === "Integration") return <Integration key={index} link_source={""} />;
                    return null;
                })}
            </div>
        </div>
    );
};

export default WorkSpace;