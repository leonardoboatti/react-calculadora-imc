import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/up-svg.svg'
import downImage from '../../assets/down-svg.svg'
import { setMaxListeners } from "process";

type Props = {
    item: Level
};

export const GridItem = ({item}: Props) => {
    return(
        <div className={styles.main} style={{backgroundColor:item.color}}>
            <div className={styles.gridIcon}>
                <img className={styles.imgIcon} src={item.icon === 'up' ? upImage : downImage} alt="" width="30"/>
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}