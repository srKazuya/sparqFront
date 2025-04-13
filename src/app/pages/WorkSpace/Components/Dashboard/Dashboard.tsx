
import Tile from './components/Tile';
import Header from './components/Header';
import styles from './Dashboard.module.scss'
import AddList from './components/AddList';
import { useState } from 'react';

const Dashboard = () => {
    const [showAddComponents, setShowAddComponents] = useState(false);

    return (
        <div className={`${styles.mainCont}`}>
            <Header />
            {showAddComponents ? (
                <div className={styles.fadeIn}>
                    <AddList />
                </div>
            ) : (
                <Tile onAddButtonClick={() => setShowAddComponents(true)} />
            )}
        </div>
    )
}
export default Dashboard