import { CallsText } from "../../../Calls"
import { DriveText } from "../../../Drive"
import { IntegrationText } from "../../../Integration"
import { NotificationsText } from "../../../Notifications"
import { TasksText } from "../../../Tasks"


const AddList = ({ onReturnButtonClick }: { onReturnButtonClick: () => void }) =>{
    return (
        <div>
        <button onClick={onReturnButtonClick}>Назад</button>
            <DriveText />
            <TasksText />
            <NotificationsText />
            <CallsText />
            <IntegrationText />
        </div>
    )
}
export default AddList