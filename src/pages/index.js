import styles from "../styles/Home.module.css";
import { FaHandshake, FaTools, FaGears } from 'react-icons/fa';
import { MdEngineering } from 'react-icons/md';
import { BsGearFill } from 'react-icons/bs';

export default function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homeBackground}>
        <h1 className={styles.homeTittle}>Elevadores y Escaleras Eléctricas</h1>
        <div className={styles.homeMenus}>
          <div className={styles.homeM1}>
            <div className={styles.homeM2}>
              <p className={styles.homeLogos}><FaTools size={35}/></p>
              <p className={styles.homeM3}>+400</p>
            </div>
            <div className={styles.homeM4}>Equipos instalados y/o ajustados</div>
            <div className={styles.homeM3}>Colombia</div>
          </div>
          <div className={styles.homeM1}>
            <div className={styles.homeM2}>
            <p className={styles.homeLogos}><BsGearFill size={35}/></p>
              <p className={styles.homeM3}>+100</p>
            </div>
            <div className={styles.homeM4}>Equipos instalados y/o ajustados</div>
            <div className={styles.homeM3}>Panamá</div>
          </div>
          <div className={styles.homeM1}>
            <p className={styles.homeLogos}><MdEngineering size={50}/></p>
            <p className={styles.homeM4}>Personal altamente calificado y con amplia experiencia</p>
          </div>
          <div className={styles.homeM1}>
            <p className={styles.homeLogos}><FaHandshake size={50}/></p>
            <p className={styles.homeM4}>El mejor servicio en equipos de transporte vertical</p>
          </div>
        </div>
      </div>
      <div>Seccion siguiente</div>
      </div>
  )
}
