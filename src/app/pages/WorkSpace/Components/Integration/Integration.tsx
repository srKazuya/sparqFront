import styles from './Integration.module.scss'; 
import { Link } from 'react-router-dom';
import GitIcon from '@assets/img/Git.png';
import Text from '@components/Text';
export const IntegrationText = () => (
    <Text
    >
            Интеграции
    </Text>
);
const Integration = (props: { link_source: string }) => {
    return (
        <div className={styles.root_block}>
            <Link to={props.link_source} className={styles.custom__a}>
                <img src={GitIcon} alt="Git Icon" />
            </Link>
        </div>
    );
}

export default Integration;
