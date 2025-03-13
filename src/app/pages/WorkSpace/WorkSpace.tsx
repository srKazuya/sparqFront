import Drive from "./Components/Drive";
import Tasks from "./Components/Tasks";
import Notifications from "./Components/Notifications";
import Calls from "./Components/Calls";
import Integration from "./Components/Integration";

const WorkSpace = () => {
    return(
        <div>
            <Drive/>
            <br/>
            <Tasks/>
            <br/>
            <Notifications/>
            <br/>
            <Calls/>
            <br/>
            <Integration link_source={"https://github.com/"} />
        </div>
    )
}

export default WorkSpace;