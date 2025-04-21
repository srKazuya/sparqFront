import { useDrag } from "react-dnd";
import { CallsText } from "../../../Calls";
import { DriveText } from "../../../Drive";
import { IntegrationText } from "../../../Integration";
import { NotificationsText } from "../../../Notifications";
import { TasksText } from "../../../Tasks";

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
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: "grab",
                marginBottom: "10px",
            }}
        >
            {children}
        </div>
    );
};

const AddList = ({ onReturnButtonClick }: { onReturnButtonClick: () => void }) => {
    return (
        <div>
            <button onClick={onReturnButtonClick}>Назад</button>
            <DraggableItem type="Drive">
                <DriveText />
            </DraggableItem>
            <DraggableItem type="Tasks">
                <TasksText />
            </DraggableItem>
            <DraggableItem type="Notifications">
                <NotificationsText />
            </DraggableItem>
            <DraggableItem type="Calls">
                <CallsText />
            </DraggableItem>
            <DraggableItem type="Integration">
                <IntegrationText />
            </DraggableItem>
        </div>
    );
};

export default AddList;