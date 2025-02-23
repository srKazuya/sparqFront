
import Tile from './components/Tile';
import Header from './components/Header';
import styles from './Dashboard.module.scss'

const Dashboard = () =>{

    return (
        <div className={styles.mainCont}>
            <Header />
            <Tile />
        </div>
    )
}
export default Dashboard