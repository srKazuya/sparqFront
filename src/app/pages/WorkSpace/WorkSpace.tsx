import Drive from "./Components/Drive";
import Tasks from "./Components/Tasks";
import Dashboard from "./Components/Dashboard";
import Notifications from "./Components/Notifications";
import Calls from "./Components/Calls";
import Integration from "./Components/Integration";
import styles from "./WorkSpace.module.scss";
const WorkSpace = () => {
    return (

        <div className={styles.mainCont}>
            <div>
                <Dashboard />
            </div>
            <div className={styles.tasksCont}>
                <Drive />
                <Tasks />
                <Notifications />
                <Calls/>
                <Integration link_source={"https://github.com/"} />
            </div>

        </div>
    )
}

export default WorkSpace;