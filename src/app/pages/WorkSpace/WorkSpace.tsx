import Drive from "./Components/Drive";
import Tasks from "./Components/Tasks";
import Notifications from "./Components/Notifications";

const WorkSpace = () => {
    return(
        <div>
            <Drive/>
            <br/>
            <Tasks/>
            <br/>
            <Notifications/>
        </div>
    )
}

export default WorkSpace;